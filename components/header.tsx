'use client'

import { motion } from 'framer-motion'

export default function Header() {
	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
	}

	const logoVariants = {
		initial: { scale: 0.8, opacity: 0 },
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 200,
				delay: 0.2,
			},
		},
		hover: {
			scale: 1.05,
			transition: { type: 'spring', stiffness: 400 },
		},
	}

	const circleVariants = {
		initial: { scale: 0 },
		animate: (i: number) => ({
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 300,
				delay: 0.1 * i,
			},
		}),
		hover: {
			scale: 1.2,
			transition: { type: 'spring', stiffness: 400, duration: 0.2 },
		},
	}

	return (
		<div className='relative mb-12 mt-8 overflow-hidden'>
			{/* Background gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black -z-10' />
			<div data-framer-component-type='SVG' aria-hidden='true'></div>
			<div className='flex items-center justify-between mb-2'>
				<motion.div
					className='flex items-center gap-2'
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<motion.div
						variants={logoVariants}
						initial='initial'
						animate='animate'
						whileHover='hover'
						className='relative'
					>
						<svg
							width='32'
							height='32'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							{[12, 19, 5].map((cx, i) => (
								<motion.circle
									key={i}
									cx={cx}
									cy='12'
									r='3'
									fill='white'
									custom={i}
									variants={circleVariants}
									initial='initial'
									animate='animate'
									whileHover='hover'
								/>
							))}
						</svg>
					</motion.div>
					<motion.span
						className='text-sm text-gray-400 ml-auto'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
					>
						Shakllar kolleksiyasi tomonidan yaratilgan
					</motion.span>
				</motion.div>
			</div>

			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				className='mt-12'
			>
				<motion.h1
					variants={item}
					className='text-7xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200'
				>
					SHAKLLAR
				</motion.h1>

				<motion.p
					variants={item}
					className='text-xl text-gray-300 max-w-3xl mb-4'
				>
					Kelajakdagi loyihangiz uchun 120+ dan ortiq asosiy SVG shakllar
					to&apos;plamini o&apos;rganing.
				</motion.p>

				<motion.p
					variants={item}
					className='text-xl text-gray-300 max-w-3xl mb-8'
				>
					Shaklning SVG kodini vaqtinchalik xotiraga nusxalash uchun shunchaki
					unga bosing.
				</motion.p>
			</motion.div>

			{/* Animated shapes in background */}
			<div className='absolute -z-10 inset-0 overflow-hidden'>
				{[...Array(5)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute opacity-10'
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${30 + Math.random() * 40}px`,
							height: `${30 + Math.random() * 40}px`,
							borderRadius: Math.random() > 0.5 ? '50%' : '0%',
							background: 'white',
						}}
						animate={{
							x: [0, Math.random() * 100 - 50],
							y: [0, Math.random() * 100 - 50],
							rotate: [0, 360],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 10 + Math.random() * 20,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>
				))}
			</div>
		</div>
	)
}
