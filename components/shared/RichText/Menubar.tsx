"use client"

import { type Editor } from "@tiptap/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Toggle } from "@/components/ui/toggle"
import {
	AlignCenter,
	AlignLeft,
	AlignRight,
	Bold,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Italic,
	ListIcon,
	ListOrderedIcon,
	Redo2,
	Strikethrough,
	Undo2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Props = {
	editor: Editor | null
}

export default function Menubar({ editor }: Props) {
	if (!editor) {
		return null
	}
	return (
		<div className="border-b border-input rounded-t-lg p-2 bg-card flex flex-wrap items-center gap-1">
			<TooltipProvider>
				<div className="flex items-center flex-wrap gap-2">
					{/* ---------------------------------- bold ---------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("bold")}
								onPressedChange={() => editor.chain().focus().toggleBold().run()}
								className={cn(editor.isActive("bold") && "bg-muted text-muted-foreground")}
							>
								<Bold />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Bold</TooltipContent>
					</Tooltip>

					{/* --------------------------------- italic --------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("italic")}
								onPressedChange={() => editor.chain().focus().toggleItalic().run()}
								className={cn(editor.isActive("italic") && "bg-muted text-muted-foreground")}
							>
								<Italic />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Italic</TooltipContent>
					</Tooltip>

					{/* --------------------------------- strike --------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("strike")}
								onPressedChange={() => editor.chain().focus().toggleStrike().run()}
								className={cn(editor.isActive("strike") && "bg-muted text-muted-foreground")}
							>
								<Strikethrough />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Strikethrough</TooltipContent>
					</Tooltip>

					{/* -------------------------------- Heading1 -------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("heading", { level: 1 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
								className={cn(editor.isActive("heading", { level: 1 }) && "bg-muted text-muted-foreground")}
							>
								<Heading1 />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 1</TooltipContent>
					</Tooltip>

					{/* -------------------------------- Heading2 -------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("heading", { level: 2 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
								className={cn(editor.isActive("heading", { level: 2 }) && "bg-muted text-muted-foreground")}
							>
								<Heading2 />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 2</TooltipContent>
					</Tooltip>

					{/* -------------------------------- Heading3 -------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("heading", { level: 3 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
								className={cn(editor.isActive("heading", { level: 3 }) && "bg-muted text-muted-foreground")}
							>
								<Heading3 />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 3</TooltipContent>
					</Tooltip>

					{/* -------------------------------- Heading4 -------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("heading", { level: 4 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
								className={cn(editor.isActive("heading", { level: 4 }) && "bg-muted text-muted-foreground")}
							>
								<Heading4 />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 4</TooltipContent>
					</Tooltip>

					{/* -------------------------------- Heading5 -------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("heading", { level: 5 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
								className={cn(editor.isActive("heading", { level: 5 }) && "bg-muted text-muted-foreground")}
							>
								<Heading5 />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 5</TooltipContent>
					</Tooltip>

					{/* -------------------------------- Heading6 -------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("heading", { level: 6 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
								className={cn(editor.isActive("heading", { level: 6 }) && "bg-muted text-muted-foreground")}
							>
								<Heading6 />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 6</TooltipContent>
					</Tooltip>

					{/* -------------------------------- ListIcon -------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("bulletList")}
								onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
								className={cn(editor.isActive("bulletList") && "bg-muted text-muted-foreground")}
							>
								<ListIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Bullet List</TooltipContent>
					</Tooltip>

					{/* ----------------------------- ListOrderedIcon ---------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive("orderedList")}
								onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
								className={cn(editor.isActive("orderedList") && "bg-muted text-muted-foreground")}
							>
								<ListOrderedIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Ordered List</TooltipContent>
					</Tooltip>
				</div>
				<div className="w-px bg-border mx-2 h-6" />
				<div className="flex flex-wrap gap-2">
					{/* -------------------------------- AlignLeft ------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive({ textAlign: "left" })}
								onPressedChange={() => editor.chain().focus().setTextAlign("left").run()}
								className={cn(editor.isActive({ textAlign: "left" }) && "bg-muted text-muted-foreground")}
							>
								<AlignLeft />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Left</TooltipContent>
					</Tooltip>

					{/* ------------------------------- AlignCenter ------------------------------ */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive({ textAlign: "center" })}
								onPressedChange={() => editor.chain().focus().setTextAlign("center").run()}
								className={cn(editor.isActive({ textAlign: "center" }) && "bg-muted text-muted-foreground")}
							>
								<AlignCenter />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Center</TooltipContent>
					</Tooltip>

					{/* ------------------------------- AlignRight ------------------------------- */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size={"sm"}
								pressed={editor.isActive({ textAlign: "right" })}
								onPressedChange={() => editor.chain().focus().setTextAlign("right").run()}
								className={cn(editor.isActive({ textAlign: "right" }) && "bg-muted text-muted-foreground")}
							>
								<AlignRight />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Right</TooltipContent>
					</Tooltip>
				</div>
			</TooltipProvider>
			<div className="w-px bg-border mx-2 h-6" />
			<div className="flex flex-wrap gap-2">
				{/* ---------------------------------- Undo ---------------------------------- */}
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							size={"icon"}
							variant={"ghost"}
							type="button"
							onClick={() => editor.chain().focus().undo().run()}
							disabled={!editor.can().undo()}
						>
							<Undo2 />
						</Button>
					</TooltipTrigger>
					<TooltipContent>Undo</TooltipContent>
				</Tooltip>

				{/* ---------------------------------- Redo ---------------------------------- */}
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							size={"icon"}
							variant={"ghost"}
							type="button"
							onClick={() => editor.chain().focus().redo().run()}
							disabled={!editor.can().redo()}
						>
							<Redo2 />
						</Button>
					</TooltipTrigger>
					<TooltipContent>Redo</TooltipContent>
				</Tooltip>
			</div>
		</div>
	)
}
