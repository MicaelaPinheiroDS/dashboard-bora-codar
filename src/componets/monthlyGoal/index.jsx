import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import { Card } from "../card"

export function MonthlyGoal() {
    function cardChildren(){
        const valueProgress = 90
        return (
            <div className="flex flex-col gap-8">
                <div className="m-auto">
                    <CircularProgressbarWithChildren className='max-w-{197px} max-h-[197px] stroke-orange' value={valueProgress} strokeWidth={15}>
                        <div className='text-[34px] leading-[160%] font-bold'>{valueProgress}%</div>
                        <div className="text-base  leading-[160%]">alcançada</div>
                    </CircularProgressbarWithChildren>
                </div>
                
                <div className="flex flex-col items-center lg:flex-row gap-5 text-[14px]">
                    <div className="flex">
                        <span className="inline-block w-[15px] h-[15px] mr-1 bg-dark-purple rounded-full"></span>
                        <span className="font-medium">Esperado</span>
                        <span className="pl-[10px]">100</span> 
                    </div>
                    <div className="flex items-center">
                        <span className="inline-block w-[15px] h-[15px] mr-1 bg-orange rounded-full"></span>
                        <span className="font-medium">Alcandado</span>
                        <span className="pl-[10px]">{valueProgress}</span> 
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Card title='Metal mensal' textAlign={'center'} elementChildren={cardChildren()}/>
        </div>
    )
}