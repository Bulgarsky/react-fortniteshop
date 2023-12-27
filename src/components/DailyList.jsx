import DailyItem from "./DailyItem.jsx";

export default function DailyList(props){
    const {
        items= [],
        addToBasket = Function.prototype,
    } = props;
    /*
    if (!items.length) {
        return <h3>Ничего не найдено !</h3>
    }

     */

    return(
        <div className="itemList">
            {
                items.length
                    ? (items.map(item =>(
                        <DailyItem
                            key={item.items}
                            {...item}
                            addToBasket={addToBasket}
                        />
                        )))
                    : <h3>Ничего не найдено !</h3>
            }
        </div>
    )
}