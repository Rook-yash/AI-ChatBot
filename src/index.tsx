import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css'
import { error } from 'console';
import App from './App';

const root = document.querySelector('.root') ;
let base ;

if(!root){
  throw new Error('something went wrong');
}
else{
  base = createRoot(root);
}

base.render(
  <React.StrictMode>
    <div className='w-screen bg-zinc-100 dark:bg-zinc-900 h-dvh sm:h-screen transition ease-in-out '>
      <App />
    </div>
  </React.StrictMode>
)

