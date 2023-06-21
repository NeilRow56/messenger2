import './globals.css'
import AuthContext from './context/AuthContext'
import ToastProvider from './context/ToastProvider'

export const metadata = {
  title: 'Messenger',
  description: 'Messenger Clone'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <AuthContext>
          <ToastProvider />

          {children}
        </AuthContext>
      </body>
    </html>
  )
}
