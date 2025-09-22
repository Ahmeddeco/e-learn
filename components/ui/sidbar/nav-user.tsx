"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { clientSession } from "@/functions/helpers/clientSession"
import SignOut from "../../auth/SignOut"
import Link from "next/link"
import { Home, LayoutDashboard, MoreVertical, Tv2 } from "lucide-react"

export function NavUser() {
	const { isMobile } = useSidebar()
	const session = clientSession()
	const user = session.data?.user

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-full ">
								<AvatarImage src={user?.image ?? undefined} alt={user?.name} />
								<AvatarFallback className="rounded-full">{user?.name[0]}</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium capitalize">{user?.name}</span>
								<span className="text-muted-foreground truncate text-xs">{user?.email}</span>
							</div>
							<MoreVertical className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-full">
									<AvatarImage src={user?.image ?? undefined} alt={user?.name} />
									<AvatarFallback className="rounded-full">{user?.name[0]}</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{user?.name}</span>
									<span className="text-muted-foreground truncate text-xs">{user?.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<Link href={"/"}>
									<Home /> Home
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href={"/admin"}>
									<LayoutDashboard /> Dashboard
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href={"/admin/courses"}>
									<Tv2 /> Courses
								</Link>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<SignOut />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
