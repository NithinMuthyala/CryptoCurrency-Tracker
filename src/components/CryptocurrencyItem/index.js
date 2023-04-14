import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurr} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCurr

  return (
    <li className="currency-item">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="curr-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
