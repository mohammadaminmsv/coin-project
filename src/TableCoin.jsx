import React, { useContext,createContext, useState, useEffect } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import Chart from './Chart'


    export const userContext=createContext()


const TableCoin = ({coins , isloading }) => {

    const [jsont,setJsont]=useState([]) 
    const [id , setId] = useState("bitcoin")
    const[finish,setFinish]=useState(false)
  

    useEffect(()=>{
        const showhandler =async() =>{
            const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-B2SoVWGHDdc4c2vtoDoVt1b6'}};
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`, options)
        const jsonl = await res.json() 
       
        setJsont(jsonl)
        
    }
 
    showhandler()
    },[jsont,id])
 



  return (
    <>
    <tbody>
        {
       isloading ? 
        <InfinitySpin
    visible={true}
    width="200"
    color="#4fa94d"
    ariaLabel="infinity-spin-loading"
    
    />
    : 
    coins.map((item) => 
        <tr key={item.id}>
            <th className='border-b border-e border-black p-5'  onClick={()=>{setId(item.id) , setFinish(true)}} style={{display : "flex" , flexDirection : "column"}}>
                <img  src={item.image} style={{width :"50px"}} />
                <span>{item.symbol}</span>
            </th>
            <th className='border-b border-e border-black'>{item.name}</th>
            <th className='border-b border-e border-black'>{item.current_price}$</th>
            <th className='border-b border-e border-black' onClick={()=>console.log(coins)}>{item.price_change_24h}</th>
            <th className='border-b border-e border-black'>{item.price_change_percentage_24h}</th>
        </tr>)
            
        
    }


    

    </tbody>
    {finish&&<div className="fixed  inset-0 h-full  bg-gray-200 bg-opacity-10 backdrop-blur-md overflow-auto"><Chart jsont={jsont}  setfinish={setFinish}/></div>}
    </>
  )
}

export default TableCoin