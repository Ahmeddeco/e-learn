export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex h-dvh items-center justify-center">
			<div className="max-w-sm flex w-full flex-col gap-6">{children}</div>
		</section>
	)
}
