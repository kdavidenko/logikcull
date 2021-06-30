import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function RemoveRecordModal(props) {
    const [show, setShow] = useState(false);

    function submitForm(){
        const oldAlbum = {
            album_title: props.albumTitle,
            year: props.year,
            condition: props.condition,
            artist: {
                name: props.artist.name,
                id: props.artist.id
            }
        }
        props.removeAlbum(oldAlbum);
        setShow(false);
    }

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    
  return (
    <>
    <Button variant="danger" size="sm" className="m-2" onClick={handleShow}>
        Remove
    </Button>

    <Modal show={show} animation={false}onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Remove Album</Modal.Title>
    </Modal.Header>

    <Modal.Body>Are you sure you want to remove this album from your collection?
    <p className="font-italic"><span className="font-weight-bold">{props.albumTitle}</span> by {props.artist.name}</p>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
        <Button variant="danger" onClick={submitForm}>Save changes</Button>
    </Modal.Footer>
    </Modal>
    </>
  );
}

export default RemoveRecordModal;