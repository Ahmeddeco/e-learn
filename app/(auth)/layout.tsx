import Logo from "@/components/layout/Logo"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="relative flex flex-col h-dvh items-center justify-center gap-4">
			<Button asChild variant={"outline"} className="absolute top-4 left-4">
				<Link href={"/"}>
					<ArrowLeft /> back
				</Link>
			</Button>
			<Logo />
			<div className="max-w-sm flex w-full flex-col gap-6">
				{children}
				<div className="text-balance text-center text-xs text-muted-foreground">
					By clicking continue, you agree to our{" "}
					<span className="hover:text-primary hover:underline">Terms of Use</span> and{" "}
					<span className="hover:text-primary hover:underline">Privacy Policy</span>.
				</div>
			</div>
		</section>
	)
}
