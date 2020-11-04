import React, { Component } from 'react';
import Stock from '../components/Stock'


//Stocks are passed in through props and mapped through to grab values.
const StockContainer = ({stocks, handleClick})=> {

   return (
      <div>
        <h2>Stocks</h2>
        { stocks.map(stock => <Stock key = {stock.id} stock = {stock} handleClick = {handleClick}/>) }
      </div>
    );
  }



export default StockContainer;
