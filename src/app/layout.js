import '../../styles/globals.css'
import { Alata } from '@next/font/google'

const alata = Alata({
  weight: '400',
  subsets: ['latin']
})
export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={alata.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head><title>Chácara Luz do Sol</title></head>
      <body>{children}</body>
    </html>
  )
}
