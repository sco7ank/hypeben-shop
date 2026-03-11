export const metadata = {
  title: 'HYPEBEN Shop',
  description: 'Streetwear Fashion Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
