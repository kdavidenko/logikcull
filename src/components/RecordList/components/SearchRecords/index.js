
function SearchRecords(props) {
  const handleChange = (e) => {
    props.setCriteria(e.target.value);
  };
  
  return (
    <input placeholder="Search..." onChange={handleChange}/>
  );
}

export default SearchRecords;