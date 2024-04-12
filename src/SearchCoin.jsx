import React , {useState , useEffect}from 'react'
import TableCoin from './TableCoin';

const SearchCoin = ({coins}) => {
    const [txtsearch , setTxtsearch] = useState('')
    const [searchitem,setSearchitem]=useState([])



    const handlershow =()=>{
      
      let resault =coins.filter((item)=>item.name === txtsearch)
      setSearchitem(resault)

      console.log(searchitem)
      console.log(resault)
    }
  return (
    <div className='mt-10'>
        <input className='border border-black w-96 text-center' type='text' placeholder='enter full id name to answer' value={txtsearch} onChange={(e)=> setTxtsearch(e.target.value)}/>
    <br />
    <button className='bg-slate-300 px-10 mt-3 rounded-md' onClick={handlershow}>search</button>
    </div>
  )
}

export default SearchCoin