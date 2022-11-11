import { useState } from 'react'
const StatisticLine = (props) => {

  return (<>
    <td>{props.text}</td><td> {props.value}</td>
  </>)
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const statisAverage = () => {
    const avg = (good - bad) / (good + neutral + bad)

    return avg
  }
  const statisPositive = () => {
    const positive = good / (good + neutral + bad) * 100

    return positive
  }

  if (good + neutral + bad === 0) {
    return (
      <div>

        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
      <tr>
      <td><StatisticLine text="good" value={good} /></td> 
      </tr>
      
      <tr><td><StatisticLine text="neutral" value={neutral} /></td></tr>
      <tr><td><StatisticLine text="bad" value={bad} /></td></tr>
      <tr><td>average</td> <td>{statisAverage()}</td></tr>
      <tr><td>positive</td> <td>{statisPositive()}%</td></tr>
     
      </table>
      </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }




  return (
    <div>
      <h3>Give feedback</h3>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h3>statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App