'use client'

import { authClient } from "@/lib/auth-client"

export const clientSession = () => {
  const session = authClient.useSession()
  return session
}