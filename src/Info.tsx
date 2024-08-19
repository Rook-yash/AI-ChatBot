import React from 'react';
import chat from './chatbot (2).png'
import user from './user.png'
import user1 from './user (1).png'
import chat2 from './chatbot (3).png'

type prop = {
    ques : string,
    render : string,
    dark : string
} 
export default function Info(props : prop){
    const [arr , setArr] = React.useState<any>([])

    React.useEffect(() => {
        if(props.ques === ''){
            return;
        }
        fetch('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyC70bangCkRkjA5bluf99thFIpG98C4c8Y' ,{
            method : 'POST',
            body : JSON.stringify({
                "contents": [
                    {
                        "parts": [
                            {
                                "text": props.ques
                            }
                        ]
                    }
                ]
            })
        })
        .then(data => data.json())
        .then(data => {
            let arr2 : any = []
            arr2.push({
                ques : props.ques ,
                ans : data.candidates[0].content.parts[0].text
            });
            setArr((prev : any) => {
                localStorage.setItem('anim' , 'no'); 
                return [...prev,...arr2]
            })
            return data;
        })
    },[props.render])

    let new_arr = arr.map((item : any , index : number) => {
        return (
            <div className='flex flex-col gap-4 border-dashed border-b-2 border-gray-400 dark:border-zinc-700 pb-4' key = {index}>
                <div className='flex items-start gap-3' >
                    <img src={props.dark==='dark' ? user : user1} alt ='' className='w-5'/>
                    <p className='text-black dark:text-white'>{item.ques}</p>
                </div>
                <div className='flex items-start gap-4' >
                    <img src={props.dark==='dark' ? chat : chat2} alt='' className='w-4 pt-1'/>
                    <p className='text-black dark:text-white' style = {{whiteSpace: "pre-wrap"}}>{item.ans}</p>
                </div>
            </div>
        )
    }
    )
    if(localStorage.getItem('anim') === 'yes'  && props.ques){
        new_arr.push(
            <div className="rounded-md p-4 max-w-sm w-full pl-0" key="001">
            <div className="animate-pulse flex space-x-4">
                <div className='flex flex-col gap-4'>
                    <div className='w-5 h-5 rounded-full bg-slate-700'></div>
                    <div className='w-5 h-5 rounded-full bg-slate-700'></div>
                </div>
                <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-3"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                </div>
                </div>
            </div>
        </div>
        )
    }

    React.useEffect(() => {
        const obj = document.querySelector('.no-scrollbar');
        if(obj){
            obj.scrollTop = obj.scrollHeight
        } 
    },[new_arr])

    return( 
        <div className='flex flex-col gap-4 pt-4 sm:pt-6 transition'>
            {new_arr} 
        </div>                                                                                                                                                                                                                                                                                                                                                                                                  
    )
}