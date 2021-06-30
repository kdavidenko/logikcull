import { useState, useEffect } from 'react';
import SearchRecords from './components/SearchRecords';
import Pagination from './components/Pagination';
import RecordCard from './components/RecordCard';

function RecordList() {

  const [fullCollection, setFullCollection] = useState(JSON.parse(localStorage.getItem("collection") || "[]"));
  const [currentCollection, setCurrentCollection] = useState(fullCollection);
  const [criteria, setCriteria] = useState("");

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  function curateList(){
    if (criteria.length > 0) {
      const current = fullCollection.filter((album) => {
        return album.album_title.toLowerCase().includes(criteria);
      });
      setCurrentCollection(current);
    } else {
      setCurrentCollection(fullCollection);
    }
  }

  function updateAlbum(newAlbum, oldAlbum){
    let set = [...fullCollection];
    const index = fullCollection.findIndex((el) =>JSON.stringify(el) === JSON.stringify(oldAlbum));
    set[index] = newAlbum;
    setFullCollection(set);
    setPage(1);
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
      <div>Total Albums Displayed: {currentCollection.length}</div>
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