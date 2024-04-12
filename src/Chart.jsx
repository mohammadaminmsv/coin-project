import React ,{useContext, useState} from 'react'
import { userContext } from './TableCoin'
import "./App.css"

const Chart = ({jsont,setfinish}) => {

const handlefinish=()=>{
  setfinish(false)
}



  return (
    <div>
        <button className=' bg-slate-300 px-5 py-3 mt-2 mr-10 rounded-lg fixed right-0 top-0' onClick={handlefinish}>close</button>
        <div className='mt-48'>
       <div>These figures illustrate the daily closing balance of your coins and reflect the natural volatility present in the cryptocurrency markets. Despite the day-to-day changes, we continue to employ strategies aimed at optimizing your portfolio's performance while mitigating risk where possible.

Should you have any questions about these balances or wish to discuss our strategies in more detail, please do not hesitate to contact me directly. Your satisfaction and confidence in our management of your investments remain our highest priority.

Thank you for choosing us to manage your cryptocurrency assets. We look forward to continuing to serve your investment needs.</div>
       
        <div className='ml-10 flex flex-col space-y-5 mt-20'>{Object.entries(jsont).map(([key, value]) => {
  return(<div className='flex-flex-row'>
    day = 1<li>{key} is {value[0][0]} - {value[0][1]}</li>
    day = 2<li>{key} is {value[1][0]} - {value[1][1]}</li>
    day = 3<li>{key} is {value[2][0]} - {value[2][1]}</li>
    </div>);
})}</div> 

    </div>
    </div>
  )
}

export default Chart