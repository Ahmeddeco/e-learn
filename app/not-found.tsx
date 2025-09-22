import { buttonVariants } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
	return (
		<div className="flex flex-col gap-4 items-center justify-center h-dvh">
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/" className={buttonVariants({ variant: "default" })}>
				<Home />
				Return Home
			</Link>
		</div>
	)
}
