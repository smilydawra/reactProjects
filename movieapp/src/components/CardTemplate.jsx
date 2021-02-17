import { Button, Card, Nav } from 'react-bootstrap';

const renderCard = (data, index) => {
    return (
        <Card key={index} style={{ width: '15rem', margin: '10px' }}>
            <Card.Img variant="top" src={data.Poster} />
            <Card.Body>
                <Card.Title>{data.Title}</Card.Title>
                <Card.Text>
                    {data.Year}
                </Card.Text>
                {/* <Button variant="primary">more info...</Button> */}
                <Nav.Link href="#home">more info...</Nav.Link>
            </Card.Body>
        </Card>
    )
}

const CardTemplate = ({ data }) => {
    return (
        <>
            {data.map(renderCard)}
        </>
    )
}

export default CardTemplate;