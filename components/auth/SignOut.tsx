"use client"

import { Button } from "../ui/button"
import { authClient } from "@/lib/auth-client"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function SignOut() {
	const router = useRouter()
	const signOut = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/")
					toast.success("Signed out successfully")
				},
			},
		})
	}

	return (
		<Button onClick={signOut} size={"wide"}>
			<LogOut color="var(--primary-foreground) " />
			signOut
		</Button>
	)
}
