import React, {useState, useEffect} from "react";
import {FORTNITE_API_KEY, DAILY_SHOP} from "../config.js";
import Preloader from "./layout/Preloader.jsx";
import DailyList from "./DailyList.jsx";
import ShopCart from "./ShopCart.jsx";
import ShopCartList from "./ShopCartList.jsx";

export default function Daily(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [isShowShopCartList, setIsShowShopCartList] = useState(false);
    const [showCartIcon, setShowCartIcon] = useState(false);

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


    function addToBasket(currentItem){
        //принимаем {currentItem} в метод()

        //находим индекс(позицию) в [cartItems], сравнивая  {currentItem.itemID} с каждым {элемент.itemID} из [cartItems]
        const itemIndex = cartItems.findIndex(
            //каждый элемент сравниваем по ключу itemID
            cartItem =>
                cartItem.itemID === currentItem.itemID
        );  //если не найдет возвращает -1

        if (itemIndex < 0){
            //Если по айди не найден, то
            const newItem = {
                //развернуть получаемый {}, скопировать поля и добавить #кол-во
                ...currentItem,
                quantity: 1,
            }
            //добавляем [...копируя имеющиеся элементы, добавляем новый элемент]
            setCartItems([...cartItems, newItem]);

        } else {
            //иначе, берем {объект} по позиции(индексу)
            const newCartItem = cartItems.map((cartItem, index) => {
                //если позиция найдена по индексу
                if (index === itemIndex) {
                    return {
                        //разворачиваем обьект и изменяем значение в #кол-во
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                }else{
                    //иначе вовзращаем обьект без изменений
                    return cartItem;
                }
            });
            //устанвливаем стейт {объекта}
            setCartItems(newCartItem);
        }
        //вкл показ иконки корзины
        setShowCartIcon(true);
    }

    function handleShowPreorderList(){
        setIsShowShopCartList(!isShowShopCartList);
    }

    return(
        <>
            {
                showCartIcon
                ? <ShopCart
                        quantity={cartItems.length}
                        handleShowPreorderList={handleShowPreorderList}
                    />
                    : ""

            }

            {
                isShowShopCartList && <ShopCartList cartItems={cartItems} handleShowPreorderList={handleShowPreorderList}/>
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