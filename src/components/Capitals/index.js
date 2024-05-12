import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {chosenCapitalId: countryAndCapitalsList[0].id}

  changeValue = event => {
    this.setState({chosenCapitalId: event.target.value})
  }

  render() {
    const {chosenCapitalId} = this.state
    const selectedCapital = countryAndCapitalsList.find(
      each => each.id === chosenCapitalId,
    )
    console.log(selectedCapital)
    return (
      <div className="app-container">
        <div className="capitalsCard">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="selection">
            <select
              onChange={this.changeValue}
              id="capitals"
              className="dragAndDrop"
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p htmlFor="capitals" className="question">
              is capital of which country
            </p>
          </div>
          <p className="country">{selectedCapital.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
