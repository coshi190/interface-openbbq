import React from "react"
import { useAccount } from "wagmi"
import { simulateContract, waitForTransactionReceipt, writeContract, readContract, readContracts } from '@wagmi/core'
import { formatEther, parseEther } from "viem"
import { Token, BigintIsh } from "@uniswap/sdk-core"
import { TickMath, encodeSqrtRatioX96, Pool, Position } from "@uniswap/v3-sdk"
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useDebouncedCallback } from 'use-debounce'
import { tokens, POSITION_MANAGER, v3FactoryContract, positionManagerContract, erc20ABI, v3PoolABI } from '@/app/lib/8899'
import { config } from '@/app/config'

export default function Liquidity({ 
    setIsLoading, setErrMsg, 
}: {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setErrMsg: React.Dispatch<React.SetStateAction<String | null>>,
}) {
    const { address } = useAccount()
    const [txupdate, setTxupdate] = React.useState("")
    const [tokenA, setTokenA] = React.useState<{name: string, value: '0xstring', logo: string}>(tokens[0])
    const [tokenABalance, setTokenABalance] = React.useState("")
    const [amountA, setAmountA] = React.useState("")
    const [tokenB, setTokenB] = React.useState<{name: string, value: '0xstring', logo: string}>({name: 'Choose Token', value: '0x' as '0xstring', logo: '../favicon.ico'})
    const [tokenBBalance, setTokenBBalance] = React.useState("")
    const [amountB, setAmountB] = React.useState("")
    const [feeSelect, setFeeSelect] = React.useState(10000)
    const [pairDetect, setPairDetect] = React.useState("")
    const [currPrice, setCurrPrice] = React.useState("")
    const [lowerPrice, setLowerPrice] = React.useState("")
    const [upperPrice, setUpperPrice] = React.useState("")
    const [lowerPercentage, setLowerPercentage] = React.useState("0")
    const [upperPercentage, setUpperPercentage] = React.useState("0")
    const [currTickSpacing, setCurrTickSpacing] = React.useState("")
    const [lowerTick, setLowerTick] = React.useState("")
    const [upperTick, setUpperTick] = React.useState("")
    const [rangePercentage, setRangePercentage] = React.useState(0.15)
    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)

    const setAlignedLowerTick = useDebouncedCallback((_lowerPrice: string) => {
        setAmountA("")
        setAmountB("")
        const _lowerTick = Math.floor(Math.log(Number(_lowerPrice)) / Math.log(1.0001))
        let alignedLowerTick
        if (Number(_lowerPrice) === 0) {
            alignedLowerTick = Math.ceil(TickMath.MIN_TICK / Number(currTickSpacing)) * Number(currTickSpacing)
        } else {
            alignedLowerTick = Math.floor(_lowerTick / Number(currTickSpacing)) * Number(currTickSpacing)
            setLowerPrice(Math.pow(1.0001, alignedLowerTick).toString())
        }
        setLowerPercentage((((Math.pow(1.0001, alignedLowerTick) / Number(currPrice)) - 1) * 100).toString())
        setLowerTick(alignedLowerTick.toString())
    }, 700)

    const setAlignedUpperTick = useDebouncedCallback((_upperPrice: string) => {
        setAmountA("")
        setAmountB("")
        if (Number(_upperPrice) < Number(lowerPrice)) {
            setUpperPrice("")
            setUpperPercentage("")
        } else {
            const _upperTick = Math.ceil(Math.log(Number(_upperPrice)) / Math.log(1.0001))
            let alignedUpperTick
            if (Number(_upperPrice) === Infinity) {
                alignedUpperTick = Math.floor(TickMath.MAX_TICK / Number(currTickSpacing)) * Number(currTickSpacing)
                setUpperPercentage('+♾️')
            } else {
                alignedUpperTick = Math.ceil(_upperTick / Number(currTickSpacing)) * Number(currTickSpacing)
                setUpperPercentage((((Math.pow(1.0001, alignedUpperTick) / Number(currPrice)) - 1) * 100).toString())
                setUpperPrice(Math.pow(1.0001, alignedUpperTick).toString())
            }
            setUpperTick(alignedUpperTick.toString())
        }
    }, 700)

    const setAlignedAmountB = useDebouncedCallback(async (_amountA: string) => {
        const poolState = await readContracts(config, {
            contracts: [
                { ...v3PoolABI, address: pairDetect as '0xstring', functionName: 'token0' },
                { ...v3PoolABI, address: pairDetect as '0xstring', functionName: 'slot0' },
                { ...v3PoolABI, address: pairDetect as '0xstring', functionName: 'liquidity' },
            ]
        })
        const token0 = poolState[0].result !== undefined ? poolState[0].result : "" as '0xstring'
        const sqrtPriceX96 = poolState[1].result !== undefined ? poolState[1].result[0] : BigInt(0)
        const tick = poolState[1].result !== undefined ? poolState[1].result[1] : 0
        const liquidity = poolState[2].result !== undefined ? poolState[2].result : BigInt(0)
        const Token0 = new Token(8899, token0, 18)
        const Token1 = String(token0).toUpperCase() === tokenA.value.toUpperCase() ? new Token(8899, tokenB.value, 18) : new Token(8899, tokenA.value, 18)
        const pool = new Pool(
            Token0,
            Token1,
            Number(feeSelect),
            sqrtPriceX96.toString(),
            liquidity.toString(),
            tick
        )
        if (String(token0).toUpperCase() === tokenA.value.toUpperCase()) {
            const singleSidePositionToken0 = Position.fromAmount0({
                pool, 
                tickLower: Number(lowerTick), 
                tickUpper: Number(upperTick), 
                amount0: String(parseEther(_amountA)) as BigintIsh,
                useFullPrecision: true
            })
            setAmountB(formatEther(singleSidePositionToken0.mintAmounts.amount1 as unknown as bigint))
        } else {
            const singleSidePositionToken1 = Position.fromAmount1({
                pool, 
                tickLower: Number(lowerTick), 
                tickUpper: Number(upperTick), 
                amount1: String(parseEther(_amountA)) as BigintIsh,
            })
            setAmountB(formatEther(singleSidePositionToken1.mintAmounts.amount0 as unknown as bigint))
        }
    }, 700)

    const placeLiquidity = async () => {
        setIsLoading(true)
        try {
            let getToken0 = pairDetect !== '0x0000000000000000000000000000000000000000' ? 
                await readContract(config, { ...v3PoolABI, address: pairDetect as '0xstring', functionName: 'token0' }) :
                ''
            if (pairDetect === '0x0000000000000000000000000000000000000000') {
                const { request: request0 } = await simulateContract(config, {
                    ...v3FactoryContract,
                    functionName: 'createPool',
                    args: [tokenA.value, tokenB.value, feeSelect]
                })
                let h = await writeContract(config, request0)
                await waitForTransactionReceipt(config, { hash: h })

                const newPair = await readContract(config, {...v3FactoryContract, functionName: 'getPool', args: [tokenA.value, tokenB.value, feeSelect] })
                getToken0 = await readContract(config, { ...v3PoolABI, address: newPair as '0xstring', functionName: 'token0'})
                const amount0 = getToken0.toUpperCase() === tokenA.value.toUpperCase() ? amountA : amountB
                const amount1 = getToken0.toUpperCase() === tokenA.value.toUpperCase() ? amountB : amountA
                const { request: request1 } = await simulateContract(config, {
                    ...v3PoolABI,
                    address: newPair as '0xstring',
                    functionName: 'initialize',
                    args: [BigInt(encodeSqrtRatioX96(parseEther(amount1).toString(), parseEther(amount0).toString()).toString())]
                })
                h = await writeContract(config, request1)
                await waitForTransactionReceipt(config, { hash: h })
                setTxupdate(h)
            }
            
            const allowanceA = await readContract(config, { ...erc20ABI, address: tokenA.value, functionName: 'allowance', args: [address as '0xstring', POSITION_MANAGER] })
            if (allowanceA < parseEther(amountA)) {
                const { request } = await simulateContract(config, { ...erc20ABI, address: tokenA.value, functionName: 'approve', args: [POSITION_MANAGER, parseEther(amountA)] })
                const h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const allowanceB = await readContract(config, { ...erc20ABI, address: tokenB.value, functionName: 'allowance', args: [address as '0xstring', POSITION_MANAGER] })
            if (allowanceB < parseEther(amountB)) {
                const { request } = await simulateContract(config, { ...erc20ABI, address: tokenB.value, functionName: 'approve', args: [POSITION_MANAGER, parseEther(amountB)] })
                const h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            
            const token0 = getToken0.toUpperCase() === tokenA.value.toUpperCase() ? tokenA : tokenB
            const token1 = getToken0.toUpperCase() === tokenA.value.toUpperCase() ? tokenB : tokenA
            const amount0 = getToken0.toUpperCase() === tokenA.value.toUpperCase() ? amountA : amountB
            const amount1 = getToken0.toUpperCase() === tokenA.value.toUpperCase() ? amountB : amountA
            const { request } = await simulateContract(config, {
                ...positionManagerContract,
                functionName: 'mint',
                args: [{
                    token0: token0.value as '0xstring',
                    token1: token1.value as '0xstring',
                    fee: feeSelect,
                    tickLower: Number(lowerTick),
                    tickUpper: Number(upperTick),
                    amount0Desired: parseEther(amount0),
                    amount1Desired: parseEther(amount1),
                    amount0Min: BigInt(0),
                    amount1Min: BigInt(0),
                    recipient: address as '0xstring',
                    deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 10),
                }]
            })
            const h = await writeContract(config, request)
            await waitForTransactionReceipt(config, { hash: h })
            setTxupdate(h)
        } catch (e) {
            setErrMsg(String(e))
        }
        setIsLoading(false)
    }

    React.useEffect(() => {
        const fetch1 = async () => {
            tokenA.value.toUpperCase() === tokenB.value.toUpperCase() && setTokenB({name: 'Choose Token', value: '0x' as '0xstring', logo: '../favicon.ico'})

            const stateA = await readContracts(config, {
                contracts: [
                    { ...erc20ABI, address: tokenA.value, functionName: 'symbol' },
                    { ...erc20ABI, address: tokenA.value, functionName: 'balanceOf', args: [address as '0xstring'] }
                ]
            })
            const stateB = await readContracts(config, {
                contracts: [
                    { ...erc20ABI, address: tokenB.value, functionName: 'symbol' },
                    { ...erc20ABI, address: tokenB.value, functionName: 'balanceOf', args: [address as '0xstring'] },
                    { ...v3FactoryContract, functionName: 'getPool', args: [tokenA.value, tokenB.value, feeSelect] }
                ]
            })
            stateA[0].result !== undefined && tokenA.name === "Choose Token" && setTokenA({
                name: stateA[0].result,
                value: tokenA.value, 
                logo: tokens.map(obj => obj.value).indexOf(tokenA.value) !== -1 ? 
                    tokens[tokens.map(obj => obj.value).indexOf(tokenA.value)].logo : 
                    "../favicon.ico"
            })
            stateB[0].result !== undefined && tokenB.name === "Choose Token" && setTokenB({
                name: stateB[0].result, 
                value: tokenB.value, 
                logo: tokens.map(obj => obj.value).indexOf(tokenB.value) !== -1 ? 
                    tokens[tokens.map(obj => obj.value).indexOf(tokenB.value)].logo : 
                    "../favicon.ico"
            })
            stateA[1].result !== undefined && setTokenABalance(formatEther(stateA[1].result))
            stateB[1].result !== undefined && setTokenBBalance(formatEther(stateB[1].result))
            stateB[2].result !== undefined && setPairDetect(stateB[2].result)
            
            if (stateB[2].result !== undefined && stateB[2].result !== '0x0000000000000000000000000000000000000000') {
                const poolState = await readContracts(config, {
                    contracts: [
                        { ...v3PoolABI, address: stateB[2].result as '0xstring', functionName: 'token0' },
                        { ...v3PoolABI, address: stateB[2].result as '0xstring', functionName: 'slot0' },
                        { ...v3PoolABI, address: stateB[2].result as '0xstring', functionName: 'tickSpacing' }
                    ]
                })
                const token0 = poolState[0].result !== undefined ? poolState[0].result : "" as '0xstring'
                const sqrtPriceX96 = poolState[1].result !== undefined ? poolState[1].result[0] : BigInt(0)
                const _currPrice = token0.toUpperCase() === tokenB.value.toUpperCase() ? 
                    (Number(sqrtPriceX96) / (2 ** 96)) ** 2 : 
                    (1 / ((Number(sqrtPriceX96) / (2 ** 96)) ** 2));
                poolState[1].result !== undefined && setCurrPrice(_currPrice.toString())
                poolState[2].result !== undefined && setCurrTickSpacing(poolState[2].result.toString())
                
                let _lowerPrice = 0
                let _upperPrice = Infinity
                let alignedLowerTick = 0
                let alignedUpperTick = 0
                if (rangePercentage !== 1) {
                    _lowerPrice = ((Number(sqrtPriceX96) / (2 ** 96)) ** 2) * (1 - rangePercentage)
                    _upperPrice = ((Number(sqrtPriceX96) / (2 ** 96)) ** 2) * (1 + rangePercentage)
                    const _lowerTick = Math.floor(Math.log(_lowerPrice) / Math.log(1.0001))
                    const _upperTick = Math.ceil(Math.log(_upperPrice) / Math.log(1.0001))
                    alignedLowerTick = poolState[2].result !== undefined ? Math.floor(_lowerTick / poolState[2].result) * poolState[2].result : 0
                    alignedUpperTick = poolState[2].result !== undefined ? Math.ceil(_upperTick / poolState[2].result) * poolState[2].result : 0
                } else {
                    alignedLowerTick = poolState[2].result !== undefined ? Math.ceil(TickMath.MIN_TICK / poolState[2].result) * poolState[2].result : 0
                    alignedUpperTick = poolState[2].result !== undefined ? Math.floor(TickMath.MAX_TICK / poolState[2].result) * poolState[2].result : 0
                }
                const _lowerPriceShow = token0.toUpperCase() === tokenB.value.toUpperCase() ? 
                    Math.pow(1.0001, alignedLowerTick) : 
                    1 / Math.pow(1.0001, alignedUpperTick);
                const _upperPriceShow = token0.toUpperCase() === tokenB.value.toUpperCase() ? 
                    Math.pow(1.0001, alignedUpperTick) : 
                    1 / Math.pow(1.0001, alignedLowerTick);
                setLowerTick(alignedLowerTick.toString())
                setUpperTick(alignedUpperTick.toString())
                rangePercentage !== 1 ? setLowerPrice(_lowerPriceShow.toString()) : setLowerPrice(_lowerPrice.toString())
                rangePercentage !== 1 ? setUpperPrice(_upperPriceShow.toString()) : setUpperPrice(_upperPrice.toString())
                rangePercentage !== 1 ? setLowerPercentage((((_lowerPriceShow / _currPrice) - 1) * 100).toString()) : setLowerPercentage('-100')
                rangePercentage !== 1 ? setUpperPercentage((((_upperPriceShow / _currPrice) - 1) * 100).toString()) : setUpperPercentage('+♾️')
            } else {
                setCurrPrice("")
                const getTickSpacing = await readContracts(config, {
                    contracts: [
                        { ...v3FactoryContract, functionName: 'feeAmountTickSpacing', args: [10000] },
                        { ...v3FactoryContract, functionName: 'feeAmountTickSpacing', args: [3000] },
                        { ...v3FactoryContract, functionName: 'feeAmountTickSpacing', args: [500] },
                        { ...v3FactoryContract, functionName: 'feeAmountTickSpacing', args: [100] },
                    ]
                })
                getTickSpacing[0].status === 'success' && feeSelect === 10000 && setCurrTickSpacing(getTickSpacing[0].result.toString())
                getTickSpacing[1].status === 'success' && feeSelect === 3000 && setCurrTickSpacing(getTickSpacing[1].result.toString())
                getTickSpacing[2].status === 'success' && feeSelect === 500 && setCurrTickSpacing(getTickSpacing[2].result.toString())
                getTickSpacing[3].status === 'success' && feeSelect === 100 && setCurrTickSpacing(getTickSpacing[3].result.toString())
            }
        }

        setAmountA("")
        setAmountB("")
        address !== undefined && rangePercentage !== 999 && fetch1()
    }, [config, address, tokenA, tokenB, feeSelect, rangePercentage, txupdate])
    console.log({lowerTick, upperTick}) // for fetch monitoring

    return (
        <div className='space-y-2'>
            <div className="rounded-lg border border-[#00ff9d]/10 p-4">
                <div className="flex justify-between items-center mb-2">
                    <div />
                    <input 
                        className="py-2 w-[340px] focus:outline-none text-gray-400 font-mono text-xs text-right" 
                        value={tokenA.value} 
                        onChange={e => {
                            if (e.target.value !== '0x') {
                                setTokenA({name: 'Choose Token', value: e.target.value as '0xstring', logo: '../favicon.ico'})
                            } else {
                                setTokenA({name: 'Choose Token', value: '0x' as '0xstring', logo: '../favicon.ico'})
                            }
                        }} 
                    />
                </div>
                <div className="flex items-center justify-between">
                    {(lowerPrice !== '' && Number(lowerPrice) < Number(currPrice)) ?
                        <input placeholder="0.0" className="bg-transparent border-none text-white font-mono text-xl text-white focus:border-0 focus:outline focus:outline-0 p-0 h-auto" value={amountA} onChange={e => {setAmountA(e.target.value); Number(upperPrice) > Number(currPrice) && setAlignedAmountB(e.target.value);}} /> :
                        <div />
                    }
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] bg-[#162638] hover:bg-[#1e3048] text-white border-[#00ff9d]/20 font-mono flex items-center justify-between h-10 cursor-pointer">
                                <div className='gap-2 flex flex-row items-center justify-center overflow-hidden'>
                                    <div className="w-5 h-5 rounded-full bg-[#00ff9d]/20">
                                        <span className="text-[#00ff9d] text-xs">
                                            {tokenA.logo !== '../favicon.ico' ?<img alt="" src={tokenA.logo} className="size-5 shrink-0 rounded-full" /> : '?'}
                                        </span>
                                    </div>
                                    <span className="truncate">{tokenA.name}</span>
                                </div>
                                <ChevronDown className="h-4 w-4 text-[#00ff9d]" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0 z-100">
                            <Command>
                                <CommandInput placeholder="Search tokens..." />
                                <CommandList>
                                    <CommandEmpty>No tokens found.</CommandEmpty>
                                    <CommandGroup>
                                        {tokens.map(token => (
                                            <CommandItem
                                                key={token.name}
                                                value={token.name}
                                                onSelect={() => {
                                                    setTokenA(token)
                                                    setOpen(false)
                                                }}
                                                className='cursor-pointer'
                                            >
                                                <div className="flex items-center">
                                                    <img alt="" src={token.logo} className="size-5 shrink-0 rounded-full" />
                                                    <span className="ml-3 truncate">{token.name}</span>
                                                </div>
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 font-mono text-xs">≈ ฿0.00</span>
                    <div>
                        <span className="text-gray-400 font-mono text-xs">{tokenA.name !== 'Choose Token' ? Number(tokenABalance).toFixed(4) + ' ' + tokenA.name : '0.0000'}</span>
                        {(lowerPrice !== '' && Number(lowerPrice) < Number(currPrice)) &&
                            <Button variant="ghost" size="sm" className="h-6 text-[#00ff9d] font-mono text-xs px-2 cursor-pointer" onClick={() => {setAmountA(tokenABalance); Number(upperPrice) > Number(currPrice) && setAlignedAmountB(tokenABalance);}}>MAX</Button>
                        }
                    </div>
                </div>
            </div>
            <div className="rounded-lg border border-[#00ff9d]/10 p-4">
                <div className="flex justify-between items-center mb-2">
                    <div />
                    <input 
                        className="py-2 w-[340px] focus:outline-none text-gray-400 font-mono text-xs text-right" 
                        value={tokenB.value} 
                        onChange={e => {
                            if (e.target.value !== '0x') {
                                setTokenB({name: 'Choose Token', value: e.target.value as '0xstring', logo: '../favicon.ico'})
                            } else {
                                setTokenB({name: 'Choose Token', value: '0x' as '0xstring', logo: '../favicon.ico'})
                            }
                        }} 
                    />
                </div>
                <div className="flex items-center justify-between">
                    {(upperPrice !== '' || Number(upperPrice) > Number(currPrice)) ?
                        <input placeholder="0.0" className="bg-transparent border-none text-white font-mono text-xl text-white focus:border-0 focus:outline focus:outline-0 p-0 h-auto" value={amountB} onChange={(e) => setAmountB(e.target.value)} /> :
                        <div />
                    }
                    <Popover open={open2} onOpenChange={setOpen2}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={open2} className="w-[180px] bg-[#162638] hover:bg-[#1e3048] text-white border-[#00ff9d]/20 font-mono flex items-center justify-between h-10 cursor-pointer">
                                <div className='gap-2 flex flex-row items-center justify-center overflow-hidden'>
                                    <div className="w-5 h-5 rounded-full bg-[#00ff9d]/20">
                                        <span className="text-[#00ff9d] text-xs">
                                            {tokenB.logo !== '../favicon.ico' ?<img alt="" src={tokenB.logo} className="size-5 shrink-0 rounded-full" /> : '?'}
                                        </span>
                                    </div>
                                    <span className="truncate">{tokenB.name}</span>
                                </div>
                                <ChevronDown className="h-4 w-4 text-[#00ff9d]" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0 z-100">
                            <Command>
                                <CommandInput placeholder="Search tokens..." />
                                <CommandList>
                                    <CommandEmpty>No tokens found.</CommandEmpty>
                                    <CommandGroup>
                                        {tokens.map(token => (
                                            <CommandItem
                                                key={token.name}
                                                value={token.name}
                                                onSelect={() => {
                                                    setTokenB(token)
                                                    setOpen2(false)
                                                }}
                                                className='cursor-pointer'
                                            >
                                                <div className="flex items-center">
                                                    <img alt="" src={token.logo} className="size-5 shrink-0 rounded-full" />
                                                    <span className="ml-3 truncate">{token.name}</span>
                                                </div>
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 font-mono text-xs">≈ ฿0.00</span>
                    {(upperPrice !== '' || Number(upperPrice) > Number(currPrice)) &&
                        <span className="text-gray-400 font-mono text-xs" onClick={() => setAmountB(tokenBBalance)}>{tokenB.name !== 'Choose Token' ? Number(tokenBBalance).toFixed(4) + ' ' + tokenB.name : '0.0000'}</span>
                    }
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 my-4 h-[50px]">
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (feeSelect === 100 ? "bg-[#162638] text-[#00ff9d] border-[#00ff9d]/30" : "bg-[#0a0b1e]/80 text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setFeeSelect(100)}>
                    <span>0.01% fee</span>
                    <span className="text-gray-500 text-[10px]">👍 stable war pairs</span>
                </Button>
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (feeSelect === 500 ? "bg-[#162638] text-[#00ff9d] border-[#00ff9d]/30" : "bg-[#0a0b1e]/80 text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setFeeSelect(500)}>
                    <span>0.05% fee</span>
                    <span className="text-gray-500 text-[12px]">👍 stable pairs</span>
                </Button>
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (feeSelect === 3000 ? "bg-[#162638] text-[#00ff9d] border-[#00ff9d]/30" : "bg-[#0a0b1e]/80 text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setFeeSelect(3000)}>
                    <span>0.3% fee</span>
                    <span className="text-gray-500 text-[12px]">👍 basic pairs</span>
                </Button>
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (feeSelect === 10000 ? "bg-[#162638] text-[#00ff9d] border-[#00ff9d]/30" : "bg-[#0a0b1e]/80 text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setFeeSelect(10000)}>
                    <span>1% fee</span>
                    <span className="text-gray-500 text-[12px]">👍 exotic pairs</span>
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-2 my-4 h-[50px]">
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (rangePercentage === 1 ? "text-[#00ff9d] border-[#00ff9d]/30" : "text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setRangePercentage(1)}>
                    <span>Full Range</span>
                    <span className="text-gray-500 text-[12px]">[-100%, ♾️]</span>
                </Button>
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (rangePercentage === 0.15 ? "text-[#00ff9d] border-[#00ff9d]/30" : "text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setRangePercentage(0.15)}>
                    <span>Wide</span>
                    <span className="text-gray-500 text-[12px]">[-15%, +15%]</span>
                </Button>
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (rangePercentage === 0.075 ? "text-[#00ff9d] border-[#00ff9d]/30" : "text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setRangePercentage(0.075)}>
                    <span>Narrow</span>
                    <span className="text-gray-500 text-[12px]">[-7.5%, +7.5%]</span>
                </Button>
                <Button variant="outline" className={"h-full font-mono px-2 py-3 rounded-md gap-1 flex flex-col items-center justify-center text-xs " + (rangePercentage === 0.02 ? "text-[#00ff9d] border-[#00ff9d]/30" : "text-gray-400 border-[#00ff9d]/10 hover:bg-[#162638] hover:text-[#00ff9d]/80 cursor-pointer")} onClick={() => setRangePercentage(0.02)}>
                    <span>Degen</span>
                    <span className="text-gray-500 text-[12px]">[-2%, +2%]</span>
                </Button>
            </div>
            {tokenA.value !== '0x' as '0xstring' && tokenB.value !== '0x' as '0xstring' && pairDetect === '0x0000000000000000000000000000000000000000' &&
                <div className="rounded-lg border border-[#00ff9d]/10 p-4 flex flex-row items-center justify-between">
                    <input className="border-none text-white font-mono text-sm text-white focus:border-0 focus:outline focus:outline-0 p-0 h-auto" placeholder="Initial Price" value={currPrice} onChange={e => setCurrPrice(e.target.value)} />
                    <span className="text-gray-500 font-mono text-xs">{tokenA.value !== '0x' as '0xstring' && tokenB.value !== '0x' as '0xstring' && tokenA.name + '/' + tokenB.name}</span>
                </div>
            }
            <div className="rounded-lg border border-[#00ff9d]/10 p-4 flex flex-row items-center justify-between">
                <input className="border-none text-white font-mono text-sm text-white focus:border-0 focus:outline focus:outline-0 p-0 h-auto"  placeholder="Lower Price" value={lowerPrice} onChange={e => {setLowerPrice(e.target.value); setAlignedLowerTick(e.target.value); setRangePercentage(999);}} />
                <span className="text-gray-500 font-mono text-xs">{tokenA.value !== '0x' as '0xstring' && tokenB.value !== '0x' as '0xstring' && tokenA.name + '/' + tokenB.name + (Number(currPrice) > 0 ? ' (' + Number(lowerPercentage).toFixed(2) + '%)' : '')}</span>
            </div>
            <div className="rounded-lg border border-[#00ff9d]/10 p-4 flex flex-row items-center justify-between">
                <input className="border-none text-white font-mono text-sm text-white focus:border-0 focus:outline focus:outline-0 p-0 h-auto"  placeholder="Upper Price" value={upperPrice} onChange={e => {setUpperPrice(e.target.value); setAlignedUpperTick(e.target.value); setRangePercentage(999);}} />
                <span className="text-gray-500 font-mono text-xs">{tokenA.value !== '0x' as '0xstring' && tokenB.value !== '0x' as '0xstring' && tokenA.name + '/' + tokenB.name + (Number(currPrice) > 0 ? ' (+' + Number(upperPercentage).toFixed(2) + '%)' : '')}</span>
            </div>
            {tokenA.value !== '0x' as '0xstring' && tokenB.value !== '0x' as '0xstring' && Number(amountA) <= Number(tokenABalance) && Number(amountB) <= Number(tokenBBalance) ?
                <Button className="w-full bg-[#00ff9d]/10 hover:bg-[#00ff9d]/20 text-[#00ff9d] border border-[#00ff9d]/30 rounded-md py-6 font-mono mt-4 cursor-pointer z-100" onClick={placeLiquidity}>Add Liquidity</Button> :
                <Button disabled className="w-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 rounded-md py-6 font-mono mt-4">Add Liquidity</Button>
            }
            <div className="mt-4 border-t border-[#00ff9d]/10 pt-4">
                <div className="flex items-center text-gray-500 font-mono text-xs my-2">
                    <span className="mr-1">$current_price</span>
                    <span className="mr-1">_</span>
                    <span className="animate-pulse">|</span>
                    <span className="text-[#00ff9d] font-mono text-xs px-2 gap-1">{Number(currPrice).toFixed(4)} {tokenA.value !== '0x' as '0xstring' && tokenB.value !== '0x' as '0xstring' && tokenA.name + '/' + tokenB.name}</span>
                </div>
            </div>
        </div>
    )
}
