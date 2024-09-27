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
  

  const indexOfLastItem = page * itemPerPage;
  
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  
  const currentItems = totalData.slice(indexOfFirstItem>=totalData.length?0:indexOfFirstItem, indexOfLastItem>=totalData.length?indexOfFirstItem+7:indexOfLastItem);
 

  
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
        {currentItems
          .filter((card) => {
            return card.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((data) => {
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
