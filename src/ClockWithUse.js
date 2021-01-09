// Functional Component
import React, { useState, useEffect  } from 'react'
import styled from "styled-components"
import media from "styled-media-query"

const Text = styled.p`
font-size: 40px;
color: ${(props) => props.color};

${media.greaterThan("large")`
  font-size: 20px;
  color: deepskyblue;
`}
`

const ClockWithUse = props => {
    //constractor [getter, setter] = default
    const [count, setCount] = useState(0)
    const [fontColor, setFontColor] = useState('deepskyblue')
    //function
    const countUp = () => setCount(count + 1)
    const updateFontColor = () => setFontColor('red')

    useEffect(() => {
      console.log('%cuseEffect', 'color:skyblue; font-size: 20px;')
      if (count >= 10) {
        updateFontColor();
      }
    }, [count])

    return (
        <React.Fragment>
          <h1>Hello, world!</h1>
          <h2>It is {props.date.toLocaleTimeString()}.</h2>
          {/* function */}
          <button onClick={countUp}>Count UP</button>
          {/* getter */}
          <Text color={fontColor}>Count {count}</Text>
        </React.Fragment>
    )
}

export default ClockWithUse

ClockWithUse.defaultProps = {
  date: new Date()
}