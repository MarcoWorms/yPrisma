const PRISMA_AIRDROP_DISTRIBUTOR_ABI = [
	{
		inputs: [{internalType: 'contract IAirdropDistributor', name: '_airdrop', type: 'address'}],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, internalType: 'address', name: 'claimant', type: 'address'},
			{indexed: true, internalType: 'address', name: 'receiver', type: 'address'},
			{indexed: false, internalType: 'uint256', name: 'index', type: 'uint256'},
			{indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256'}
		],
		name: 'Claimed',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [{indexed: false, internalType: 'bytes32', name: 'root', type: 'bytes32'}],
		name: 'MerkleRootSet',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, internalType: 'address', name: 'previousOwner', type: 'address'},
			{indexed: true, internalType: 'address', name: 'newOwner', type: 'address'}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		inputs: [],
		name: 'airdropDistributor',
		outputs: [{internalType: 'contract IAirdropDistributor', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'claimant', type: 'address'},
			{internalType: 'address', name: 'receiver', type: 'address'},
			{internalType: 'uint256', name: 'index', type: 'uint256'},
			{internalType: 'uint256', name: 'amount', type: 'uint256'},
			{internalType: 'bytes32[][2]', name: 'merkleProof', type: 'bytes32[][2]'}
		],
		name: 'claim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: 'receiver', type: 'address'}],
		name: 'claimCallback',
		outputs: [{internalType: 'address', name: 'callback', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: 'index', type: 'uint256'}],
		name: 'isClaimed',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'merkleRoot',
		outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function'},
	{
		inputs: [{internalType: 'address', name: '_callback', type: 'address'}],
		name: 'setClaimCallback',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'bytes32', name: '_merkleRoot', type: 'bytes32'}],
		name: 'setMerkleRoot',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;

export {PRISMA_AIRDROP_DISTRIBUTOR_ABI};
