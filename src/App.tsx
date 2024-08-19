import React from 'react';
import Sugg from './Suggestion'
import Chat from './Chat'
import Info from './Info'
import Chat2 from './chat2'

export default function App(){

    const [darkk , setDarkk] = React.useState<string>('dark');

    function scheme(){
        setDarkk((prev : any) => {
            return prev === 'light' ? 'dark' : 'light';
        })
    }

    React.useEffect(() => {
        localStorage.setItem('color' , darkk);
        if(darkk === 'dark'){
            window.document.documentElement.classList.add('dark');
        }
        else{
            window.document.documentElement.classList.remove('dark');
        }
    },[darkk]);

    const[show , setShow] = React.useState<boolean>(false);

    function showing(){
        if(val || up){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    const [val , setVal] = React.useState<any>('')

    function changeval(event:{ target: HTMLInputElement; }){
        setVal(event.target.value)
    }
    const[ques , setQues] = React.useState<any>('')

    function questions(){
        setQues(val);
        setVal('');
        localStorage.setItem('anim' , 'yes');
    }
    function trash():void{
        setVal('');
    }

    const[up , setUp] = React.useState(localStorage.getItem('ques'))

    function uping(){
        setUp(localStorage.getItem('ques'))
    }
    React.useEffect(() => {
        localStorage.setItem('ques' , '');
    },[up])

    function questions2(){
        setQues(up);
        setVal('');
        localStorage.setItem('anim' , 'yes');
    }

    const [traash , setTraash] = React.useState<boolean>(false)
    function trash2(){
        setUp('');
        setTraash((prev) => {
            return !prev
        })
    }
    React.useEffect(() => {
        setTraash(false)
    },[traash]);


    if(!show){
        return(
            <div className='flex flex-col justify-between w-full h-dvh sm:w-5/6 m-auto p-4 sm:p-2 '>
                <div className='flex flex-col gap-2 w-full'>
                    <h1 className='text-6xl sm:text-7xl text-black dark:text-white sm:mt-10'>Hello, there</h1>
                    <p className='text-2xl text-black dark:text-white'>How can I help you today?</p>
                    <div className='flex flex-col mt-8 sm:mt-6' >
                        <p className='text-lg text-green-600 dark:text-green-400'>Small Trivia on General Knowledge :</p>
                        <Sugg 
                            fun = {uping}
                            traash = {traash}
                            scheme = {scheme}
                            dark = {darkk}
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <Chat 
                        fun = {showing}
                        val = {val}
                        fun2 = {changeval}
                        fun3 = {questions}
                        fun4 = {trash}
                        copyy = {up}
                        fun5 = {questions2}
                        fun6 = {trash2}
                        scheme = {scheme}
                        dark = {darkk}
                    />
                    <p className='text-black dark:text-zinc-400 m-auto'>&copy;Copyright Yashpreet</p>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='flex flex-col justify-between w-full h-dvh sm:w-5/6 m-auto p-4 sm:p-2'>
                <div className='h-lvh overflow-y-scroll no-scrollbar '>
                    <Info 
                        ques = {ques}
                        render = {ques}
                        dark = {darkk}
                    />
                </div>
                <div className='w-full'>
                    <Chat2 
                        val = {val}
                        fun2 = {changeval}
                        fun3 = {questions}
                        fun4 = {trash}
                        scheme = {scheme}
                        dark = {darkk}
                    />
                </div>
        </div>
        )
    }
}