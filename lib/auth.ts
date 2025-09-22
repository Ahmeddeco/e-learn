import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { prisma } from "./prisma"
import { emailOTP } from "better-auth/plugins"
import { resend } from "./resend"

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        const { data, error } = await resend.emails.send({
          from: 'E-Learn <onboarding@resend.dev>',
          to: [ email ],
          subject: 'E-Learn - Verify your email',
          html: `<p>Use this code to verify your email: <b>${otp}</b></p>`,
        })
      },
    })
  ]
})