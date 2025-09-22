import { ChartAreaInteractive } from "@/components/ui/sidbar/chart-area-interactive"
import { DataTable } from "@/components/ui/sidbar/data-table"
import { SectionCards } from "@/components/ui/sidbar/section-cards"
import data from "./data.json"

export default function Page() {
	return (
		<>
			<SectionCards />
			<div className="px-4 lg:px-6">
				<ChartAreaInteractive />
			</div>
			<DataTable data={data} />
		</>
	)
}
