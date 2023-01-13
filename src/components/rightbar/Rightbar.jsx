import React from "react";
import "./rightbar.css";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { RiArrowUpSLine } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import { ImDownload3 } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { laguagesData } from "../data";
const Rightbar = () => {
  return (
    <div className="right__bar">
      <div className="topbar__container">
        <span>Hi, Abhishek</span>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>

      <div className="second__container">
        <div className="files__container">
          <div className="company">
            <img src="/assets/person/2.Png" alt="pdf" className="pdfImage" />
            <p className="text">Locus Films Private Limited</p>
          </div>
          <div className="button__container">
            <button className="btn">Edit</button>
          </div>
        </div>

        <div className="description__container">
          <div className="company__dexcription">
            <p>Company Code</p>
            <p className="lucf">LUCF</p>
            <p>Company Logo</p>
            <p>Unavailaible</p>
          </div>
          <div className="company__domain">
            <p>Domains</p>
            <p>@lucasfilms.com</p>
            <p>@lucasstarwars.com</p>
            <p>@starwars.com</p>
            <p className="others">+5 Others</p>
          </div>
        </div>
        <div className="section__container">
          <div className="section__info">
            <p className="element__one">ENTITIES</p>
            <p className="element__two">INVOICE CODES</p>
            <p>USERS</p>
          </div>
        </div>
      </div>

      <div className="main__container">
        <div className="entities__container">
          <p className="entities">4 Entities</p>
          <BsFillPlusSquareFill
            style={{ color: "#4285F4" }}
            className="square__icon"
          />
          
        </div>
        <div className="title__container">
            <p className="billing__container">Billing Location</p>
            <p>Entity Name</p>
            <p>Entity Code</p>
            <p>MSLA Valid through</p>
            <p>File Sharing</p>
          </div>
        <div className="name__container">
          <div className="name">
            <p>Riyadh, Kingdom of Saudia Arbiya</p>
            <p>Lucas Films Private Limited</p>
            <p>LUCFOI</p>
            <p>3 June 2022-5 June 2023</p>
            <p>External</p>
            <RiArrowUpSLine className="logo" />
          </div>
        </div>

        <div className='about__container'>
            <div className='address__container'>
              <p className='title'>Address</p>
              <p>Line 1</p>
              <p>Line 2</p>
              <p>City, Country</p>
              <p>ZIP Code</p>
              <p className='validity__container'>Charge Code/PO Number</p>
              <p>Required</p>
              <p className='title'>MSLA</p>
              <span>20200916 EZ LucasFilms MOU_signed by George.pdf{` 
              `}<span><BsEyeFill className='bslogo'/></span><span><ImDownload3 className='imlogo'/></span></span>
              <p className='title'>Corporate Price as per MSLA</p>
              
            </div>
            <div>
              <p className='title'>Company Registration Number</p><span>UICE87F2T7749WEY</span>
              <p className='validity__container'>Company Registration Validity</p><span>5 June 2025</span>
              <p className='validity__container'>Duration of File Storage</p><span>90 days</span>
            </div>
            <div>
              <p className='title'>Tax Registration Number</p><span>AHR37T983Q7TRG</span>
              <p className='validity__container'>TRN Validity</p><span>5 June 2025</span>
              <p className='validity__container'>Currency</p><span>US Dollar(s)</span>
              <p className='validity__container'>VAT + WHT</p><span>5% + 5%</span>
            </div>
            <FaEdit className='logo'/>

          </div>
          <div className='language__container'>
            <div className='services__container'>
              <p>Service</p>
              <p>Units</p>
              <p>List Price</p>
              <p>Offered Price</p>
              <p>Discount</p>
            </div>
            {laguagesData.map((item, index) => (
              <div key={index} className="expense-item">
              
                <p>{item.service}</p>
                <p>{item.units}</p>
                <p>{item.ListPrice}</p>
                <p>{item.offeredPrice}</p>
                <p>{item.discount}</p>
              
              <div className="expense-item__description">
               
               
              </div>
            </div>
            ))}
          </div>

        </div> 
        
      

    </div>
  );
};

export default Rightbar;
