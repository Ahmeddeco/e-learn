"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { authClient } from "@/lib/auth-client"
import { Github, Loader2, Send } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { toast } from "sonner"
export default function SignIn() {
	const router = useRouter()
	const [githubPending, startGithubTransition] = useTransition()
	const [emailPending, startEmailTransition] = useTransition()
	const [email, setEmail] = useState("")
	/* ---------------------------- signInWithGithub ---------------------------- */
	const signInWithGithub = () => {
		startGithubTransition(async () => {
			await authClient.signIn.social({
				provider: "github",
				callbackURL: "/",
				fetchOptions: {
					onSuccess: () => {
						toast.success("Signed in successfully")
					},
					onError: (error) => {
						toast.error("Internal server error")
					},
				},
			})
		})
	}

	/* ----------------------------- signInWithEmail ---------------------------- */
	const signInWithEmail = () => {
		startEmailTransition(async () => {
			await authClient.emailOtp.sendVerificationOtp({
				email: email,
				type: "sign-in",
				fetchOptions: {
					onSuccess: () => {
						toast.success("Email sent successfully")
						router.push(`/verify-request?email=${email}`)
					},
					onError: (error) => {
						toast.error("Error sending email")
					},
				},
			})
		})
	}

	return (
		<Card className="w-full ">
			<CardHeader className="space-y-4">
				<CardTitle>Welcome back!</CardTitle>
				<CardDescription>Login with your github or email account</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Button disabled={githubPending} onClick={signInWithGithub} size={"wide"} variant={"outline"}>
					{githubPending ? (
						<>
							<Loader2 className="animate-spin" />
							loading...
						</>
					) : (
						<>
							<Github />
							sign in with github
						</>
					)}
				</Button>
				<div className="flex items-center justify-center w-full gap-4 ">
					<div className="w-full">
						<Separator className="w-2" />
					</div>
					<div className="w-fit text-muted-foreground">OR</div>
					<div className="w-full">
						<Separator className="w-2" />
					</div>
				</div>
				<div className="grid gap-3">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="email@example.com"
							required
						/>
					</div>
					<Button onClick={signInWithEmail} disabled={emailPending}>
						{emailPending ? (
							<>
								<Loader2 className="animate-spin" />
								loading...
							</>
						) : (
							<>
								<Send />
								continue with email
							</>
						)}
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
