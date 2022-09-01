import React from "react";
import BgImg from "../images/book-bg.png";
import Card from "./Card.jsx";
import axios from "axios";
import { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setDataBook] = useState([])
  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBKqRV_VQMLoeihO2M9s_SkS79RcoP4QlI"+"&maxResults=40"
        )
        .then((res) => setDataBook(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Bob book library <br /> Let's find your <br /> favorite book.
          </h1>
        </div>

        <div className="row2">
          <h2>Find Your Book Here</h2>
          <br />
          <div className="search">
            <input
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src={BgImg} alt="" />
        </div>
      </div>
      <div className="container">
        {
            <Card book={bookData}/>
        }
        
      </div>
    </>
  );
};

export default Main;
