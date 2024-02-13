import MailCTA from "../MailCTA";
import SocialMedia from "../SocialMedia";


export default function Footer(){
    return(
        <footer className='py-10'>

            <address className='flex justify-center items-center gap-20 my-20'>
                <MailCTA/>
                <SocialMedia/>
            </address>

            <p className='text-center'>Desarrollado con ❤️ por Cristian Salgado utilizando React | Tailwind</p>
            <div className="flex justify-center">
                <a className="mx-auto z-50 relative color-sky underline underline-offset-4" href="https://github.com/CristianSSS/portafolio" target="_blank">Repositorio del proyecto</a>
            </div>
           
        </footer>
    )
}