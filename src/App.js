import RecordList from './components/RecordList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // initialize "database"
  const collection = [
    { "album_title": "Cardigan Letterpress Scenester", "year": 1967, "condition": "poor", "artist": { "name": "Sex Pistols", "id": 0 } },
    { "album_title": "Sriracha Vinegar Disrupt", "year": 1964, "condition": "poor", "artist": { "name": "Derek and the Dominos", "id": 1 } },
    { "album_title": "Heirloom Twee Literally", "year": 1923, "condition": "very_good", "artist": { "name": "The Animals", "id": 2 } },
    { "album_title": "Distillery Intelligentsia Plaid", "year": 1939, "condition": "fair", "artist": { "name": "Living Colour", "id": 3 } },
    { "album_title": "Locavore Stumptown Flexitarian", "year": 1950, "condition": "fair", "artist": { "name": "The Jackson Five", "id": 4 } },
    { "album_title": "Banjo Pitchfork Flannel", "year": 1984, "condition": "mint", "artist": { "name": "The Who", "id": 5 } },
    { "album_title": "90's Hashtag Chartreuse", "year": 1921, "condition": "mint", "artist": { "name": "AC/DC", "id": 6 } },
    { "album_title": "Authentic Knausgaard Godard", "year": 2014, "condition": "mint", "artist": { "name": "Frank Zappa and the Mothers of Invention", "id": 7 } },
    { "album_title": "Helvetica Cliche Chicharrones", "year": 1936, "condition": "fair", "artist": { "name": "Aerosmith", "id": 8 } },
    { "album_title": "Chicharrones Lomo Fixie", "year": 2007, "condition": "poor", "artist": { "name": "The Beatles", "id": 9 } },
    { "album_title": "Master Keffiyeh Keytar", "year": 2006, "condition": "very_good", "artist": { "name": "The Band", "id": 10 } },
    { "album_title": "Migas Brunch Tacos", "year": 1991, "condition": "good", "artist": { "name": "Earth Wind and Fire", "id": 11 } },
    { "album_title": "Try Hard 90's Pickled", "year": 1973, "condition": "mint", "artist": { "name": "AC/DC", "id": 6 } },
    { "album_title": "Austin Bespoke Tilde", "year": 1934, "condition": "mint", "artist": { "name": "James Brown and the JBs", "id": 13 } },
    { "album_title": "Twee Waistcoat Tacos", "year": 1925, "condition": "poor", "artist": { "name": "Lynyrd Skynyrd", "id": 14 } },
    { "album_title": "Mixtape Pinterest Bespoke", "year": 2005, "condition": "poor", "artist": { "name": "Living Colour", "id": 3 } },
    { "album_title": "Brooklyn Chambray Crucifix", "year": 1946, "condition": "fair", "artist": { "name": "The Jimi Hendrix Experience", "id": 16 } },
    { "album_title": "Gastropub Bespoke Hammock", "year": 1950, "condition": "mint", "artist": { "name": "The Animals", "id": 2 } },
    { "album_title": "Retro Yolo Offal", "year": 1935, "condition": "mint", "artist": { "name": "Genesis", "id": 18 } },
    { "album_title": "Yolo I Phone Master", "year": 2013, "condition": "mint", "artist": { "name": "The Carpenters", "id": 19 } },
    { "album_title": "Actually Tilde Master", "year": 1967, "condition": "very_good", "artist": { "name": "The Clash", "id": 20 } },
    { "album_title": "Pour Over Diy Celiac", "year": 1928, "condition": "good", "artist": { "name": "David Bowie and The Spiders From Mars", "id": 21 } },
    { "album_title": "Vegan Cornhole Xoxo", "year": 1944, "condition": "very_good", "artist": { "name": "Kansas", "id": 22 } },
    { "album_title": "Crucifix Pbr\u0026B Gluten Free", "year": 1979, "condition": "good", "artist": { "name": "James Brown and the JBs", "id": 13 } },
    { "album_title": "Godard Fixie Skateboard", "year": 1921, "condition": "mint", "artist": { "name": "The Scorpions", "id": 24 } }
  ];
  
  localStorage.setItem('collection', JSON.stringify(collection));

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Greg's Record Collection</h1>
      </header>
      <div className="container-fluid">
          <RecordList/>
      </div>
    </div>
  );
}

export default App;
