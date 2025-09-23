import RichTextEditor from "@/components/shared/RichText/RichTextEditor"
import { buttonVariants } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
	return (
		<>
			<div className="flex items-center justify-between">
				<h1>your courses</h1>
				<Link href={"/admin/courses/create"} className={buttonVariants({ variant: "default" })}>
					<CirclePlus />
					create course
				</Link>
			</div>
			<div className="">
				<h1>here you will see all of the courses</h1>
				<RichTextEditor field={fields.smallDescription} key={fields.smallDescription.key} />
			</div>
		</>
	)
}
