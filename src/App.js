import React from 'react';

const App = () => {
  const profiles = [
    { name: "tatsuya", age: 10 },
    { name: "hanao", age: 20 },
    { name: "no name"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>My name is {props.name}, and {props.age}</div>
}

User.defaultProps = {
  age: 1
}

export default App;
