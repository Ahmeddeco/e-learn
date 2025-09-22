"use client"

import Logo from "./Logo"
import { ThemeToggle } from "../theme/ThemeToggle"
import FrontendNavigationLinks from "./FrontendNavigationLinks"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { authClient } from "@/lib/auth-client"
import { UserDropdown } from "./UserDropdown"

export default function Header() {
	const { data: session, isPending } = authClient.useSession()
	return (
		<header className="sticky inset-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
			<div className=" container mx-auto px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
				<Logo />
				{/* --------------------------- Desktop Navigation --------------------------- */}
				<nav className="hidden lg:flex items-center gap-4">
					<FrontendNavigationLinks />
				</nav>
				<div className="flex items-center gap-4">
					<ThemeToggle />
					{isPending ? null : session ? (
						<>
							<UserDropdown name={session.user.name} email={session.user.email} image={session.user.image!} />
						</>
					) : (
						<>
							<Link href={"/sign-in"} className={buttonVariants({ variant: "secondary" })}>
								sign in
							</Link>
							<Link href={"/"} className={buttonVariants({ variant: "default" })}>
								get started
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	)
}
