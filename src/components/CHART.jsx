import React from "react";

function CHART() {
  return (
    <div>
      <h1>BMI Table for Adults</h1>
      <div>
        <div className="table">
          <div className="table-header">
            <h3>Category</h3>
            <h3>BMI Range</h3>
          </div>
          <div className="table-data">
            <div className="category-info">
              <p>Sever Thinness</p>
              <p>Moderate Thinness</p>
              <p>Mild Thinness</p>
              <p>Normal</p>
              <p>Overweight</p>
              <p>Obese Class 1</p>
              <p>Obese Class 2</p>
              <p>Obese Class 3</p>
            </div>
            <div className="bmi-info">
              <p> less than 16</p>
              <p> 16 - 17</p>
              <p> 17 - 18.5</p>
              <p> 18.5 - 25</p>
              <p> 25 - 30</p>
              <p> 30 - 35</p>
              <p> 35 - 40</p>
              <p> greather than 40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CHART;
