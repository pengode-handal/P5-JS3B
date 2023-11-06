import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

const scopes = ['identify', 'email']

export const authOptions: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: {params: {scope: scopes.join(' ')}},
        })
    ],
    secret : process.env.NEXTAUTH_SECRET as string
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}