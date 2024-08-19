import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSun ,faMoon} from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type prop = {
    val : string ,
    fun : any ,
    fun2 : any ,
    fun3 : any,
    fun4 : any,
    copyy : any,
    fun5  :any ,
    fun6 : any ,
    scheme : any,
    dark : string
}

export default function Chat(props : prop){
    async function major(){
        await props.fun();
        await props.fun3();
    }
    async function major2(){
        await props.fun();
        await props.fun5();
    }
    return(
        <div className='flex gap-2 justify-center w-full my-2'>
            <input 
                type='text'
                placeholder='Enter a prompt here'
                className='px-3 py-2 w-10/12 rounded-lg bg-zinc-200 dark:bg-zinc-800 outline-none text-black dark:text-white'
                value = {props.copyy ? props.copyy : props.val}
                onChange={props.fun2}
            />
            <div className='px-3.5 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer' onClick={props.copyy ? major2 : major}>
                <FontAwesomeIcon icon={faPlay} style={{color: props.dark === 'dark' ? "#ffffff" : '#000000'}} className='transition ease-in-out hover:scale-110'/>
            </div>
            <div className='px-3 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer' onClick={props.copyy ? props.fun6 : props.fun4}>
                <FontAwesomeIcon icon={ faTrash } style={{color:  props.dark === 'dark' ? "#ffffff" : '#000000',}} className='transition ease-in-out hover:scale-110' />
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

