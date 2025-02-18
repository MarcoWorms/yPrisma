import React from 'react';
import Link from 'next/link';
import {
	DEFAULT_CHAIN_ID,
	DYFI_STAKING_ADDRESS,
	LP_YPRISMA_STAKING_ADDRESS,
	MKUSD_YVAULT_ADDRESS,
	MKUSD_YVAULT_STAKING_ADDRESS,
	PRISMA_ADDRESS,
	YCRV_STAKING_ADDRESS,
	YPRISMA_ADDRESS,
	YPRISMA_LEGACY_ADDRESS,
	YPRISMA_STAKING_ADDRESS
} from 'utils/constants';
import {toAddress} from '@yearn-finance/web-lib/utils/address';
import {getNetwork} from '@yearn-finance/web-lib/utils/wagmi/utils';

import type {ReactElement} from 'react';

function Index(): ReactElement {
	const blockExplorer = getNetwork(DEFAULT_CHAIN_ID).blockExplorers?.etherscan?.url;

	return (
		<div>
			<div className={'relative mx-auto mb-0 flex w-full flex-col bg-neutral-0 pt-14'}>
				<div className={'relative mx-auto mt-6 w-screen max-w-6xl pb-40'}>
					<section className={'grid-cols-12 gap-0 md:grid md:pt-12'}>
						<div className={'col-span-12 md:col-span-8 md:mb-0 md:pr-20'}>
							<div className={'mb-10 flex flex-col justify-center'}>
								<h1 className={'mt-6 block text-3xl font-black md:text-5xl'}>
									<span
										className={'bg-clip-text text-transparent'}
										style={{
											backgroundImage:
												'-webkit-linear-gradient(0deg, rgba(200,25,40,1) 0%, rgba(219,110,55,1) 20%, rgba(236,184,64,1) 40%, rgba(104,183,120,1) 60%, rgba(71,119,211,1) 80%, rgba(72,44,216,1) 100%)'
										}}>
										{'Oooo'}
									</span>
									{', tell me more!'}
								</h1>
							</div>
							<div className={'mb-8 border-neutral-200 py-2 text-neutral-700 md:border-l-4 md:pl-6'}>
								<div>
									<div className={'mt-2 flex flex-col space-y-2 text-neutral-900/80'}>
										<p>
											{'Learn more about what yPRISMA is and how it works over in our '}
											<Link
												href={'https://docs.yearn.fi/getting-started/products/yprisma/overview'}
												target={'_blank'}
												rel={'noopener noreferrer'}
												className={'underline'}>
												{'docs'}
											</Link>
											{'.'}
										</p>
										<p>{'Find a list of all contract addresses on this site here below...'}</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div className={'col-span-3 mt-6 w-full items-center rounded-lg bg-neutral-100'}>
						<div className={'mb-4 border-b border-neutral-200 p-4 md:mb-6 md:p-6'}>
							<b className={'text-lg'}>{'yPrisma deployment addresses'}</b>
						</div>
						<dl className={'flex flex-col gap-4 p-4 md:p-6'}>
							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'Prisma Token'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${PRISMA_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(PRISMA_ADDRESS)}</dd>
								</Link>
							</div>

							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'yPrisma Token'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${YPRISMA_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(YPRISMA_ADDRESS)}</dd>
								</Link>
							</div>
							<div
								className={
									'flex w-full flex-col items-baseline justify-between opacity-40 md:flex-row'
								}>
								<dt className={'text-neutral-900/60'}>{'Legacy yPrisma Token'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${YPRISMA_LEGACY_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(YPRISMA_LEGACY_ADDRESS)}</dd>
								</Link>
							</div>
							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'yPrisma Staking Contract'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${YPRISMA_STAKING_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(YPRISMA_STAKING_ADDRESS)}</dd>
								</Link>
							</div>
							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'yCRV Staking Contract'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${YCRV_STAKING_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(YCRV_STAKING_ADDRESS)}</dd>
								</Link>
							</div>
							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'yPrismaLP Staking Contract'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${LP_YPRISMA_STAKING_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(LP_YPRISMA_STAKING_ADDRESS)}</dd>
								</Link>
							</div>
							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'dYFI Staking Contract'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${DYFI_STAKING_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(DYFI_STAKING_ADDRESS)}</dd>
								</Link>
							</div>
							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'yvmkUSD-A Token'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${MKUSD_YVAULT_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(MKUSD_YVAULT_ADDRESS)}</dd>
								</Link>
							</div>
							<div className={'flex w-full flex-col items-baseline justify-between md:flex-row'}>
								<dt className={'text-neutral-900/60'}>{'yvmkUSD-A Staking Contract'}</dt>
								<Link
									className={'cursor-alias text-xs hover:underline md:text-base'}
									href={`${blockExplorer}/address/${MKUSD_YVAULT_STAKING_ADDRESS}`}>
									<dd className={'font-number'}>{toAddress(MKUSD_YVAULT_STAKING_ADDRESS)}</dd>
								</Link>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
