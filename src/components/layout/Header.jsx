import {Container, Nav, Navbar} from "react-bootstrap";
export default function Header(){
    return(
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><span>FORTNITE</span></Navbar.Brand>
                    {/*<Nav className="me-auto">*/}
                    {/*    <Nav.Link href="#daily" >Daily Items</Nav.Link>*/}
                    {/*    <Nav.Link href="#upcoming" >Upcoming Items</Nav.Link>*/}
                    {/*    <Nav.Link href="#" */}
                    {/*
                    {/*    </Nav.Link>*/}
                    {/*</Nav>*/}
                    <div className="vr" />
                    <div className="p-2 text-white">
                        Daily Items
                    </div>
                    <div className="vr" />
                    <div className="p-2 text-white">Upcoming Items</div>
                    <div className="vr" />
                    <div className="p-2 ms-auto">
                        <span className="text-white">Login</span>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}