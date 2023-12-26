import {Spinner} from "react-bootstrap";

export default function Preloader(){

    return(
        <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}