import React from 'react';
import Copybutton from './Copybutton';

type prop = {
    fun: (arg: any) => void;
    traash: boolean;
    scheme: any;
    dark: string;
};

type QuestionItem = {
    ques: string;
    id: number;
    on: boolean;
};


export default function Arr(props : prop){

    const arr = localStorage.getItem('ques_arr');
    const [select , setSelect] = React.useState<QuestionItem[]>([]);

    React.useEffect(()=>{
        if(arr){
            try {
                let parsedArr = JSON.parse(arr);
                if (Array.isArray(parsedArr)) {
                    parsedArr = parsedArr.map((item : string , index : number) => {
                        return {
                            ques : item ,
                            id : index ,
                            on : false
                        }
                    })
                    setSelect(parsedArr);
                } else {
                    console.error('Unexpected data format in localStorage');
                }
            } catch (error) {
                console.error('Error parsing localStorage item:', error);
            }
        }
    },[arr])

    function changing(id : number){
        setSelect((prev : any) => {
             return prev.map((item : any) => {
                if(item.id === id){
                    if(!item.on){
                        localStorage.setItem('ques' , item.ques);
                    }
                    return {
                        ...item ,
                        on : !item.on
                    }
                }
                else{
                    return{
                        ...item,
                        on : false
                    }
                }
            })
        })
    }
    
    React.useEffect(() => {
        if(props.traash){
            setSelect((prev : any) => {
                return prev.map((item : any) => {
                    return {
                        ...item ,
                        on : false
                    }
                })
            })
        }
    },[props.traash])


    const new_arr : any = select.map((item : any, index : number) => {
        return (
            <div className='flex flex-col justify-between items-end min-w-60 max-w-60 p-2 min-h-40 rounded border-solid border-2 bg-zinc-200 dark:bg-zinc-800 dark:border-none transition ease-in-out hover:-translate-y-1' key={index}>
                    <p className='dark:text-white w-full'>{item.ques}</p>
                    <Copybutton 
                        fun = {() => {changing(item.id)}}
                        id = {item.id}
                        on = {item.on}
                        fun2 = {props.fun}
                        scheme = {props.scheme}
                        dark = {props.dark}
                    />
            </div>
        )
    })
    return(
        new_arr
    )

}