import Button from "../Button";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

export default function MailCTA(){

    const [copy, setCopy] = useState(false);

    const timerCopyMenssage=()=>{
        setTimeout(function(){
            setCopy(false);
        }, 1000)
    }

    const copyToClipboard =()=> navigator.clipboard.writeText('cristian.salgado@gmail.com').then(function(){
        setCopy(true);
        timerCopyMenssage();
    }, function(err) {});
  
    return(
        <div className='flex justify-end gap-4 items-end py-5'>
    
        <span className='border-b mail'>cristian.salgado@gmail.com</span>
        <Button copyStatus={copy} handler={copyToClipboard}><FontAwesomeIcon icon={faCopy} /></Button>
        <Button>Send</Button>

        </div>
    )
}