import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';


function CatalogDropDown() {
    const catalogItems = [
        {
            id: 1,
            path: '#',
            text: 'Свадебные платья'
        },
        {
            id: 2,
            path: '#',
            text: 'Площадки'
        },
        {
            id: 3,
            path: '#',
            text: 'Ведущие'
        },
        {
            id: 4,
            path: '#',
            text: 'Фотографы'
        },
        {
            id: 5,
            path: '#',
            text: 'Видеографы'
        },
        {
            id: 6,
            path: '#',
            text: 'Музыканты'
        },
        {
            id: 7,
            path: '#',
            text: 'Стилисты'
        },
    ]

    function renderItems() {
        return catalogItems.map(({ id, path, text }) => (
            <Dropdown.Item key={id} as={Link} href={path}>
                {text}
            </Dropdown.Item>
        ))
    }

    return (
        <Nav.Item as={Dropdown}>
            <Dropdown.Toggle as={Nav.Link} href='/catalog'>Каталог</Dropdown.Toggle>
            <Dropdown.Menu renderOnMount>
                {renderItems()}
            </Dropdown.Menu>
        </Nav.Item>
    )
}

export default CatalogDropDown;