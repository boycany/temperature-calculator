import React from 'react'
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "./functions"

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ 
      scale: 'c', 
      temperature: temperature
    })
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature: temperature
    })
  }

  render(){
    const { scale, temperature } = this.state
    // console.log("state scale: ", scale, "state temp: ", temperature);

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        {
          celsius >= 100 && <div className='warn'>The water would boil.</div>
        }
        <TemperatureInput 
          scale="c"
          onTemperatureChange={this.handleCelsiusChange}
          temperature={celsius}
        />
        <TemperatureInput 
          scale="f"
          onTemperatureChange={this.handleFahrenheitChange}
          temperature={fahrenheit}
        />
      </div>
    )
  }
}

export default Calculator