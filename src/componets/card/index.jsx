export function Card({ title, elementChildren, textAlign }) {
    return (
        <div className="flex flex-col gap-8 lg:w-full w-80 h-full px-[48px] py-7 m-auto bg-background-card-color rounded-2xl shadow-3xl">
            <h2 className={`text-[24px] lg:text-${textAlign} text-center font-semibold leading-[160%]`}>{title}</h2>
            {elementChildren}
        </div>
    )
}