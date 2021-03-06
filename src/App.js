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
    { "album_title": "Godard Fixie Skateboard", "year": 1921, "condition": "mint", "artist": { "name": "The Scorpions", "id": 24 } },
    { "album_title": "Knausgaard Tacos Mumblecore", "year": 1991, "condition": "good", "artist": { "name": "The Who", "id": 5 } },
    { "album_title": "Vinyl Tattooed Church Key", "year": 1937, "condition": "good", "artist": { "name": "Sex Pistols", "id": 0 } },
    { "album_title": "Chia Echo Meggings", "year": 1985, "condition": "mint", "artist": { "name": "ZZ Top", "id": 27 } },
    { "album_title": "Yolo Drinking Crucifix", "year": 1968, "condition": "good", "artist": { "name": "Duran Duran", "id": 28 } },
    { "album_title": "Keytar Heirloom Mustache", "year": 1990, "condition": "mint", "artist": { "name": "Coldplay", "id": 29 } },
    { "album_title": "Vice Goth Cred", "year": 1963, "condition": "fair", "artist": { "name": "Van Halen", "id": 30 } },
    { "album_title": "Beard Letterpress 8 Bit", "year": 1992, "condition": "poor", "artist": { "name": "The Scorpions", "id": 24 } },
    { "album_title": "Gastropub Normcore Fingerstache", "year": 2018, "condition": "very_good", "artist": { "name": "Bruce Springsteen \u0026 The E Street Band", "id": 32 } },
    { "album_title": "Sriracha Artisan Sustainable", "year": 1962, "condition": "mint", "artist": { "name": "Duran Duran", "id": 28 } },
    { "album_title": "Mustache Taxidermy +1", "year": 1921, "condition": "mint", "artist": { "name": "Living Colour", "id": 3 } },
    { "album_title": "Meh Truffaut Drinking", "year": 1942, "condition": "very_good", "artist": { "name": "The Police", "id": 35 } },
    { "album_title": "Post Ironic Pabst Cred", "year": 1926, "condition": "fair", "artist": { "name": "The Roots", "id": 36 } },
    { "album_title": "Meggings Migas Loko", "year": 1995, "condition": "fair", "artist": { "name": "Soundgarden", "id": 37 } },
    { "album_title": "Everyday Mixtape Austin", "year": 1987, "condition": "good", "artist": { "name": "R.E.M.", "id": 38 } },
    { "album_title": "Vice Williamsburg Truffaut", "year": 1990, "condition": "fair", "artist": { "name": "The Kinks", "id": 39 } },
    { "album_title": "Chambray Readymade Vhs", "year": 1923, "condition": "very_good", "artist": { "name": "Traffic", "id": 40 } },
    { "album_title": "Tousled Hashtag Kitsch", "year": 1998, "condition": "very_good", "artist": { "name": "Thievery Corporation", "id": 41 } },
    { "album_title": "Freegan Everyday Fixie", "year": 1994, "condition": "very_good", "artist": { "name": "Stone Temple Pilots", "id": 42 } },
    { "album_title": "Kombucha Chillwave Goth", "year": 1961, "condition": "mint", "artist": { "name": "Buffalo Springfield", "id": 43 } },
    { "album_title": "Lomo Williamsburg Tousled", "year": 1945, "condition": "very_good", "artist": { "name": "Metallica", "id": 44 } },
    { "album_title": "Church Key Microdosing Ennui", "year": 1964, "condition": "mint", "artist": { "name": "No Doubt", "id": 45 } },
    { "album_title": "Tilde Taxidermy Banjo", "year": 1928, "condition": "very_good", "artist": { "name": "Bon Jovi", "id": 46 } },
    { "album_title": "Locavore Flannel Hoodie", "year": 1993, "condition": "very_good", "artist": { "name": "Janis Joplin and Big Brother and the Holding Company", "id": 47 } },
    { "album_title": "Cliche Vhs Mlkshk", "year": 1997, "condition": "poor", "artist": { "name": "Creedence Clearwater Revival", "id": 48 } },
    { "album_title": "Selvage Austin Loko", "year": 1948, "condition": "fair", "artist": { "name": "Blind Faith", "id": 49 } }
  ];
  if (!localStorage.hasOwnProperty("collection")) {
    localStorage.setItem('collection', JSON.stringify(collection));
  };

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
