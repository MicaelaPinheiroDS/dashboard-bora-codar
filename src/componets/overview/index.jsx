import { Card } from "../card"
export function Overview(){
    function cardChildren() {
        return(
            <div className="flex flex-col items-center">
                <div className="py-11 flex flex-col items-center">
                    <img src="./public/images/smile-face.svg" alt="" />
                    <h3 className="text-green text-[24px] leading-[160%] font-semibold pt-4">Excelente!</h3>
                </div>
                <p className="text-[14px] leading-[160%] font-medium">NPS Score <span className="font-normal">75</span></p>
            </div>
        )
    }
    return (
        <Card title='NPS geral' textAlign={'center'} elementChildren={cardChildren()}/>
    )
}