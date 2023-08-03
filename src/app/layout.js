import './globals.css'
import { Roboto } from 'next/font/google'
import { QuizProvider } from '@/context/quiz'
const inter = Roboto({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'JS Quiz',
  description: 'Projeto criado com intuito de praticar, aprender e se familiarizar com o React e também o NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <QuizProvider>
          {children}
        </QuizProvider>
      </body>
    </html>
  )
}
