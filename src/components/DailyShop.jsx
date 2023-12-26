import React, {useState, useEffect} from "react";
import {FORTNITE_API_KEY, DAILY_SHOP} from "../config.js";
import Preloader from "./layout/Preloader.jsx";
import DailyShopList from "./DailyShopList.jsx";
import Cart from "./Cart.jsx";

export default function DailyShop(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    useEffect(function getItemList() {
        fetch(DAILY_SHOP, {
            headers: {
                "Authorization": FORTNITE_API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setItems(data.featured)
                setLoading(false);
            })

    }, []);

    function filterType(type){

    }

    return(
        <>
            <Cart quantity={order.length}/>
            <div className="container content">

                { loading
                    ? <Preloader />
                    : <DailyShopList items={items}/>
                }
            </div>
        </>
    )
};