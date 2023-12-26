import {Button, Card} from "react-bootstrap";

export default function DailyShopItem(props){

    const{
        id,
        name: title,
        description,
        type,
        internalRarity: rarity,
        price,
        image
    } = props;

    return(
        <div id={id} className="item">
            <Card className="card" style={{ width: '16rem' }}>
                {
                    image === "N/A"
                        ? <Card.Img variant="top" src={`https://placehold.co/250x250?text=${title}`} />
                        : <Card.Img className="itemImage" variant="top" src={image} alt={title}/>
                }
                <Card.Body>
                    <Card.Title style={{height: "50px"}}> {title} </Card.Title>
                    <Card.Text style={{height: "150px"}}>
                        <span>Описание: {description}</span><br />
                        <span>Rarity: {rarity}</span><br />
                        <span>Type: {type}</span>
                        {/*{type === "sparks_song"*/}
                        {/*    ? <span>Type: Song</span>*/}
                        {/*:(*/}
                        {/*    type === "pickaxe" || " sparks_keyboard"*/}
                        {/*        ? <span>Type: Кирка</span>*/}
                        {/*        : (*/}
                        {/*            type === "bundle"*/}
                        {/*                ? <span>Type: Набор</span>*/}
                        {/*                : <span>Type: {type}</span>*/}
                        {/*        )*/}
                        {/*    )*/}
                        {/*}*/}


                    </Card.Text>
                    <Button variant="warning">Купить {price}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}