"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { authClient } from "@/lib/auth-client"
import { Loader2, Send } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { toast } from "sonner"
export default function VerifyRequestPage() {
	const [otp, setOtp] = useState("")
	const [emailPending, startEmailTransition] = useTransition()
	const searchParams = useSearchParams()
	const email = searchParams.get("email") as string
	const router = useRouter()
	const isCompleted = otp.length === 6
	/* -------------------------------- verifyOtp ------------------------------- */
	const verifyOtp = () => {
		startEmailTransition(async () => {
			await authClient.signIn.emailOtp({
				email: email,
				otp: otp,
				fetchOptions: {
					onSuccess: () => {
						toast.success("Email verified successfully")
						router.push("/")
					},
					onError: () => {
						toast.error("Error verifying email-otp")
					},
				},
			})
		})
	}

	return (
		<Card>
			<CardHeader className="text-center">
				<CardTitle>please check your email </CardTitle>
				<CardDescription>
					We have sent a verification email code to your email address. Please open the email and paste the code below
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col items-center justify-center gap-4">
					<InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
						</InputOTPGroup>
						<InputOTPSeparator />
						<InputOTPGroup>
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
					<p className="text-sm text-muted-foreground">Enter your 6-digit verification code sent to your email</p>
					<Button size={"wide"} onClick={verifyOtp} disabled={emailPending || !isCompleted}>
						{emailPending ? (
							<>
								<Loader2 className="animate-spin" />
								loading...
							</>
						) : (
							<>
								<Send />
								verify request
							</>
						)}
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
