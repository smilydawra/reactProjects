import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import DetailModal from './DetailModal';

const CardsButton = ({ data }) => {
    const [modalShow, setModalShow] = useState(false);
    const handleClick = () => setModalShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleClick}>
                more info..
            </Button>

            <DetailModal
                year={data.Year}
                title={data.Title}
                poster={data.Poster}
                imdbId={data.imdbID}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default CardsButton
