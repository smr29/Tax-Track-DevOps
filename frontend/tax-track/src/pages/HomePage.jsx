import React from 'react'
import AppBar from '../components/AppBar'
import "../styles/Calculator.css"

const HomePage = () => {

  function toggleIncome() {
    var incomeFields = document.getElementById("incomeFields");
    var arrow = document.getElementById("arrow");
    
    if (incomeFields.classList.contains("collapsed")) {
        incomeFields.classList.remove("collapsed");
        arrow.innerHTML = "&#9660;";  
    } else {
        incomeFields.classList.add("collapsed");
        arrow.innerHTML = "&#9658;"; 
    }
  }
  
  function toggleDeductions() {
    var deductionFields = document.getElementById("deductionFields");
    var arrow = document.getElementById("arrow");
    
    if (deductionFields.classList.contains("collapsed")) {
        deductionFields.classList.remove("collapsed");
        arrow.innerHTML = "&#9660;";  
    } else {
        deductionFields.classList.add("collapsed");
        arrow.innerHTML = "&#9658;"; 
    }
  }

  function toggleHRA() {
    var hraFields = document.getElementById("hraFields");
    var arrowHRA = document.getElementById("arrow-hra");
    
    if (hraFields.classList.contains("collapsed")) {
        hraFields.classList.remove("collapsed");
        arrowHRA.innerHTML = "&#9660;"; // Downward arrow
    } else {
        hraFields.classList.add("collapsed");
        arrowHRA.innerHTML = "&#9658;"; // Rightward arrow
    }
  }

  return (
    <>
      <AppBar/>
      <div class="main-container">
      <div class="header">
            <p class="description">Simplify Your Tax Journey!!</p>
        </div>

        <div class="container">
            <h1>Income Tax Calculator</h1>
            <form>
                <label for="assessment-year">Assessment Year:</label>
                <select id="assessment-year" name="assessment-year">
                    <option value="2024-2025">2024-2025</option>
                    <option value="2023-2024">2023-2024</option>
                </select>

                <label for="age-category">Age Category:</label>
                <select id="age-category" name="age-category">
                    <option value="below-60">0 to 60</option>
                    <option value="60">60 to 80</option>
                    <option value="50">80 & above</option>
                </select>

                <fieldset>
                    <legend onClick={ toggleIncome }>Income <span id="arrow">&#9658;</span></legend>
                    <div id="incomeFields" class="collapsed">
                        <div class="income-input">
                            <label for="income-from-salary">Income From Salary:</label>
                            <input type="number" id="income-from-salary" name="income-from-salary" value="0"/>
                        </div>
                        
                        <div class="income-input">
                            <label for="other-sources-income">Other Sources:</label>
                            <input type="number" id="other-sources-income" name="other-sources-income" value="0"/>
                        </div>
                        
                        <div class="income-input">
                            <label for="rental-income">Rental Income:</label>
                            <input type="number" id="rental-income" name="rental-income" value="0"/>
                        </div>
                        
                        <div class="income-input">
                            <label for="self-occupied-interest">Self-occupied:</label>
                            <input type="number" id="self-occupied-interest" name="self-occupied-interest" value="0"/>
                        </div>
                    </div>
                </fieldset>


                <fieldset>
                    <legend onClick={ toggleDeductions }>Deductions <span id="arrow">&#9658;</span></legend>
                    <div id="deductionFields" class="collapsed">
                        <div class="deduction-input">
                            <label for="deductions-80c">Basic Deductions:</label>
                            <input type="number" id="deductions-80c" name="deductions-80c" value="0"/>
                        </div>
                        
                        <div class="deduction-input">
                            <label for="medical-insurance">Medical Insurance:</label>
                            <input type="number" id="medical-insurance" name="medical-insurance" value="0"/>
                        </div>
                        
                        <div class="deduction-input">
                            <label for="charity-donation">Donation to Charity:</label>
                            <input type="number" id="charity-donation" name="charity-donation" value="0"/>
                        </div>
                        
                        <div class="deduction-input">
                            <label for="education-loan">Educational Loan:</label>
                            <input type="number" id="education-loan" name="education-loan" value="0"/>
                        </div>
                        
                        <div class="deduction-input">
                            <label for="savings-interest">Interest on Deposits:</label>
                            <input type="number" id="savings-interest" name="savings-interest" value="0"/>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend onClick={ toggleHRA }>HRA Exemptions <span id="arrow-hra">&#9658;</span></legend>
                    <div id="hraFields" class="collapsed">
                        <div class="hra-input">
                            <label for="hra-rent-paid">Rent Paid:</label>
                            <input type="number" id="hra-rent-paid" name="hra-rent-paid" value="0"/>
                        </div>

                        <div class="hra-input">
                            <label for="hra-exemption">Exemption Amount:</label>
                            <input type="number" id="hra-exemption" name="hra-exemption" value="0"/>
                        </div>

                        <div class="hra-input">
                            <label for="hra-months">Months Eligible:</label>
                            <input type="number" id="hra-months" name="hra-months" value="0"/>
                        </div>
                    </div>
                </fieldset>
                <button class="calc-button" type="submit">Calculate</button>
            </form>
        </div> 
        </div>
    </>
  )
}

export default HomePage