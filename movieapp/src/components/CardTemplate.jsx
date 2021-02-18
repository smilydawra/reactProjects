import { Card } from 'react-bootstrap';
import CardsButton from './CardsButton';

const renderCard = (data, index) => {
    return (
        <Card key={index} style={{ width: '15rem', margin: '10px' }}>
            <Card.Img variant="top" src={data.Poster} />
            <Card.Body>
                <Card.Title>{data.Title}</Card.Title>
                <Card.Text>
                    {data.Year}
                </Card.Text>
                <CardsButton data={data} />
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