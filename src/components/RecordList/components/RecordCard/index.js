import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditRecordModal from '../../../EditRecordModal'
import RemoveRecordModal from '../../../RemoveRecordModal'
function RecordCard(props) {
  function readableCondition(con) {
    const con1 = con.replace("_"," ");
    const con2 = con1.replace(/\b(\w)/g, s => s.toUpperCase());
    return con2;
  };

  return (
    <Card className="mt-2 mb-2 p-2">
      <Card.Title>
        {props.albumTitle}
      </Card.Title>
      <Card.Subtitle>
        {props.artist.name}
      </Card.Subtitle>
      <Card.Body>
        <p>Year: {props.year}</p>
        <p>Condition: {readableCondition(props.condition)}</p>
        <EditRecordModal {...props} updateAlbum={(newAlbum, oldAlbum) => props.updateAlbum(newAlbum, oldAlbum)} />
        <RemoveRecordModal {...props} updateAlbum={(oldAlbum) => props.removeAlbum(oldAlbum)} />
      </Card.Body>
    </Card>
  );
}

export default RecordCard;