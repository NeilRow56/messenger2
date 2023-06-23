import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/' //Initial login page
  }
})

export const config = {
  matcher: ['/conversations/:path*', '/users/:path*']
}
