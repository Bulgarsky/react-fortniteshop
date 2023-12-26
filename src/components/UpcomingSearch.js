import React, {useState} from "react";
import {Button, InputGroup, Form, FormControl} from "react-bootstrap";

export default function UpcomingSearch(){
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all")

    function handleFilter(){

    }

    return(
        <>
            <InputGroup>
                <Form.Check
                    inline
                    label="all"
                    name="itemType"
                    type="radio"
                    data-type="all"
                    onChange={handleFilter}
                    checked={type === "all"}
                />
                <Form.Check
                    inline
                    label="Outfit"
                    name="itemType"
                    type="radio"
                    data-type="Outfit"
                    onChange={handleFilter}
                    checked={type === "Outfit"}
                />
                <Form.Check
                    inline
                    label="Wrap"
                    name="itemType"
                    type="radio"
                    data-type="Wrap"
                    onChange={handleFilter}
                    checked={type === "Wrap"}
                />
                <Form.Check
                    inline
                    label="Wrap"
                    name="itemType"
                    type="radio"
                    data-type="Emote"
                    onChange={handleFilter}
                    checked={type === "Emote"}
                />

            </InputGroup>
        </>
    )
}