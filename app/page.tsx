import ShapeGrid from '@/components/shape-grid'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-black to-purple-950 text-white'>
			<div className='container mx-auto px-4 py-8'>
				<Header />
				<ShapeGrid />
			</div>

			{/* Spacer section */}
			<div className='h-32 md:h-64'></div>

			<Toaster />
		</main>
	)
}
