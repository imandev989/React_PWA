import { Link } from "react-router-dom";
const Item = ({ img, title, year, id }) => {
  return (
    <div className="col-sm-3 my-2">
      <div className="card">
        <img src={img} class="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text"><h3>{title}</h3>{year}</p>
          <Link to={"movie-detail/"+id}>جزئیات بیشتر</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
