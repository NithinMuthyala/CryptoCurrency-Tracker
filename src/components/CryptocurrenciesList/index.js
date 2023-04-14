import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: false}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: true})
  }

  renderCryptoData = () => {
    const {cryptoData} = this.state
    return (
      <div className="flex-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="image"
          />
        </div>
        <ul>
          <li className="item-heading">
            <p className="coinTextHeading">Coin Type</p>
            <div className="currency-container">
              <p className="usd-currency">USD</p>
              <p className="euro-currency">EURO</p>
            </div>
          </li>
          {cryptoData.map(eachCurr => (
            <CryptocurrencyItem key={eachCurr.id} eachCurr={eachCurr} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="render-loader-crypto">
        {isLoading ? (
          this.renderCryptoData()
        ) : (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
