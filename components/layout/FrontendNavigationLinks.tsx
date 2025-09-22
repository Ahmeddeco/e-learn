'use client'

import { frontendNavLinks } from "@/constants/homePage"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FrontendNavigationLinks() {
  const pathName=usePathname()
	return (
		<>
			{frontendNavLinks.map(({ href, title }, index) => (
				<Link href={href} key={index} className={`${pathName===href?"underline underline-offset-4 font-extrabold":"font-semibold"} capitalize`}>
					{title}
				</Link>
			))}
		</>
	)
}
