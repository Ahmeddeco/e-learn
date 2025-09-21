import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"

export default function LoginPage() {
	return (
		<Card className="w-full ">
			<CardHeader className="space-y-4">
				<CardTitle>Welcome back!</CardTitle>
				<CardDescription>Login with your github email account</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Button size={"wide"} variant={"outline"}>
					<Github />
					sign in with github
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
			</CardContent>
		</Card>
	)
}
