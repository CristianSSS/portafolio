import MailCTA from "../MailCTA";
import SocialMedia from "../SocialMedia";


export default function Footer(){
    return(
        <footer className='py-5'>

            <address className='flex justify-center items-center gap-20'>
                <MailCTA/>
                <SocialMedia/>
            </address>

            <p className='text-center'>Desarrollado con ❤️ por Cristian Salgado utilizando React | Tailwind</p>

        </footer>
    )
}