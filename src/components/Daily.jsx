import React, {useState, useEffect} from "react";
import {FORTNITE_API_KEY, DAILY_SHOP} from "../config.js";
import Preloader from "./layout/Preloader.jsx";
import DailyList from "./DailyList.jsx";
import ShopCart from "./ShopCart.jsx";
import ShopCartList from "./ShopCartList.jsx";

export default function Daily(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isShopCart, setShopCart] = useState(false);

    useEffect(function getItemList() {
        fetch(DAILY_SHOP, {
            headers: {
                "Authorization": FORTNITE_API_KEY,
            }
        })
            //Обработать 404 по ключу image
            .then(response => response.json())
            .then(data => {
                data.featured && setItems(data.featured)
                setLoading(false);
            })
            .catch((error) => {
                console.log("error: ", error);
                setLoading(false);
            });
    }, []);

    function handleShopCartShow(){
        setShopCart(!isShopCart);
    }

    function addToBasket(currentItem){
        //принимаем {currentItem} в метод()

        //находим индекс(позицию) в [order], сравнивая  {currentItem.itemID} с каждым {элемент.itemID} из [order]
        const itemIndex = orders.findIndex(
            //каждый элемент сравниваем по ключу itemID
            order =>
                order.itemID === currentItem.itemID
        );  //если не найдет возвращает -1

        if (itemIndex < 0){
            //Если по айди не найден, то
            const newItem = {
                //развернуть получаемый {}, скопировать поля и добавить #кол-во
                ...currentItem,
                quantity: 1,
            }
            //добавляем [...копируя имеющиеся элементы, добавляем новый элемент]
            setOrders([...orders, newItem]);
        } else {
            //иначе, берем {объект} по позиции(индексу)
            const newOrder = orders.map((order, index) => {
                //если позиция найдена
                if (index === itemIndex) {
                    return {
                        //разворачиваем обьект и изменяем #кол-во
                        ...order,
                        quantity: order.quantity + 1
                    }
                }else{
                    //иначе вовзращаем обьект без изменений
                    return order;
                }
            });
            //возвращаем стейт {объекта}
            setOrders(newOrder);
        }
    }

    return(
        <>
            <ShopCart
                quantity={orders.length}
                handleShopCartShow={handleShopCartShow}
            />
            {
                isShopCart && <ShopCartList orders={orders}/>
            }

            <div className="container content">
                { loading
                    ? <Preloader />
                    : <DailyList
                        items={items}
                        addToBasket={addToBasket}
                    />
                }
            </div>
        </>
    )
};