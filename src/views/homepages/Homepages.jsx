import {React,useState,useEffect} from 'react'
import { Banner } from '../../components'

export default function Homepages() {
  const [cartegories,setCartegories] =useState([])
  const[title,setTitle] =useState('')
  useEffect(() =>{
     fetch('https://api.predic8.de:443/shop/categories/',{
      method:'GET'
     })
    .then(res => res.json())
    .then(cartegories =>{
      setCartegories(cartegories)
    })
    .catch((error) =>{
      console.log('Error', error);
    })
  },[])
  return (
    <div className='home'>
      <Banner />
      <div className="container">
        {/* cartegories */}
        <ul>
          {cartegories.map(cartegori =>(
            <li key={cartegori.id}>{cartegori.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
