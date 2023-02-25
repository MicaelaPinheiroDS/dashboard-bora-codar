export function Card({ title, elementChildren}) {
    return (
        <div className="flex flex-col items-center gap-8 max-w-[351px] min-w-[296px] min-h-[379px] py-[29px] px-7 bg-background-card-color rounded-2xl shadow-3xl">
            <h2 className="text-[24px] font-semibold leading-[160%]">{title}</h2>
            {elementChildren}
        </div>
    )
}