import {Button, ListGroup} from "react-bootstrap";
import ShopCartItem from "./ShopCartItem.jsx";

import {AppContext} from "../hooks/ContextComponent.jsx";
import {useContext} from "react";

export default function ShopCartList() {
    const {
        cartItems = [],
        handleShowPreorderList = Function.prototype
    } = useContext(AppContext);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0);

    return(
        <div className="shop-cart">
            <ListGroup>
                <ListGroup.Item variant="success">
                    <span>Список добавленных предметов:</span>
                    <svg
                        onClick={handleShowPreorderList}
                        className="cartlist-close bi bi-x-square"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </ListGroup.Item>
                { cartItems.length
                    ? cartItems.map((item) =>
                        <ShopCartItem
                            {...item}
                            key={item.itemID}
                        />
                    )
                    : <ListGroup.Item variant="secondary">Корзина пуста!</ListGroup.Item>
                }
                <ListGroup.Item variant="success">
                    <span>Итого: {totalPrice+"  "}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="blue" className="bi bi-cash" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
                    </svg>
                </ListGroup.Item>
                <Button variant="primary">Продолжить оформление ?</Button>
            </ListGroup>
        </div>
    )
}