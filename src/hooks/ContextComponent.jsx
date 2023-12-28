import React, {useState, createContext, useEffect} from "react";
import {FORTNITE_API_KEY, DAILY_SHOP} from "../config.js";

export const AppContext = createContext();

export default function ContextComponent(props){
    //data
    const [items, setItems] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isSnowShopCartList, setIsShowShopCartList] = useState(false);
    const [showCartIcon, setShowCartIcon] = useState(false);

    useEffect(function getItemList(){
        fetch(DAILY_SHOP, {
            headers: {
                "Authorization": FORTNITE_API_KEY,
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                data.featured && setItems(data.featured);
                setDataLoading(false);
                console.log("dataLoading: " + dataLoading);
            })
            .catch((error) => {
                console.log("error", error);
                setDataLoading(false);
            })
    }, []);

    //func
    function addToBasket(currentItem){
        const itemIndex= cartItems.findIndex(
            cartItem => cartItem.itemID === currentItem.itemID
        );

        if (itemIndex < 0) {
            const newItem = {
                ...currentItem,
                quantity: 1
            }
            setCartItems([...cartItems, newItem]);
        } else {
           const newCartItem= cartItems.map((cartItem, index) => {
               if (index ===itemIndex) {
                   return {
                       ...cartItem,
                       quantity: cartItem.quantity + 1
                   }
               } else
                   return cartItem;
           });
           setCartItems(newCartItem);
        }
        setShowCartIcon(true);
    }

    function handleShowPreorderList(){
        setIsShowShopCartList(!isSnowShopCartList);
    }



    const contextProperties = {
        items,
        dataLoading,
        cartItems,
        isSnowShopCartList,
        showCartIcon,
        handleShowPreorderList,
        addToBasket
    }

    return(
        <AppContext.Provider value={contextProperties}>
            {props.children}
        </AppContext.Provider>
    )

}