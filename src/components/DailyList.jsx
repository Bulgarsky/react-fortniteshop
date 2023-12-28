import DailyItem from "./DailyItem.jsx";
import {AppContext} from "../hooks/ContextComponent.jsx";
import {useContext} from "react";

export default function DailyList(){
    const {
        items= [],
    } = useContext(AppContext);

    // if (!items.length) {
    //     return <h3>Ничего не найдено !</h3>
    // }


    return(
        <div className="itemList">
            {
                items.map(item =>(
                    <DailyItem key={item.id} {...item}/>
                ))
            }
        </div>
    )
}