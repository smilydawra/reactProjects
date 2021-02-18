import React from 'react';
import { Button, Modal, Image } from 'react-bootstrap';

const DetailModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={props.poster} rounded />
                <h4>Year: {props.year}</h4>
                <h4>IMDB-ID: {props.imdbId}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailModal;