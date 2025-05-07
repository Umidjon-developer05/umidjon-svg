'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { shapes } from '@/lib/shapes'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from '@/hooks/use-toast'
import { renderToStaticMarkup } from 'react-dom/server'

export default function ShapeGrid() {
	const [selectedTab, setSelectedTab] = useState<'svg' | 'jsx'>('svg')
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	const copyToClipboard = (
		ShapeComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>,
		index: number
	) => {
		try {
			const svgString = renderToStaticMarkup(
				<ShapeComponent width={24} height={24} />
			)

			let textToCopy = svgString

			if (selectedTab === 'jsx') {
				textToCopy = svgString
					.replace(/class=/g, 'className=')
					.replace(/fillRule=/g, 'fillRule=')
					.replace(/clipRule=/g, 'clipRule=')
					.replace(/strokeWidth=/g, 'strokeWidth=')
					.replace(/strokeLinecap=/g, 'strokeLinecap=')
					.replace(/strokeLinejoin=/g, 'strokeLinejoin=')

				textToCopy = `import React from 'react'\n\nexport default function Shape${
					index + 1
				}() {\n  return (\n    ${textToCopy}\n  )\n}`
			}

			navigator.clipboard.writeText(textToCopy)
			toast({
				title: 'Copied to clipboard!',
				description: `Shape ${
					index + 1
				} has been copied as ${selectedTab.toUpperCase()}`,
			})
		} catch (error) {
			console.error('Error copying to clipboard:', error)
			toast({
				title: 'Error copying to clipboard',
				description: 'There was an error copying the shape. Please try again.',
				variant: 'destructive',
			})
		}
	}

	return (
		<div className='py-8'>
			<div className='mb-8'>
				<Tabs
					defaultValue='svg'
					className='w-[200px]'
					onValueChange={value => setSelectedTab(value as 'svg' | 'jsx')}
				>
					<TabsList className='grid w-full grid-cols-2'>
						<TabsTrigger value='svg'>SVG</TabsTrigger>
						<TabsTrigger value='jsx'>JSX</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
				{shapes.map((ShapeComponent, index) => {
					return (
						<motion.div
							key={index}
							className='w-full h-full aspect-square bg-black/30 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 transition-colors'
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.02 }}
							onClick={() => copyToClipboard(ShapeComponent, index)}
						>
							<div className='w-full h-full p-7 flex items-center justify-center'>
								<ShapeComponent width={1000} height={1000} />
							</div>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}
