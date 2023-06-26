function NavPage(props) {
  return (
    <header className="d-flex justify-content-between inicio align-items-center">
      <a  href="#"
        className="btn btn-primary btn-sm"
        onClick={() => {
          if (props.page === 1) return null;
          props.setPage(props.page - 1);
        }}
      >
        &larr; Anterior
      </a>
      <p>Page: {props.page}</p>
      <a href="#"  
        className="btn btn-primary btn-sm"
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Siguiente &rarr;
        {/* Page {props.page + 1} */}
      </a>
    </header>
  );
}

export default NavPage;
