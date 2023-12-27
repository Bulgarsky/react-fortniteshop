import {Button, Card} from "react-bootstrap";
import {useState} from "react";

export default function DailyItem(props){
    // const [quantity, setQuantity] = useState(1);
    const{
        id: itemID,
        name: title,
        description,
        type,
        internalRarity: rarity,
        price,
        image,
        addToBasket = Function.prototype,
        handleShopCartShow = Function.prototype
    } = props;


    return(
        <div className="item">
            <Card className="card" style={{ width: '18rem', gap: "1rem"}}>
                <Card.Header>
                    <Card.Title style={{height: "25px"}} className="text-center">
                        {title}
                    </Card.Title>
                    <Card.Text className="text-center">
                        <span className="small">{type + ", " + rarity}</span>
                    </Card.Text>
                </Card.Header>
                {
                    image === "N/A"
                        ? <Card.Img variant="top" src={`https://placehold.co/250x250?text=${title}`} />
                        : <Card.Img className="itemImage" variant="top" src={image} alt={title}/>
                }
                <Card.Body>
                    <Card.Text style={{height: "75px"}}>
                        <span className="small">Описание:</span>
                        <br />
                        <span>{description}</span>
                    </Card.Text>
                        <hr />
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg"
                                onClick={() => addToBasket({itemID, title, price})}
                            >
                                <span className="text-center">
                                     {price + ` `}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16">
                                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
                                    </svg>
                                </span>
                            </Button>
                        </div>
                </Card.Body>
            </Card>
        </div>
    )
}