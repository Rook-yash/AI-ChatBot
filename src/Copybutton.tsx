import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons';

type sel = {
    fun : any,
    id : number ,
    on : boolean,
    fun2 : any,
    scheme : any ,
    dark  :string
}

export default function Copybutton(props : sel){
    async function major(){
        await props.fun();
        await props.fun2();
    }
    return(
        <button onClick={major}className='flex justify-end p-1 border-solid border-2 w-fit rounded cursor-pointer transition ease-in-out hover:scale-105' style={{borderColor : props.on ? props.dark==='dark'?'#4ade80' : '#16a34a': props.dark === 'dark' ? 'gray' : '#000000'}}>
            <FontAwesomeIcon icon={faCopy} style={{color: props.on? props.dark==='dark'?'#4ade80' : '#16a34a' : props.dark === 'dark' ? "#ffffff" : "#000000"}} className='transition ease-in-out hover:scale-105'/>
        </button>
    )
}