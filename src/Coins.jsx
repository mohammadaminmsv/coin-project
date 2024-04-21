import React, { useEffect, useState } from 'react'
import TableCoin from './TableCoin';
import SearchCoin from './SearchCoin';
import Chart from './Chart';



const Coins = () => {
const [coins , setCoins] = useState([])
const [loading , setLoading] = useState(true)
const [page , setPage] = useState(1)



useEffect(()=>{
    async function sync() {
        const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-B2SoVWGHDdc4c2vtoDoVt1b6'}};
        const fetch_data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`, options)
        const get_data = await fetch_data.json()
        setCoins(get_data)
        setLoading(false)
        
    }

    sync();
},[coins , page])

  return (
    <div className='flex flex-col items-center text-center mb-[200pt] '>
    <SearchCoin/>
    <br />
    <br />
        <table className='border border-black w-3/5 bg-slate-100 items-center'>
            <thead className='border-b border-black'>
                <tr>
                    <th className='border-e border-black'>coin</th>
                    <th className='border-e border-black px-10'>name</th>
                    <th className='border-e border-black px-10'>price</th>
                    <th className='border-e border-black px-10'>24h</th>
                    <th className='border-e border-black px-10'>24 volume</th>
                </tr>
            </thead>
            <TableCoin coins={coins} isloading={loading}/>
            
        </table>
        <div className='flex flex-row space-x-4 mt-10'>
    <button className=' bg-slate-200 w-10 rounded-md' onClick={e =>{console.log(page), setPage(e.target.value)}} value={1}>1</button>
    <button className=' bg-slate-200 w-10 rounded-md' onClick={e =>{setPage(e.target.value)}} value={2}>2</button>
    <button className=' bg-slate-200 w-10 rounded-md' onClick={e =>{setPage(e.target.value)}} value={3}>3</button>
    <button className=' bg-slate-200 w-10 rounded-md' onClick={e =>{setPage(e.target.value)}} value={4}>4</button>
    </div>
    </div>
  )
}

export default Coins