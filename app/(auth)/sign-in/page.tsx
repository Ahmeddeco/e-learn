import SignIn from "@/components/auth/SignIn"
import { serverSession } from "@/functions/helpers/serverSession"
import { redirect } from "next/navigation"



export default async function SignInPage() {
	const session = await serverSession()
	if (session) {
		redirect("/")
	}
	return <SignIn />
}
