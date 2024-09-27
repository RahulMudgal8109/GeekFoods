import React, { useState } from "react";
import data1 from "./../data1.js";
import RestrantCard from "./RestrantCard.jsx";
import styles from "./../css/Restraunt.module.css";

const Restraunt = () => {
 

  const [page, setPage] = useState(1);
  const paginate = (pageNo) => {
    setPage(pageNo);
  };
  const [search, setSearch] = useState("");
  const itemPerPage = 7;
  const [totalData, setTotalData] = useState(data1);
  console.log(totalData)
  console.log(totalData.length)
  

  const indexOfLastItem = page * itemPerPage;
  console.log("indexOfLastItem"+" "+indexOfLastItem)
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  console.log("indexOfFirstItem"+" "+indexOfFirstItem)
  const firstIn=indexOfFirstItem>=totalData.length?0:indexOfFirstItem;
  console.log("firstIn"+" "+firstIn)
  const lastIn=indexOfLastItem && indexOfFirstItem>=totalData.length?7:indexOfLastItem;
  console.log("lastIn"+" "+lastIn)
  
  const currentItems = totalData.slice(firstIn, lastIn);
  console.log("current "+ " "+currentItems.length)
  console.log(currentItems)
 

  
  const filterData = (value) => {
    const data=data1;
   
   
    setTotalData(data.filter((card)=>{
      return card.name.toLowerCase().includes(value.toLowerCase());

    }))
    
  };
  return (
    <div className={styles.restraunt}>
      <div className={styles.searchBar}>
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            filterData(e.target.value);
          }}
        />
      </div>

      <div className={styles.container}>
        {currentItems.map((data) => {
            return <RestrantCard {...data} key={data._id.$oid}/>;
          })}
      </div>
      <div className={styles.pagination}>
        <ul>
          {[...new Array(Math.ceil(totalData.length / itemPerPage))].map(
            (_, index) => (
              <li
                className={`${styles.pageNo} ${
                  page === index + 1 ? styles.bg : ""
                }`}
                key={index}
                onClick={() => {
                  paginate(index + 1);
                  // setSearch("");
                }}
              >
                {index + 1}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Restraunt;
