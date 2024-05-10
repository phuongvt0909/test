import type { Metadata } from 'next';
import { Marcellus } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const marcallus = Marcellus({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <Head>
			</Head> */}
			<body className={marcallus.className}>
				<Theme>
					{children}
				</Theme>
			</body>
		</html>
	);
}
