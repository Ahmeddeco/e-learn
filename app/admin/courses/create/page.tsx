"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Car, Sparkle } from "lucide-react"
import Link from "next/link"
import Form from "next/form"
import React, { useActionState, useState } from "react"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import CourseSchema from "@/schemas/CourseSchema"
import { createCourseAction } from "@/functions/course.action"
import SubmitButton from "@/components/shared/SubmitButton"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import LevelSchema from "@/generated/zod/inputTypeSchemas/LevelSchema"
import StatusSchema from "@/generated/zod/inputTypeSchemas/StatusSchema"
import slugify from "slugify"
import CourseCategoriesSchema from "@/generated/zod/inputTypeSchemas/CourseCategoriesSchema"

export default function CreateCoursePage() {
	const [lastResult, action] = useActionState(createCourseAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: CourseSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})

	const [slug, setSlug] = useState("")

	return (
		<>
			<div className="flex items-center gap-4">
				<Link href={"/admin/courses"} className={buttonVariants({ variant: "outline", size: "icon" })}>
					<ArrowLeft />
				</Link>
				<h4>create course</h4>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>basic information</CardTitle>
					<CardDescription>Provide basic information about the course.</CardDescription>
				</CardHeader>
				<CardContent>
					<Form id={form.id} action={action} onSubmit={form.onSubmit} noValidate className="flex flex-col gap-4">
						{/* ---------------------------------- title --------------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>title</Label>
							<Input
								type="text"
								key={fields.title.key}
								name={fields.title.name}
								defaultValue={fields.title.initialValue}
								placeholder="ahmed"
							/>
							<div className="text-destructive">{fields.title.errors}</div>
						</div>

						{/* ---------------------------------- slug ---------------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>slug</Label>
							<div className="flex items-center gap-4">
								<Input type="text" key={fields.slug.key} name={fields.slug.name} defaultValue={slug} />
								<Button
									type="button"
									onClick={() => {
										const titleValue = form.value?.title
										const slug = slugify(titleValue as string)
										setSlug(slug)
									}}
								>
									generate slug
									<Sparkle />
								</Button>
							</div>
							<div className="text-destructive">{fields.slug.errors}</div>
						</div>

						{/* ---------------------------- small Description --------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>small Description</Label>
							<Textarea
								key={fields.smallDescription.key}
								name={fields.smallDescription.name}
								defaultValue={fields.smallDescription.initialValue}
							/>
							<div className="text-destructive">{fields.smallDescription.errors}</div>
						</div>

						{/* ------------------------------- Description ------------------------------ */}
						<div className="flex flex-col gap-2">
							<Label>Description</Label>
							<Textarea
								key={fields.description.key}
								name={fields.description.name}
								defaultValue={fields.description.initialValue}
							/>
							<div className="text-destructive">{fields.description.errors}</div>
						</div>

						{/* -------------------------------- category -------------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>category</Label>
							<Select key={fields.category.key} name={fields.category.name} defaultValue={fields.category.initialValue}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="category" />
								</SelectTrigger>
								<SelectContent>
									{Object.values(CourseCategoriesSchema.enum).map((category) => (
										<SelectItem value={category} key={category}>
											{category}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<div className="text-destructive">{fields.category.errors}</div>
						</div>

						{/* ---------------------------------- Level --------------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>Level</Label>
							<Select key={fields.level.key} name={fields.level.name} defaultValue={fields.level.initialValue}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Level" />
								</SelectTrigger>
								<SelectContent>
									{Object.values(LevelSchema.enum).map((level) => (
										<SelectItem value={level} key={level}>
											{level}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<div className="text-destructive">{fields.level.errors}</div>
						</div>

						{/* --------------------------------- status --------------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>status</Label>
							<Select key={fields.status.key} name={fields.status.name} defaultValue={fields.status.initialValue}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="status" />
								</SelectTrigger>
								<SelectContent>
									{Object.values(StatusSchema.enum).map((status) => (
										<SelectItem value={status} key={status}>
											{status}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<div className="text-destructive">{fields.status.errors}</div>
						</div>

						{/* -------------------------------- duration -------------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>duration</Label>
							<Input
								type="number"
								key={fields.duration.key}
								name={fields.duration.name}
								defaultValue={fields.duration.initialValue}
							/>
							<div className="text-destructive">{fields.duration.errors}</div>
						</div>

						{/* ---------------------------------- price --------------------------------- */}
						<div className="flex flex-col gap-2">
							<Label>price</Label>
							<Input
								type="number"
								key={fields.price.key}
								name={fields.price.name}
								defaultValue={fields.price.initialValue}
							/>
							<div className="text-destructive">{fields.price.errors}</div>
						</div>

						{/* ------------------------------ SubmitButton ------------------------------ */}
						<SubmitButton text={"create a course"} />
					</Form>
				</CardContent>
			</Card>
		</>
	)
}
