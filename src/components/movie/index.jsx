import m1 from "../../assets/images/img1.jpg";
import m2 from "../../assets/images/img2.jpg";
import m3 from "../../assets/images/img3.jpg";
import m4 from "../../assets/images/img4.jpg";
import Header from "../common/Header";
import Item from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";

const data = [
  { img: m1, title: "m1", year: "1980" },
  { img: m2, title: "m2", year: "1990" },
  { img: m3, title: "m3", year: "2000" },
  { img: m4, title: "m4", year: "2020" },
];

const Movie = () => {
  // const [button, setButton] = useState("");
  // const [blogPosts, setBlogPosts] = useState([
  //   { title: "a", id: 1 },
  //   { title: "b", id: 2 },
  // ]);
  // const onYesPress = () => {
  //   setButton("yes");
  // };
  // const onNoPress = () => {
  //   setButton("no");
  // };
  // const onAddPress = () => {
  //   setBlogPosts([...blogPosts, { title: "c", id: 3 }]);
  // };

  // useEffect(() => {
  //   console.log("use Effect button has been called", button);
  // }, [button]);
  // useEffect(() => {
  //   console.log("use Effect blogPosts is called", blogPosts);
  // }, [blogPosts]);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://parseapi.back4app.com/classes/film",{

  //       headers:{
  //               "X-Parse-Application-Id": "ynw5l9xJjhSfrmK6n3U6v0krZBJf6mKiVywNNKtG",
  //       "X-Parse-REST-API-Key":"3jTFIn0TkJA22iw9uPUWvz2vIARAFKeM2VN8I2B9",
  //           }
  //       }).then(
  //     (res) => {
  //       console.log(res);
  //       res.json().then((info) => {
  //         console.log(info);
  //         setData(info.results);
  //         setLoading(false);
  //       });
  //     },
  //     (error) => {
  //       setLoading(false);
  //       alert("error");
  //       console.log(error);
  //     }
  //   );
  // }, []);
  useEffect(() => {
    setLoading(true);
    let config = {
      headers: {
        "X-Parse-Application-Id": "ynw5l9xJjhSfrmK6n3U6v0krZBJf6mKiVywNNKtG",
        "X-Parse-REST-API-Key": "3jTFIn0TkJA22iw9uPUWvz2vIARAFKeM2VN8I2B9",
      },
    };
    axios
      .get("https://parseapi.back4app.com/classes/film", config)
      .then(function (response) {
        //handle success
        console.log(response);
        console.log(response.data.results);
        setData(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        //handle error
        setLoading(false);

        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="row border-bottom">
        <Header />
      </div>
      <div className="row">
        {Loading ? (
          <p className="text-center bg-danger alert">Loading</p>
        ) : (
          data.map((i, index) => (
            <Item key={index} img={i.img} title={i.name} year={i.year} />
          ))
        )}
        {/* <button
          className="btn btn-success btn-small"
          onClick={() => onYesPress()}
        >
          yes
        </button>
        <button
          className="btn btn-danger btn-small"
          onClick={() => onNoPress()}
        >
          no
        </button>
        <button
          className="btn btn-warning btn-small"
          onClick={() => onAddPress()}
        >
          add post
        </button> */}
      </div>
    </div>
  );
};

export default Movie;
