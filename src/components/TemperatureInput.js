import React from "react";

const TemperatureInput = ({scale, temperature, onTemperatureChange}) => {
    const scaleName = {
        c : 'Celsius',
        f: 'Fahrenheit'
    };

    return(
        <fieldset>
            <legend>Enter temperture in {scaleName[scale]}:</legend>
            <input type="text"
             value={temperature}
            onChange={(e) => onTemperatureChange(e.target.value)}/>
        </fieldset>
    );

}

export default TemperatureInput