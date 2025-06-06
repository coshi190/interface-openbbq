import { createPublicClient, http, erc20Abi } from 'viem'
import { bitkub } from 'viem/chains'
import { NonfungiblePositionManager, v3Factory, v3Pool, qouterV2, router02, v3staker, WrappedNative, kap20abi,CMswapUniSmartRouteABIV2,UniswapPair,BitkubEvmKYCABI,bkcUnwappedKKUB } from '@/app/lib/abi'

// swap
export const tokens: {name: string, value: '0xstring', logo: string}[] = [
    { name: 'KUB', value: '0xnative' as '0xstring', logo: '/96.png' },
    { name: 'KKUB', value: '0x67eBD850304c70d983B2d1b93ea79c7CD6c3F6b5' as '0xstring', logo: '/96.png' },
    { name: 'KUSDT', value: '0x7d984C24d2499D840eB3b7016077164e15E5faA6' as '0xstring', logo: '/usdt.png' },
    { name: 'CMM', value: '0x9B005000A10Ac871947D99001345b01C1cEf2790' as '0xstring', logo: '/cmm.png' },
    { name: 'LUMI', value: '0x95013Dcb6A561e6C003AED9C43Fb8B64008aA361' as '0xstring', logo: '/lumi.webp' },
/*     { name: 'ISOLA', value: '0xC8925E89bE4Ce76218a3e52B995C5Ae02662A94F' as '0xstring', logo: '/isola.webp' }, */
/*     { name: 'KSOLA', value: '0x9cf6dF95b918307Ff81feF70E616a094e9977a28' as '0xstring', logo: '/ksola.webp' },
    { name: 'KJFIN', value: '0x9BEc198c43B0714aEEd3c1bF21498ecBeFEB19F8' as '0xstring', logo: '/kjfin.webp' }, */
    // can PR listing here
]
export const V3_FACTORY = '0x090C6E5fF29251B1eF9EC31605Bdd13351eA316C' as '0xstring'
export const POSITION_MANAGER = '0xb6b76870549893c6b59E7e979F254d0F9Cca4Cc9' as '0xstring'
export const positionManagerCreatedAt = BigInt(25033368)
export const QOUTER_V2 = '0xCB0c6E78519f6B4c1b9623e602E831dEf0f5ff7f' as '0xstring'
export const ROUTER02 = '0x3F7582E36843FF79F173c7DC19f517832496f2D8' as '0xstring'
export const CMswapUniSmartRoute = '0x01837156518e60362048e78d025a419C51346f55' as '0xstring'
export const BitkubEvmKYC = '0x409CF41ee862Df7024f289E9F2Ea2F5d0D7f3eb4' as '0xstring' // kyc for unwrap kkub
export const bkcUnwapped = '0xff76DD8086428EBC4Ed1b14B0e56E95eDc46a315' as '0xstring'
export const v3FactoryContract = { chainId: 96, abi: v3Factory, address: V3_FACTORY } as const
export const positionManagerContract = { chainId: 96, address: POSITION_MANAGER, abi: NonfungiblePositionManager } as const
export const qouterV2Contract = { chainId: 96, abi: qouterV2, address: QOUTER_V2 } as const
export const router02Contract = { chainId: 96, abi: router02, address: ROUTER02 } as const
export const erc20ABI = { chainId: 96, abi: erc20Abi } as const
export const kap20ABI = { chainId: 96, abi: kap20abi } as const
export const v3PoolABI = { chainId: 96, abi: v3Pool } as const
export const V3_STAKER = '0xC216ad61623617Aa01b757A06836AA8D6fb547fF' as '0xstring'
export const v3StakerContract = { chainId: 96, address: V3_STAKER, abi: v3staker } as const
export const wrappedNative = { chainId: 96, abi: WrappedNative, address: tokens[1].value } as const
export const unwarppedNative = {chainId:96, abi: bkcUnwappedKKUB, address: bkcUnwapped } as const
export const CMswapUniSmartRouteContractV2 =  { chainId: 96, abi: CMswapUniSmartRouteABIV2 , address: CMswapUniSmartRoute} as const
export const UniswapPairv2PoolABI = { chainId: 96, abi: UniswapPair} as const
export const BitkubEvmKYCContract = {chainId: 96, abi: BitkubEvmKYCABI, address: BitkubEvmKYC} as const

export const publicClient = createPublicClient({ chain: bitkub, transport: http() })
