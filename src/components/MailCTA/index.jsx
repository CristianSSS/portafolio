import Button from "../Button";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy,faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function MailCTA(){

    const [copy, setCopy] = useState(false);

    const timerCopyMenssage=()=>{
        setTimeout(function(){
            setCopy(false);
        }, 1000)
    }

    const copyToClipboard =()=> navigator.clipboard.writeText('cristian.salgado4756@gmail.com').then(function(){
        setCopy(true);
        timerCopyMenssage();
    }, function(err) {});
  
    return(
        <div className='flex justify-end gap-3 items-end py-5'>
    
        <span className='border-b mail'>cristian.salgado4756@gmail.com</span>
        <Button classNameAdd="w-14" copyStatus={copy} handler={copyToClipboard}><FontAwesomeIcon icon={faCopy} /></Button>
        <a href="mailto:correo@ejemplo.com" className="w-14 btn flex justify-center items-center self-stretch" ><FontAwesomeIcon icon={faEnvelope} /></a>

        </div>
    )
}