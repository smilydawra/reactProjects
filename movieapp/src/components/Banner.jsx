import React from 'react';
import { Card } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Card style={{ border: "0" }}>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/934090.jpg" />
                <Card.Body>
                    <Card.Text>
                        Some quick updates on new movies.
                </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Banner;