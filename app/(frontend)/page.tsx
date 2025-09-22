import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { features } from "@/constants/homePage"
import Link from "next/link"

export default function HomePage() {
	return (
		<section className="relative py-20 space-y-8">
			<div className="flex flex-col items-center text-center gap-8">
				<Badge variant={"outline"}>the future of online learning</Badge>
				<h1>elevate your learning experience</h1>
				<p className="max-w-4xl">
					Discover a new way to learn with modern, interactive learning managment system. Access high quality courses
					anytime, anywhere.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 ">
					<Link className={buttonVariants({ size: "lg" })} href={"/courses"}>
						Explore Courses
					</Link>
					<Link className={buttonVariants({ size: "lg", variant: "outline" })} href={"/sign-in"}>
						sign in
					</Link>
				</div>
			</div>

			{/* -------------------------------- features -------------------------------- */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
				{features.map(({ description, icon, title }, index) => (
					<Card key={index} className="hover:shadow-lg transition-shadow">
						<CardHeader>
							<div className="text-4xl mb-4">{icon}</div>
							<CardTitle>{title}</CardTitle>
							<CardDescription>{description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	)
}
