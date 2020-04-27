// adapted from: https://pusher.com/tutorials/consume-restful-api-react

import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

const JokeResults = ({ jokes }) => {
  if (jokes.length == 0) {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <center><h2>Jokes</h2></center>
      {jokes.map((joke, index) => (
        (index <= 20) ?
        <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{joke.text}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{joke.score}</h6>
              {joke.categories.map((cat) => <Label>
                {cat}
              </Label>)}
          </div>
        </div>
        <br></br>
        </div> : null
      ))}
    </React.Fragment>
  )
};

export default JokeResults