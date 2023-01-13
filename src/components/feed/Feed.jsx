import React from "react";
import "./feed.css";
import { BiSortDown } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { data } from "../data";
import { useState } from "react";

const Feed = () => {
  const [change,setChange] = useState(false)
 
  return (
    <>
      <div className="feed__container">
        <div className="main">
          <div className="text__container">
            <div className="text__client">
              <p className="client">Clients</p>
              <BiSortDown className="icon" />
              <p className="time">Creation Time</p>
            </div>
            <div className="square">
              <BsFillPlusSquareFill className="square__icon" />
            </div>
          </div>

          <div className="searchbar">
            <CiSearch className="searchIcon" />
            <input
              placeholder="Company, Entity, User, Domain, Service, Location"
              className="searchInput"
            />
          </div>
        </div>
        <div className="date__container">
          <div className="date">
            <p>April 2021</p>
          </div>
          <div className="godown__icon">
            <GoChevronDown />
          </div>
        </div>
        <div className="expenses">
          {data.map((item, index) => (
            <div className="expense-item" key={index} onClick={()=>setChange(!change)}>
              <div>
                <p>{change ? item.name : item.companyName}</p>
                <p>{item.entities}</p>
              </div>
              <div className="expense-item__description">
                <p>{change? item.code: item.companyCode}</p>
                <p>{item.user}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
