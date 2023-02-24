import { Overview } from "../../componets/overview"
import { ClosedSales } from "../../componets/closedSales"
import { MonthlyGoal } from "../../componets/monthlyGoal"

export function Home() {
    return (
        <div className="flex flex-col md:flex-row justify-center md:items-start w-screen min-h-screen py-10 px-10 m-auto bg-background-color text-white">
        <div className="flex flex-col md:flex-row gap-4">
            <Overview />
            <ClosedSales />
            <MonthlyGoal />
        </div>
        </div>
    )
}