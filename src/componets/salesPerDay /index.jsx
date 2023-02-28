import { Card } from "../card";
import { dataGraphDayWeek } from "./dataGraphDayWeek";

export function SalesPerDay() {
    function cardChildren() {
        const itemGraph = dataGraphDayWeek.map(data => {
            return (
                <div className="flex gap-[5px] lg:flex-col-reverse items-center" key={data.day}>
                    <span>{data.day}</span>
                    <span className={`inline-bock 
                        ${data.mobileWidth} 
                        ${data.mobileHeight} 
                        ${data.desktopWidth}
                        ${data.desktopHeight} 
                        bg-[#90F7EC] 
                        rounded-full`}>
                    </span>
                </div>
            )
        })
        return(
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-8">
                        <div>
                            <div className="flex gap-2 items-center">
                                <span className="bg-arrow-up bg-no-repeat bg-center w-[15px] h-[15px]"></span><span>Dia com mais vendas</span>
                            </div>
                            <div className="text-[24px] leading-[38.4px] font-medium">quarta-feira</div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <span className="bg-arrow-down bg-no-repeat bg-center w-[15px] h-[15px]"></span><span>Dia com menos vendas</span>
                            </div>
                            <div className="text-[24px] leading-[38.4px] font-medium">domingo</div>
                        </div>
                    </div>
                    
                </div>
                <div className="relative">
                    <div className="w-[3px] lg:w-full h-full lg:h-[3px] rounded-full bg-dark-purple absolute left-[92px] bottom-0 lg:bottom-[92px] lg:left-0 z-1"></div>
                    <div className="flex flex-col lg:flex-row gap-[62.5px] relative z-10 pb-[17px]">
                        {itemGraph}
                    </div>
                    
                </div>
            </div>
        )
    }
    return(
        <div>
            <Card title='vendas por dia da semana' textAlign={'left'} elementChildren={cardChildren()} />
        </div>
    )
}