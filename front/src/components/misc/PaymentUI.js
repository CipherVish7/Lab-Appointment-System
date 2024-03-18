import React from 'react'
import './paymentUi.css'

function PaymentUI() {
  return (
    <center>
   <form class="credit-card ">
    <div class="form-header">
      <h4 class="title">Credit Card Details</h4>
    </div>
    <div class="form-body">
      <input class="card-number" type="text" placeholder="Card Number"/>
      <div class="date-field">
        <div class="month">
          <select name="Month">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <div class="year">
          <select name="Year">
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
      </div>
      <div class="card-verification">
        <div class="cvv-input">
          <input type="text" placeholder="cvv"/>
        </div>
        <div class="cvv-details">
          <p>3 or 4 digits usually found on the signature strip</p>
        </div>
      </div>
      <div class='price'>
          Price for Appoimt Rs:400
        </div>
    </div>
  </form>
  </center>
  )
}

export default PaymentUI