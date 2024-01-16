import Button from "../Button";
export default function MailCTA(){

    const copyToClipboard =()=> navigator.clipboard.writeText('cristian.salgado@gmail.com').then(function(){}, function(err) {});
  
    return(
        <div className='flex justify-end gap-4 items-end py-5'>
    
        <span className='border-b mail'>cristian.salgado@gmail.com</span>
        <Button handler={copyToClipboard}>Copy</Button>
        <Button>Send</Button>

        </div>
    )
}