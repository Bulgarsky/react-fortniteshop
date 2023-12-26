import React, {useState, useEffect} from "react";
import {FORTNITE_API_KEY, DAILY_SHOP} from "../config.js";
import Preloader from "./layout/Preloader.jsx";
import DailyShopList from "./DailyShopList.jsx";

export default function DailyShop(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <div className="container content">
                { loading
                    ? <Preloader />
                    : <DailyShopList items={items}/>
                }
            </div>
        </>
    )
};