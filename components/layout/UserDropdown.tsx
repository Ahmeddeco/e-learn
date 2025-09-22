import { BookOpenIcon, Home, LayoutDashboard } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import SignOut from "../auth/SignOut"

type Props = {
	name: string
	email: string
	image: string
}

export function UserDropdown({ email, image, name }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size={"icon"}>
					<Avatar>
						<AvatarImage src={image} alt="Profile image" />
						<AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="max-w-64 flex flex-col gap-2" align="end">
				<DropdownMenuLabel className="flex min-w-0 flex-col">
					<span className="text-foreground truncate text-sm font-medium capitalize">{name}</span>
					<span className="text-muted-foreground truncate text-xs font-normal">{email}</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup className="flex flex-col gap-2 items-start">
					<DropdownMenuItem asChild>
						<Link href="/" className={buttonVariants({ variant: "link", size: "sm" })}>
							<Home />
							Home
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/courses" className={buttonVariants({ variant: "link", size: "sm" })}>
							<BookOpenIcon />
							Courses
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/dashboard" className={buttonVariants({ variant: "link", size: "sm" })}>
							<LayoutDashboard />
							dashboard
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<SignOut />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
