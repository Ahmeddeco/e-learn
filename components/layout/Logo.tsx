import { Book } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Logo() {
	return (
		<Link href="/" className="text-2xl font-black capitalize flex gap-1 items-center leading-0">
			<Book color="var(--primary) " className="size-8" />
			e-learn
		</Link>
	)
}
