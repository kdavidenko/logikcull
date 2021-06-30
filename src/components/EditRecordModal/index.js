import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EditRecordModal(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(props.albumTitle);
    const [artist, setArtist] = useState(props.artist.name);
    const [year, setYear] = useState(props.year);
    const [condition, setCondition] = useState(props.condition);

    function submitForm(){
        const newAlbum = {
            album_title: title,
            year,
            condition,
            artist: {
                name: artist,
                id: props.artist.id
            }
        }
        const oldAlbum = {
            album_title: props.albumTitle,
            year: props.year,
            condition: props.condition,
            artist: {
                name: props.artist.name,
                id: props.artist.id
            }
        }
        props.updateAlbum(newAlbum, oldAlbum);
        setShow(false);
    }
    function resetForm() {
        setTitle(props.albumTitle);
        setArtist(props.artist.name);
        setYear(props.year);
        setCondition(props.condition);
    }


    const handleClose = () => {
        setShow(false);
        resetForm();
    };
    const handleShow = () => setShow(true);
    
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Editing</Modal.Title>
    </Modal.Header>

    <Modal.Body>{props.name}
        <form>
            
        <input value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input value={artist} onChange={(e)=>setArtist(e.target.value)} />
        <input value={year} onChange={(e)=>setYear(e.target.value)} />
        <input value={condition} onChange={(e)=>setCondition(e.target.value)} />

        </form>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={submitForm}>Save changes</Button>
    </Modal.Footer>
    </Modal>
    </>
  );
}

export default EditRecordModal;