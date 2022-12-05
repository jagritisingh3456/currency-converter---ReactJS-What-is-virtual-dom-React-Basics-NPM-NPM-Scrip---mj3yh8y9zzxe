import React from "react";

function Converter(props) {
  // const firstData = props.data.filter((rate) => {
  //   return rate !== props.secondInput;
  // });
  // const secData = props.data.filter((rate) => {
  //   return rate !== props.firstInput;
  // });
  return (
    <div className="conveter_container">
      <p>
        {props.fromAmount} {props.firstInput} is eqauls to
      </p>
      <h3>
        {props.toAmount} {props.secondInput}
      </h3>
      <div>
        <select value={props.firstInput} onChange={props.handleFromCurreny}>
          {props.data
            .filter((I) => I !== props.secondInput)
            .map((rate, index) => {
              return (
                <option key={index} value={rate}>
                  {rate}
                </option>
              );
            })}
        </select>
        <input
          type="number"
          value={props.fromAmount}
          onChange={props.onMoneyChangeFrom}
          min="0"
        />
      </div>
      <div>
        <select value={props.secondInput} onChange={props.handleToCurrency}>
          {props.data
            .filter((I) => I !== props.firstInput)
            .map((rate, index) => {
              return (
                <option key={index} value={rate}>
                  {rate}
                </option>
              );
            })}
        </select>
        <input
          type="number"
          value={props.toAmount}
          onChange={props.onMoneyChangeTo}
          min="0"
        />
      </div>
    </div>
  );
}
export default Converter;
