import { Overview } from "../../componets/overview"
import { ClosedSales } from "../../componets/closedSales"
import { MonthlyGoal } from "../../componets/monthlyGoal"
import { SalesPerDay } from "../../componets/salesPerDay "

export function Home() {
    return (
        <div className="m-auto flex flex-col items-center lg:h-screen gap-[59px] lg:justify-center lg:w-[1120px] py-28">
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 w-full">
                <Overview />
                <ClosedSales />
                <MonthlyGoal />
            </div>
            <div className="lg:w-full">
                <SalesPerDay />
            </div>
        </div>
    )
}