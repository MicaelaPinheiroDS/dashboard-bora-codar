export function Card({ title, elementChildren}) {
    return (
        <div className="flex flex-col items-center gap-8 lg:max-w-[1024px] lg:min-w-[296px] w-80 min-h-[379px] px-[48px] py-7 bg-background-card-color rounded-2xl shadow-3xl">
            <h2 className="text-[24px] lg:text-start text-center font-semibold leading-[160%]">{title}</h2>
            {elementChildren}
        </div>
    )
}