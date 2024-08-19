import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSun ,faMoon} from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type prop = {
    val : string ,
    fun2 : any ,
    fun3 : any,
    fun4 : any,
    scheme : any,
    dark : any
}

export default function Chat2(props : prop){

    function major(){
        props.fun3();
    }
    return(
        <div className='flex gap-2 justify-center w-full my-2'>
            <input 
                type='text'
                placeholder='Enter a prompt here'
                className='px-3 py-2 w-10/12 rounded-lg bg-zinc-200 dark:bg-zinc-800 outline-none text-black dark:text-white'
                value = {props.val}
                onChange={props.fun2}
            />
            <div className='px-3.5 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer' onClick={major}>
                <FontAwesomeIcon icon={faPlay} style={{color: props.dark === 'dark' ? "#ffffff" : '#000000',}} className='transition ease-in-out hover:scale-110'/>
            </div>
            <div className='px-3 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer' onClick={props.fun4}>
                <FontAwesomeIcon icon={ faTrash } style={{color: props.dark === 'dark' ? "#ffffff" : '#000000',}} className='transition ease-in-out hover:scale-110' />
            </div>
            <div className='px-3 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer' onClick={props.scheme}>
                {props.dark === 'light' ? 
                    <FontAwesomeIcon icon={faMoon} className='transition ease-in-out hover:scale-110'/>
                :
                    <FontAwesomeIcon icon={ faSun } style={{color: "#FFD43B",}} className='transition ease-in-out hover:scale-110'/>
                }
            </div>
        </div>
    )
}

