import { Overview } from "../../componets/overview"
import { ClosedSales } from "../../componets/closedSales"
import { MonthlyGoal } from "../../componets/monthlyGoal"

export function Home() {
    return (
        <div className="m-auto lg:flex lg:justify-center w-screen min-h-screen py-10 px-10 bg-background-color text-white">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
            <Overview />
            <ClosedSales />
            <MonthlyGoal />
        </div>
        </div>
    )
}