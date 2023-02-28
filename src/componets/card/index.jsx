export function Card({ title, elementChildren, textAlign, width, paddingInline}) {
    return (
        <div className={`flex flex-col gap-8 lg:${width} w-80 h-full ${paddingInline} py-7 bg-background-card-color rounded-2xl shadow-3xl`}>
            <h2 className={`text-[24px] lg:text-${textAlign} text-center font-semibold leading-[160%]`}>{title}</h2>
            {elementChildren}
        </div>
    )
}