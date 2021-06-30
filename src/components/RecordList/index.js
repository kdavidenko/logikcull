import { useState, useEffect } from 'react';
import SearchRecords from './components/SearchRecords';
import Pagination from './components/Pagination';
import RecordCard from './components/RecordCard';
import AddRecordModal from '../AddRecordModal';

function RecordList() {

  const [fullCollection, setFullCollection] = useState(JSON.parse(localStorage.getItem("collection") || "[]"));
  const [currentCollection, setCurrentCollection] = useState(fullCollection);
  const [criteria, setCriteria] = useState("");

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  function curateList(){
    if (criteria.length > 0) {
      const current = fullCollection.filter((album) => {
        return album.album_title.toLowerCase().includes(criteria);
      });
      setCurrentCollection(current);
      setPage(1);
    } else {
      setCurrentCollection(fullCollection);
      setPage(1);
    }
  };

  function findArtistId(artist){
    const index = fullCollection.findIndex((el) => el.artist.name.toLowerCase() === artist.toLowerCase());
    const artistId = index;
    return artistId;
  };

  function findLastArtistId(){
    let set = [];
    let ret;

    for (let i = 0; i < fullCollection.length; i++) {
      set.push(fullCollection[i].artist.id);
    }
    ret = set.sort((a, b) => b - a);

    return ret[0];
  };

  function addAlbum(albumToAdd) {
    // check if the artist already exists
    const existingArtistId = findArtistId(albumToAdd.artist.name);
    // If they do, use that ID
    // if they don't add a new ID
    if (existingArtistId === -1) {
      albumToAdd.artist.id = findLastArtistId() + 1;
    } else {
      albumToAdd.artist.id = existingArtistId;
    }
    console.log(albumToAdd)
    let set = [...fullCollection];
    set.push(albumToAdd)
    setFullCollection(set);
  };

  function removeAlbum(albumToBeRemoved) {
    let set = [...fullCollection];
    const index = set.findIndex((el) =>JSON.stringify(el) === JSON.stringify(albumToBeRemoved));
    set.splice(index, 1)
    setFullCollection(set);
  };

  function updateAlbum(newAlbum, oldAlbum){
    let set = [...fullCollection];
    const index = set.findIndex((el) =>JSON.stringify(el) === JSON.stringify(oldAlbum));
    set[index] = newAlbum;
    if (newAlbum.artist.name !== oldAlbum.artist.name) {
      for (let i = 0; i < set.length; i++) {
        if(newAlbum.artist.id === set[i].artist.id){
          console.log(set[i])
          set[i].artist.name = newAlbum.artist.name;
        }
      }
    }
    setFullCollection(set);
  };

  const paginate = (num) => setPage(num);

  useEffect(() => {
    return curateList();
  }, [criteria, fullCollection]);


  const indexOfLastAlbum = page * itemsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - itemsPerPage;
  const currentAlbums = currentCollection.slice(indexOfFirstAlbum, indexOfLastAlbum)

  return (
    <div>
      <SearchRecords criteria={criteria} setCriteria={setCriteria} />
      <AddRecordModal addAlbum={(albumToAdd) => addAlbum(albumToAdd)} />
      <select value={itemsPerPage} onChange={(e)=>setItemsPerPage(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
      <Pagination
        perPage={itemsPerPage}
        total={currentCollection.length}
        paginate={paginate}
      />
      {currentCollection.length > 0 ?
        currentAlbums.map((album) => {
          return (
            <RecordCard
              key={album.album_title} 
              albumTitle={album.album_title}
              year={album.year}
              condition={album.condition}
              artist={album.artist}
              updateAlbum={updateAlbum}
              removeAlbum={removeAlbum}
            />
          )
        })
        :
        <div className="mt-2">No results for that search</div>
      }

    </div>
  );
}

export default RecordList;