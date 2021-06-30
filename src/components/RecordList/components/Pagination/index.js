function Pagination(props) {
  const pageNum = [];
  for(let i = 1; i <= Math.ceil(props.total / props.perPage); i++) {
      pageNum.push(i);
  };

  return (
    <nav>
        <ul className="pagination">
            {pageNum.map((num) => {
                return (
                    <li key={num} className="page-item">
                        <a
                        href="!#"
                        className="page-link"
                        onClick={() => props.paginate(num)}
                        >
                            {num}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
  );
}

export default Pagination;