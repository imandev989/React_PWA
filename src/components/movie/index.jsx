import m1 from "../../assets/images/img1.jpg";
import m2 from "../../assets/images/img2.jpg";
import m3 from "../../assets/images/img3.jpg";
import m4 from "../../assets/images/img4.jpg";
import Header from "../common/Header";
import Item from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../features/Movie";

// const data = [
//   { img: m1, title: "m1", year: "1980" },
//   { img: m2, title: "m2", year: "1990" },
//   { img: m3, title: "m3", year: "2000" },
//   { img: m4, title: "m4", year: "2020" },
// ];

function Movie() {
  // const [data,setData]=useState([])
  // const [loading ,setLoading]=useState(false)
  const dispatch = useDispatch();
  let data = useSelector((state) => state?.movies?.movieList);

  const loading = useSelector((state) => state?.movies?.loading);

  console.log(loading);
  console.log(data);
  //in mount and pending phase data is an empty array
  if (!Array.isArray(data)) {
    data = data.results;
  }
  useEffect(() => {
    if (data) {
      dispatch(fetchMovie());
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {loading ? (
            <p className="loading">
              درحال دریافت داده می باشیم لطفا منتظر بمانید
            </p>
          ) : data ? (
            data.map((i, index) => (
              <Item
                key={index}
                id={i.objectId}
                img={i.img}
                title={i.name}
                year={i.year}
              />
            ))
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Movie;
