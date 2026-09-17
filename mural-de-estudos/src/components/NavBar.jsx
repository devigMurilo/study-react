import { Nav } from "react-bootstrap";

export function NavBar() {
    return (
            <Nav className="justify-content-center mb-4 bg-dark p-3 " >
            <Nav.Link href="/" className="text-white">Início</Nav.Link>
            <Nav.Link href="/posts" className="text-white">Posts</Nav.Link>
            <Nav.Link href="/sobre" className="text-white">Sobre</Nav.Link>
        </Nav>
    );
}