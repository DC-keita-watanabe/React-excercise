import React from "react";
import TemperatureInput from "./TemperatureInput";

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const convertTemperture = (temperture, convert) => {
    const inputTemp = parseFloat(temperture);
    if(isNaN(inputTemp)){
        return '';
    }
    const output = convert(inputTemp);
    const rounded = Math.round(output * 1000) / 1000;
    console.log(rounded);
    return rounded.toString();
}

const Calculater = () => {
    const [temperture, setTemperture] = React.useState('');
    const [scale, setScale] = React.useState('c');

    const handleCelsiusChange = (temperture) => {
        setTemperture(temperture);
        setScale('c');
    }

    const handleFahrenheitChange = (temperture) => {
        setTemperture(temperture);
        setScale('f');
    }

    const celsius = scale === 'f' ? convertTemperture(temperture, toCelsius) : temperture;
    const fahrenheit = scale === 'c' ? convertTemperture(temperture, toFahrenheit) : temperture;
    return(
        <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
      </div>
    )
}

export default Calculater