import React from 'react';
import Arr from './Arr';

type prop = {
    fun : any,
    traash : boolean,
    scheme : any ,
    dark : string
}

export default function Suggestion(props : prop){

    const [update , setUpdate] = React.useState<boolean>(true)

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
        .then((data : any) => data.json())
        .then((data : any) => {
            let arr2 : any = [];
                data.results.map((ques : any , index : number) => {
                    arr2.push(ques.question.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&ldquo;/g,'"').replace(/&rsquo;/g,"'").replace(/&rdquo;/g,'"').replace(/&amp;/g,'&'))
                })   
            return arr2 ;
        })
        .then(arr2 => {localStorage.setItem('ques_arr' , JSON.stringify(arr2))})
        .then(arr2 => {setUpdate((prev) => !prev)})
        .catch(err => console.log(err));
    },[]);
    return(
        <div className='flex flex-row gap-4 overflow-x-scroll no-scrollbar py-2'>
            <Arr 
                fun = {props.fun}
                traash = {props.traash}
                scheme = {props.scheme}
                dark = {props.dark}
            />
        </div>
    )
}