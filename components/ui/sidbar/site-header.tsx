import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
	return (
		<header className="flex items-center justify-between p-4">
			<SidebarTrigger />
			<ThemeToggle />
		</header>
	)
}
