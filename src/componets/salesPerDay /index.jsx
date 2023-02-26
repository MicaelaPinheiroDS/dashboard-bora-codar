import { Card } from "../card";
export function SalesPerDay() {
    function cardChildren() {
        return(
            <div>
                <div className="flex flex-col gap-8">
                    <div>
                        <div className="flex gap-2 items-center">
                            <span className="inline-block w-[15px] h-[15px] rounded-full bg-green"></span><span>Dia com mais vendas</span>
                        </div>
                        <div className="text-[24px] leading-[38.4px] font-medium">quarta-feira</div>
                    </div>
                    <div>
                        <div className="flex gap-1 items-center">
                            <span className="inline-block w-[15px] h-[15px] rounded-full bg-orange"></span><span>Dia com menos vendas</span>
                        </div>
                        <div className="text-[24px] leading-[38.4px] font-medium">domingo</div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div>
            <Card title="Vendas por dia da semana" elementChildren={cardChildren()} />
        </div>
    )
}