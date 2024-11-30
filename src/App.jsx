import React, { useState, useEffect } from "react";
import DragonGame from "./Components/DragonGame";
import "./App.css";
import network from "../src/assets/network.png";
import internet from "../src/assets/internet.png";
import { SpinnerDotted } from "spinners-react";

const App = () => {
  const [isNetworkAvailable, setIsNetworkAvailable] = useState(false);
  const [closePopUp, setClosePopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [website, setWebsite] = useState(false);

  const dummyData = [
    {
      name: "Rohit",
      age: 24,
      height: 5.6,
      weight: 72,
      designation: "Software Developer",
    },
    { name: "Sagar", age: 22, height: 5.8, weight: 62, designation: "Hr" },
    {
      name: "Aniket",
      age: 27,
      height: 5.7,
      weight: 60,
      designation: "Quality Assurance",
    },
    {
      name: "Akash",
      age: 25,
      height: 5.9,
      weight: 70,
      designation: "Designer",
    },
    {
      name: "Dinesh",
      age: 2,
      he8ight: 5.1,
      weight: 68,
      designation: "Accountant",
    },
  ];

  const generateRandomNumber = () => {
    const min = 5;
    const max = 20;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(() => {
      setIsNetworkAvailable(true);
      setClosePopUp(true);
    }, random * 1000);
  };

  const handleContinue=()=>{
    setLoading(true)
    setClosePopUp(true)
    setTimeout(()=>{
      setLoading(false)
      setWebsite(true)
    },2000)
  }

  useEffect(() => {
    generateRandomNumber();
  }, []);

 

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header
        className="top_headers"
        style={{ visibility: website || loading ? "hidden" : "visible" }}
      >
        <img
          alt="network"
          src={isNetworkAvailable ? internet : network}
          className="network"
        />
        <h1
          className="no-connection"
          style={{ color: isNetworkAvailable ? "green" : "#ff4c4c" }}
        >
          {isNetworkAvailable ? "Network Available" : "No Connection Found"}
        </h1>
      </header>

      {loading ? (
        <div className="container">
          <SpinnerDotted
            size={90}
            thickness={180}
            speed={88}
            color="rgba(57, 172, 103, 0.79)"
          />
        </div>
      ) : website ? (
        <div className="container">
          <h1 className="data_head">Employee Data</h1>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.height} ft</td>
                  <td>{employee.weight} kg</td>
                  <td>{employee.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <DragonGame
          isNetworkAvailable={isNetworkAvailable}
          closePopUp={closePopUp}
          setClosePopUp={setClosePopUp}
          setWebsite={setWebsite}
          setLoading={setLoading}
        />
      )}
      <p className="continue-link" style={{visibility:isNetworkAvailable && !closePopUp ?"visible":"hidden"}} onClick={handleContinue}>Continue to website</p>
    </div>
  );
};

export default App;
