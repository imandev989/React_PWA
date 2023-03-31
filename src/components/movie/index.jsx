import m1 from "../../assets/images/img1.jpg";
import m2 from "../../assets/images/img2.jpg";
import m3 from "../../assets/images/img3.jpg";
import m4 from "../../assets/images/img4.jpg";
import m5 from "../../assets/images/img5.jpg";
import Header from "../common/Header";
import Item from "./Item";

const data = [
  { img: m1, title: "m1", year: "1980" },
  { img: m2, title: "m2", year: "1990" },
  { img: m3, title: "m3", year: "2000" },
  { img: m4, title: "m4", year: "2020" },
];

const Movie = () => {
  return (
    <div className="container">
      <div className="row border-bottom">
      <Header/>
      </div>
      <div className="row">
        {data.map((i, index) => (
          <Item key={index} img={i.img} title={i.title} year={i.year} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
