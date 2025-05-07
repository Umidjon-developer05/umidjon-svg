'use client'

import { useState, useEffect } from 'react'
import { Share, Copy, Check } from 'lucide-react'

export default function TelegramShareButton() {
	const [copied, setCopied] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const [pageUrl, setPageUrl] = useState('')

	useEffect(() => {
		setPageUrl(window.location.href)

		// Show button after a short delay
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	const shareToTelegram = () => {
		const text = encodeURIComponent(
			`Shakllar - SVG Shakllar To'plami\n\nKelajakdagi loyihangiz uchun 120+ dan ortiq asosiy SVG shakllar to'plami\n\n`
		)
		const url = encodeURIComponent(pageUrl)
		window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank')
	}

	const copyLink = () => {
		navigator.clipboard.writeText(pageUrl)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	if (!isVisible) return null

	return (
		<div className='fixed bottom-6 right-6 z-50 flex flex-col gap-2'>
			<div className='relative group'>
				<div className='absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 left-1/2 transform -translate-x-1/2 whitespace-nowrap'>
					<div className='bg-[#0088cc] text-white text-sm py-1 px-3 rounded-md shadow-lg'>
						Telegram orqali ulashish
						<div className='absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0088cc]'></div>
					</div>
				</div>
				<button
					onClick={shareToTelegram}
					className='bg-[#0088cc] hover:bg-[#0099dd] text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center'
					aria-label='Telegram orqali ulashish'
				>
					<Share size={20} />
				</button>
			</div>

			<div className='relative group'>
				<div className='absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 left-1/2 transform -translate-x-1/2 whitespace-nowrap'>
					<div className='bg-white/20 backdrop-blur-md text-white text-sm py-1 px-3 rounded-md shadow-lg'>
						Havolani nusxalash
						<div className='absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-white/20 backdrop-blur-md'></div>
					</div>
				</div>
				<button
					onClick={copyLink}
					className='bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center'
					aria-label='Havolani nusxalash'
				>
					{copied ? <Check size={20} /> : <Copy size={20} />}
				</button>
			</div>
		</div>
	)
}
