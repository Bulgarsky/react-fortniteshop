import DailyShopItem from "./DailyShopItem.jsx";

export default function DailyShopList(props){
    const {items= [] } = props;
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
                        <DailyShopItem
                            key={item.items}
                            {...item}
                        />
                        )))
                    : <h3>Ничего не найдено !</h3>
            }
        </div>
    )
}