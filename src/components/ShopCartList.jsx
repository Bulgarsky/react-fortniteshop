import {ListGroup} from "react-bootstrap";
import ShopCartItem from "./ShopCartItem.jsx";

export default function ShopCartList(props) {
    const {
        cartItems = []
    } = props;

    return(
        <div className="shop-cart">
            <ListGroup>
                <ListGroup.Item variant="success">Список добавленных предметов:</ListGroup.Item>
                { cartItems.length
                    ? cartItems.map((item) =>
                        <ShopCartItem
                            {...item}
                            key={item.itemID}
                        />
                    )
                    : <ListGroup.Item variant="secondary">Корзина пуста!</ListGroup.Item>
                }
                <ListGroup.Item variant="success">Итого: {}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}