import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const location = useLocation()
  const showHeader = location.pathname !== '/'

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 pb-12 pt-6 sm:px-8 sm:pt-8 md:px-12">
        {showHeader && <Header />}
        {children}
      </div>
      <Footer />
    </div>
  )
}
