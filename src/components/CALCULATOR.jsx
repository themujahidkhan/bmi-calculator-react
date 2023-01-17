import React, { useState } from "react";
import "../styles/style.css";

function CALCULATOR() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState("");

  function calculateBMI() {
    setResult(`${Number(weight / (height * height)).toFixed(2)} kg/m2`);
  }

  return (
    <>
      <div className="bmi-form">
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="form-title">BMI Calculator</h1>
          <div className="input-div">
            <label>Height (in meters)</label>
            <input
              type="number"
              className="height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          {/* Input For Weight */}
          <div className="input-div">
            <label>Weight (in Kgs)</label>
            <input
              type="number"
              className="weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="calculate-btn" onClick={calculateBMI}>
              Calculate BMI
            </button>
          </div>
        </form>
        {result && (
          <div className="result-wrapper">{`Your BMI is: ${result}`}</div>
        )}
      </div>
    </>
  );
}

export default CALCULATOR;
