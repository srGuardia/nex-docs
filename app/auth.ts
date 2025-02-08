import { AuthOptions, getServerSession } from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

const authOptions: AuthOptions = {
  debug: process.env.NODE_ENV === 'development',
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }
