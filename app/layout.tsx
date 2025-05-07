import type React from 'react'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import TelegramShareButton from '@/components/telegram-share-button'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
	display: 'swap',
})

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
	display: 'swap',
})

// Enhanced metadata for better SEO
export const metadata: Metadata = {
	title: "Shakllar - SVG Shakllar To'plami",
	description:
		"Kelajakdagi loyihangiz uchun 120+ dan ortiq asosiy SVG shakllar to'plami. Oson nusxalash va foydalanish imkoniyati.",
	keywords: [
		'SVG',
		'shapes',
		'shakllar',
		'design',
		'web design',
		'UI',
		'UX',
		'vector graphics',
		'Uzbek',
		"O'zbek",
		'dizayn',
	],
	authors: [{ name: 'Shakllar Kolleksiyasi' }],
	creator: 'Shakllar Kolleksiyasi',
	publisher: 'Shakllar Kolleksiyasi',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://www.umidjon-svg.site'),
	alternates: {
		canonical: '/',
		languages: {
			'uz-UZ': '/uz',
			'en-US': '/en',
		},
	},
	openGraph: {
		title: "Shakllar - SVG Shakllar To'plami",
		description:
			"Kelajakdagi loyihangiz uchun 120+ dan ortiq asosiy SVG shakllar to'plami",
		url: 'https://www.umidjon-svg.site',
		siteName: 'Shakllar',
		images:
			'https://za91ew3vlq.ufs.sh/f/b5JZpOxCrSeIRBOUeEnFMq3lgbNjKidtsyz8vrWcn6ATUf27',

		locale: 'uz_UZ',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: "Shakllar - SVG Shakllar To'plami",
		description:
			"Kelajakdagi loyihangiz uchun 120+ dan ortiq asosiy SVG shakllar to'plami",
		images: [
			'https://za91ew3vlq.ufs.sh/f/b5JZpOxCrSeIRBOUeEnFMq3lgbNjKidtsyz8vrWcn6ATUf27',
		],
	},
	icons: {
		icon: 'https://za91ew3vlq.ufs.sh/f/b5JZpOxCrSeIRBOUeEnFMq3lgbNjKidtsyz8vrWcn6ATUf27',
		shortcut:
			'https://za91ew3vlq.ufs.sh/f/b5JZpOxCrSeIRBOUeEnFMq3lgbNjKidtsyz8vrWcn6ATUf27',
		apple:
			'https://za91ew3vlq.ufs.sh/f/b5JZpOxCrSeIRBOUeEnFMq3lgbNjKidtsyz8vrWcn6ATUf27',
	},
}



export const viewport: Viewport = {
	themeColor: '#000000',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uz'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<TelegramShareButton />
			</body>
		</html>
	)
}
