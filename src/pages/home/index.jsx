import { Overview } from "../../componets/overview"
import { ClosedSales } from "../../componets/closedSales"

export function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start w-screen h-screen py-10 px-10 m-auto bg-background-color text-white">
        <div className="flex flex-col md:flex-row gap-4">
            <Overview />
            <ClosedSales />
        </div>
        </div>
    )
}