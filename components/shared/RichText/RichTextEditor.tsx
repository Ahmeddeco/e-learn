"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Menubar from "./Menubar"
import TextAlign from "@tiptap/extension-text-align"
import { Input } from "@/components/ui/input"
import { useState } from "react"

type Props = {
	field: any
}

const RichTextEditor = ({ field }: Props) => {
	const [textAreaValue, setTextAreaValue] = useState(field.defaultValue ?? "")

	const editor = useEditor({
		extensions: [StarterKit, TextAlign.configure({ types: ["heading", "paragraph"] })],
		editorProps: {
			attributes: {
				class:
					"min-h-96 p-4 focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !w-full !max-w-none",
			},
		},

		onUpdate: ({ editor }) => {
			const value = JSON.stringify(editor.getJSON())
			setTextAreaValue(value)
		},

		content: field.value ? JSON.parse(textAreaValue as string) : undefined,

		immediatelyRender: false,
	})

	return (
		<div className="w-full border border-input rounded-xl overflow-hidden ">
			<Input type="hidden" key={field.key} name={field.name} value={textAreaValue ?? ""} />
			<Menubar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	)
}

export default RichTextEditor
