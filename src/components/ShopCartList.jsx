import {ListGroup} from "react-bootstrap";
import ShopCartItem from "./ShopCartItem.jsx";

export default function ShopCartList(props) {
    const {
        orders = []
    } = props;

    return(
        <>
            <ListGroup>
                <ListGroup.Item variant="success">Список добавленных предметов:</ListGroup.Item>
                { orders.length
                    ? orders.map((element) =>
                        <ShopCartItem
                            {...element}
                            key={element.itemID}
                        />
                    )
                    : <ListGroup.Item variant="secondary">Корзина пуста!</ListGroup.Item>
                }
                <ListGroup.Item variant="success">Итого: </ListGroup.Item>
            </ListGroup>
        </>
    )
}