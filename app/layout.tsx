import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: "Shakllar - SVG Shakllar To'plami",
	description:
		"Kelajakdagi loyihangiz uchun 120+ dan ortiq asosiy SVG shakllar to'plami",
	icons:
		'https://za91ew3vlq.ufs.sh/f/b5JZpOxCrSeIRBOUeEnFMq3lgbNjKidtsyz8vrWcn6ATUf27',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
