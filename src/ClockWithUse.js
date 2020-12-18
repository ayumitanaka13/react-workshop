// Functional Component

import React, { useState, useEffect  } from 'react'

const ClockWithUse = props => {
    //constractor [getter, setter] = default
    const [count, setCount] = useState(0)
    //function
    const countUp = () => setCount(count + 1)
    return (
        <React.Fragment>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
        {/* function */}
        <button onClick={countUp}>Count UP</button>
        {/* getter */}
        <p>Count {count}</p>
        </React.Fragment>
    )
}

export default ClockWithUse

ClockWithUse.defaultProps = {
  date: new Date()
}