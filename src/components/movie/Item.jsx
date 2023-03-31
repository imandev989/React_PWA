const Item = ({ img, title, year }) => {
  return (
    <div className="col-sm-3 my-2">
      <div className="card">
        <img src={img} class="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text"><h3>{title}</h3>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
