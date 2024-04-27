import React , {useState , useEffect, createContext}from 'react'
import TableCoin from './TableCoin';
import axios from 'axios';

import Details from './Details';


const SearchCoin = () => {
    const [txtsearch , setTxtsearch] = useState('')
    const [list,setList]=useState()
    const [resault,setResault]=useState()
    const [id , setId] = useState("bitcoin")
    const[finish,setFinish]=useState(false)
    const [jsont,setJsont]=useState([]) 

useEffect(()=>{
  const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-B2SoVWGHDdc4c2vtoDoVt1b6'}}
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',options).then((res)=>{setList(res.data) })
  const showhandler =async() =>{
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-B2SoVWGHDdc4c2vtoDoVt1b6'}};
const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
const jsonl = await res.json() 

setJsont([jsonl])

}

showhandler()
},[list ,id])


    const handlershow =(e)=>{
      setTxtsearch(e.target.value)
      setResault(list.filter((item)=>item.name.toLowerCase() === txtsearch.toLowerCase()))
      setResault(list.filter((item)=>item.id.toLowerCase() === txtsearch.toLowerCase()))
      setResault(list.filter((item)=>item.id.toLowerCase().includes(txtsearch.toLowerCase()) ))
console.log(resault)
  
    }
  return (
    <div className='mt-10 flex flex-col items-center'> 
  

        <input className='border-2 border-black w-96 text-center rounded-lg' type='text' placeholder='enter full name' value={txtsearch} onChange={handlershow}/>
    <br />{txtsearch  &&  <div className='flex flex-col bg-slate-400 rounded-lg opacity-95 absolute w-96 mt-[27px] divide-y divide-solid divide-black'>
      {resault.slice(0,10).map((item)=>
      <div onClick={()=>{setFinish(true) ,setId(item.id) }} className='flex flex-row justify-center space-x-5 py-5 content-center items-center hover:bg-slate-700 hover:cursor-pointer'>
        <img className="rounded-lg h-[29pt]" src={item.image} style={{width :"50px"}} />
        <div>{item.id}</div>
        </div>)}
        </div>  }
        {finish&&<div className="fixed  inset-0 h-full  bg-gray-200 bg-opacity-10 backdrop-blur-md overflow-auto"><Details jsont={jsont} id={id} setFinish={setFinish}/></div>}
    </div>
    
 
   
  )
}

export default SearchCoin