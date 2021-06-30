import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddRecordModal(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [year, setYear] = useState("");
    const [condition, setCondition] = useState("");

    function submitForm(){
        const albumToAdd = {
            album_title: title,
            year,
            condition,
            artist: {
                name: artist,
            }
        }
        props.addAlbum(albumToAdd);
        setShow(false);
    }
    function resetForm() {
        setTitle("");
        setArtist("");
        setYear("");
        setCondition("");
    }


    const handleClose = () => {
        setShow(false);
        resetForm();
    };
    const handleShow = () => setShow(true);
    
  return (
    <>
    <Button variant="primary" size="sm" className="m-2" onClick={handleShow}>
        Add Album
    </Button>

    <Modal show={show} animation={false}onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
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
        <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={submitForm}>Save changes</Button>
    </Modal.Footer>
    </Modal>
    </>
  );
}

export default AddRecordModal;