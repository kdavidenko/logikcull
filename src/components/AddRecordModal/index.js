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
        +
    </Button>

    <Modal show={show} animation={false}onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Add Album</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <form>
            <div className="form-group">
                <p>Album Title</p>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <p>Artist</p>
                <input value={artist} onChange={(e)=>setArtist(e.target.value)} />
            </div>
            <div className="form-group">
                <p>Year</p>
                <input value={year} onChange={(e)=>setYear(e.target.value)} maxLength="4" />
            </div>
            <div className="form-group">
                <p>Condition</p>
                <select value={condition} onChange={(e)=>setCondition(e.target.value)}>
                    <option value="poor">Very Poor</option>
                    <option value="fair">Fair</option>
                    <option value="good">Good</option>
                    <option value="very_good">Very Good</option>
                    <option value="mint">Mint</option>
                </select>
            </div>
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