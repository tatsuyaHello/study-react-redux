import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "tatsuya", age: 10 },
    { name: "hanao", age: 20 }
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

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
