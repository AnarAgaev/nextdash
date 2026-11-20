import {Inter, Lusitana, Roboto} from 'next/font/google'

export const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
})

export const lusitana = Lusitana({
	weight: ['700'],
	subsets: ['latin'],
	variable: '--font-lusitana',
})

export const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-roboto',
})
