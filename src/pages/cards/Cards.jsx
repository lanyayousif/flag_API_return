import { useEffect, useState } from "react";
import React from "react";
import "./cards.css";
import Card from "../../componet/card/Card";

function Cards() {
  const [data, setData] = useState([]);
  const [isload, setIsloder] = useState(true);
  const [serchValue, setSearchvalue] = useState(null);
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  // let filterData = [];

      function fetchData(url) {
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            setData(result);
            setIsloder(false);
          })
          .catch((e) => {
            console.log(e);
          });
        }
// return all data
        // useEffect(() => {
        //   fetchData(url);
        // }, []);
        
// return search data
              useEffect(() => {
                fetchData(url);
              }, [url]);
              

  const handlSearch = (e) => {
    e.preventDefault();
    setSearchvalue(e.target.value.toLowerCase());
    // console.log("null test  "+`https://restcountries.com/v3.1/name/${serchValue}`)
    if (!e.target.value.toLowerCase()) {
      setUrl("https://restcountries.com/v3.1/all")
    }else{
      setUrl(`https://restcountries.com/v3.1/name/${e.target.value.toLowerCase()}`);
    }

  };

  console.log(url);
  console.log(serchValue);

  // if(serchValue.length > 0){
  //   filterData = data.filter(value=>{
  //     return value.name.common.toLowerCase().includes(serchValue)
  //   })
  //  }

  return (
    <>
      {isload ? (
        <div className="loader">
          <span> Loading...</span>
        </div>
      ) : (
        <>
          <div className="search">
            <input
              type="text"
              id="search"
              onChange={handlSearch}
              placeholder="Search Box"
            />
          </div>
          <div className="cards">
            {data.length > 0 &&
              data.map((value) => {
                return <Card {...value} key={value.id} />;
              })}
          </div>
        </>
      )}
    </>
  );
}

export default Cards;

// fetchData(`https://restcountries.com/v3.1/name/${serchValue}`)
