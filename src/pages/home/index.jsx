import { Overview } from "../../componets/overview"
export function Home() {
    return (
        <div className="w-screen h-screen py-28 px-[123px] m-auto bg-background-color text-white">
        <div className="flex gap-4">
            <Overview />
        </div>
        </div>
    )
}