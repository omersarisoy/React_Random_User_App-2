import React from "react";
import "./Card.css"
import ageMan from "../assets/growing-up-man.svg";
import ageWoman from "../assets/growing-up-woman.svg";
import email from "../assets/mail.svg";
import profilMan from "../assets/man.svg";
import profilWoman from "../assets/woman.svg";
import street from "../assets/map.svg";
import password from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import { useState, useEffect, useRef } from "react";

const Card = ({ ömer, randomUser }) => {
  const [showUser, setShowUser] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [showTable, setShowTable] = useState(false)
 console.log(ömer)


  useEffect(() => {
    setShowUser(
      <>
        <p>My name is</p>
        <h3>
          {ömer.name.first} {ömer.name.last}
        </h3>
      </>
    );
  }, []);

  const getUserInfo = (topic, value1, value2) => {
    return setShowUser(
      <>
        <p>My {topic} is </p>
        <h3>
          {value1} {value2}
        </h3>
      </>
    );
  };

  const addUserInfo = () => {
    setShowTable(true);
    setUserInfo((prevInfo) => 
        [...prevInfo,     
        <tr>
            <td>{ömer.name.first}</td>
            <td>{ömer.name.last}</td>
            <td>{ömer.email}</td>
            <td>{ömer.phone}</td>
            <td>{ömer.dob.age}</td>
            <td>{}</td>
        </tr>]
    ) 
};

    
  return (
    <div>
      <div className="card-container">
        <img src={ömer.picture.large} alt="profile-picture" />
        <div className="card-info">{showUser}</div>
        <div className="image-container">
          {ömer.gender == "male" ? (
            <img
              src={profilMan}
              alt="profilman"
              onMouseOver={() =>
                getUserInfo("Name", ömer.name.first, ömer.name.last)
              }
            />
          ) : (
            <img
              src={profilWoman}
              alt="profilwoman"
              onMouseOver={() =>
                getUserInfo("Name", ömer.name.first, ömer.name.last)
              }
            />
          )}

          <img
            src={email}
            alt="email"
            onMouseOver={() => getUserInfo("Email", ömer.email)}
          />

          {ömer.gender == "male" ? (
            <img
              src={ageMan}
              alt="ageman"
              onMouseOver={() => getUserInfo("Age", ömer.dob.age)}
            />
          ) : (
            <img
              src={ageWoman}
              alt="agewoman"
              onMouseOver={() => getUserInfo("Age", ömer.dob.age)}
            />
          )}

          <img
            src={street}
            alt="street"
            onMouseOver={() => getUserInfo("Street", ömer.location.street.name)}
          />

          <img
            src={phone}
            alt="phone"
            onMouseOver={() => getUserInfo("Phone", ömer.phone)}
          />

          <img
            src={password}
            alt="password"
            onMouseOver={() => getUserInfo("Password", ömer.login.password)}
          />
        </div>
        <div >
            {showTable ? (
            <table >
              <thead>
                <tr key={ömer.id.value} >
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone </th>
                  <th>Age </th>
                  <th>Delete </th>
                </tr>
              </thead>   
              <tbody className="user-table" >
                {userInfo}
              </tbody>
          </table>): null}
          
           
        </div>
        <button onClick={randomUser}> NEW USER </button>
        <button onClick={addUserInfo}> ADD USER </button>
      </div>
    </div>
  );
};

export default Card;
