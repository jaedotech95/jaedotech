import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: '재도테크',
  description: '재도테크는 경량랙, 중량랙, 파렛트랙 등 산업용 랙의 판매·시공·철거 전문업체입니다. 창고, 물류센터, 공장 등 대형 공간은 물론 가정 및 소규모 매장 맞춤형 랙 설치 및 견적 문의 가능합니다.',
  generator: 'jaedotech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
