import React from 'react'
import {useSelector} from 'react-redux'
import MoeCard from "../components/moe/MoeCard"

export function Home() {

    const moes = useSelector(state => state.rMoe.moes)
    
    
    return (
        <div>
            {moes.map((el,i)=><MoeCard key={i} moe={el}/>)}
        </div>
    )
}


