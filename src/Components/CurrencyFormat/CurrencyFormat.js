import React from 'react'
import numeral from 'numeral'


const CurrencyFormat = ({ amount }) => {
    const FormattedAmout = numeral(amount).format("$0,0.00")
return <div> (FormattedAmount) </div>
}
    

export default CurrencyFormat



