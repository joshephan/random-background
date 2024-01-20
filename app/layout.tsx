import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '랜덤 배경 색상 나오는 웹사이트',
  description: '쓸모없는 웹사이트 만들기 #1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
