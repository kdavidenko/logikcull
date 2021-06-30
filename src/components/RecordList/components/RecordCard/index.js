import Card from 'react-bootstrap/Card';
import EditRecordModal from '../../../EditRecordModal'
function RecordCard(props) {
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
        <p>Condition: {props.condition}</p>
        <EditRecordModal {...props} updateAlbum={(newAlbum, oldAlbum) => props.updateAlbum(newAlbum, oldAlbum)} />
      </Card.Body>
    </Card>
  );
}

export default RecordCard;