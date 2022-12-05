import React, { useState, useEffect } from "react"; 
 export default function CurrencyConverter() { 
     let currencies = ['CAD', 'HKD', 'CZK', 'INR', 'CHF', 'EUR', 'JPY', 'USD', 'AUD']; 
     const [baseCurrency, setBaseCurrency] = useState('USD') 
     const [otherCurrency, setotherCurrency] = useState('INR') 
     const [baseValue, setbaseValue] = useState(0) 
     const [conversionRate, setConversionRate] = useState(0) 
     const [convertedValue, setConvertedValue] = useState(0) 
     useEffect(() => { 
         fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`) 
             .then(res => res.json()) 
             .then(data => { 
                 setConversionRate(data.rates[otherCurrency]) 
             }) 
     }, [baseCurrency]) 
  
  
     return ( 
         <div className="row mt-5">  <div className="col-md-4 offset-md-4 border p-5"> 
             <h1>Currency Converter</h1> 
             <form> 
                 <div className="form-row mt-5"> 
                     <div className="col-3"> 
                         <select className="form-control baseCurrency " onChange={(e) => { setBaseCurrency(e.target.value) }} name='baseCurrency' value={baseCurrency}> 
                             {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)} 
                         </select> 
                     </div> 
                     <div className="col-9"> 
                         <input className='form-control' name='baseCurrency' type='number' value={baseValue} onChange={(e) => { if (+e.target.value >= 0) { setbaseValue(e.target.value); setConvertedValue(Math.round((e.target.value * conversionRate) * 100) / 100) } }}></input> 
                     </div> 
  
                 </div> 
                 <div className="form-row mt-2"> 
                     <div className="col-3"> 
                         <select className='form-control otherCurrency' onChange={(e) => { setotherCurrency(e.target.value) }} name='otherCurrency' value={otherCurrency}> 
                             {currencies.map(currency => baseCurrency !== currency ? <option key={currency} value={currency}>{currency}</option> : undefined)} 
                         </select> 
                     </div> 
                     <div className="col-9"> 
                         <input name='form-control' className='form-control' type='number' onChange={(e) => { if (+e.target.value >= 0) { setConvertedValue(e.target.value); setbaseValue(Math.round((e.target.value / conversionRate) * 100) / 100) } }} name='otherCurrency' value={convertedValue}></input> 
                     </div> 
                 </div> 
             </form> 
         </div> 
         </div> 
  
     ) 
 }




// import "./styles.css";
// import Converter from "./CurrencyConverter";
// import React, { useEffect, useRef, useState } from "react";

// export default function App() {
//   const [firstInput, setFirstInput] = useState("USD");
//   const [secondInput, setSecondInput] = useState("INR");
//   const [data, setData] = useState([]);
//   const [money, setMoney] = useState(0);
//   const [moneyFrom, setMoneyFrom] = useState(true);
//   const [exchangeRate, setExchangeRate] = useState();
//   function useFirstPrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }
//   function useSecondPrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }

//   useEffect(() => {
//     fetch(
//       `https://v6.exchangerate-api.com/v6/7cc8565835b9b47e14685f57/latest/inr`
//     )
//       .then((response) => response.json())
//       .then((responsedata) => {
//         // const firstCurr = Object.keys(responsedata.conversion_rates)[145];
//         setData([...Object.keys(responsedata.conversion_rates)]);
//         console.log([...Object.keys(responsedata.conversion_rates)]);
//         // setFirstInput(responsedata.base_code);
//         // setSecondInput(Object.keys(responsedata.conversion_rates)[145]);
//         // setExchangeRate(responsedata.conversion_rates[firstCurr]);
//       });
//   }, []);
//   const first = useFirstPrevious(firstInput);
//   const second = useSecondPrevious(secondInput);
//   useEffect(() => {
//     // if (firstInput === secondInput) {
//     //   setFirstInput(second);
//     //   setSecondInput(first);
//     // }
//     // if (firstInput === secondInput) {
//     //   setFirstInput(second);
//     //   setSecondInput(first);
//     // }
//     if (firstInput != null && secondInput != null) {
//       fetch(
//         `https://v6.exchangerate-api.com/v6/7cc8565835b9b47e14685f57/pair/${firstInput}/${secondInput}`
//       )
//         .then((response) => response.json())
//         .then((responseData) => {
//           setExchangeRate(responseData.conversion_rate);
//         });
//     }
//   }, [firstInput, secondInput, first, second]);
//   let toAmount = 0,
//     fromAmount = 1;
//   if (moneyFrom) {
//     fromAmount = money;
//     toAmount = fromAmount * exchangeRate || 0;
//     toAmount = toAmount.toFixed(2);
//   } else {
//     toAmount = money;
//     fromAmount = toAmount / exchangeRate;
//     fromAmount = fromAmount.toFixed(2);
//   }

//   function onMoneyChangeFrom(e) {
//     const value = e.target.value;
//     setMoney(value);
//     setMoneyFrom(true);
//   }
//   function onMoneyChangeTo(e) {
//     const value = e.target.value;
//     setMoney(value);
//     setMoneyFrom(false);
//   }
//   function handleFromCurrency(e) {
//     if (firstInput === secondInput) {
//       setFirstInput(second);
//     } else setFirstInput(e.target.value);
//   }
//   function handleToCurrency(e) {
//     if (firstInput === secondInput) {
//       setSecondInput(first);
//     } else setSecondInput(e.target.value);
//   }

//   return (
//     <div className="App">
//       <h1>Currency Converter</h1>
//       <Converter
//         data={data}
//         money={money}
//         onMoneyChangeFrom={onMoneyChangeFrom}
//         onMoneyChangeTo={onMoneyChangeTo}
//         firstInput={firstInput}
//         secondInput={secondInput}
//         toAmount={toAmount}
//         fromAmount={fromAmount}
//         handleFromCurreny={handleFromCurrency}
//         handleToCurrency={handleToCurrency}
//       />
//     </div>
//   );
// }

// import React  from "react";
// import CurrencyConverter from './CurrencyConverter';
// import '../styles/App.css';

// const App = () => {
//   return (
//     <div id="main">
//       <CurrencyConverter/>
//     </div>
//   )
// }

// export default App;
