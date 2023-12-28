import React, {useContext} from "react";

import {AppContext} from "../hooks/ContextComponent.jsx"

import Preloader from "../layout/Preloader.jsx";
import DailyList from "./DailyList.jsx";

export default function Daily(){
    const{
        dataLoading
    } = useContext(AppContext);

    console.log("Daily. dataLoading: " + dataLoading);

    //Preorder не работает, данные загружены в контексте

    return(
        <>
            {
                dataLoading
                ? <Preloader />
                : <DailyList />
            }
        </>
    )
};