import './App.css'
import CardWork from './components/CardWork';
import Footer from './components/Footer';
import Header from './components/Header';
import MailCTA from './components/MailCTA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import FormacionCard from './components/FormacionCard';
export default function App() {


  return (

    <div className=' relative'>
    <div className='container mx-auto h-auto md:h-screen min-h-600'>
      
      <Header/>

      <MailCTA/>

      <div className='py-5' id='yo'>
        <p>Hola! me llamo</p>
        <h1 className='text-6xl py-4' style={{'color':'#2d2d2d'}}>Cristian Salgado</h1>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="70" height="4" fill="#2D2D2D"/>
        </svg>
      </div>
      <p>
         Soy un desarrollador web enfocado en Frontend, creo sitios responsives y adaptables a cualquier dispositivo, creando interfacez 
      </p>
      
    </div>
    <div className='my-10 py-20' style={{backgroundColor:"#2d2d2d"}}>
      <div className='container'>
        <div className='pb-5'>
          
          <h1 className='text-6xl py-4' style={{'color':'#fff'}}>Habilidades</h1>
          <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#fff"/>
          </svg>
        </div>

      <ul style={{color:'#fff'}}>
        <li><strong>Responsive desing y pixel perfect</strong> en maquetación web.</li>
        <li>Creacion de aplicaciones SPA, escalables y mantenibles con <strong>React js.</strong></li>
        <li>Solidos conocimientos en <strong>Javascript</strong>, <strong>CSS</strong>, <strong>HTML</strong>. + <strong>jQuery</strong>, <strong>Bootstrap</strong>, <strong>Tailwind</strong>.</li>
        <li>Utilizacion y experiencia en varias librerias de Javascript.</li>
        <li>CMS <strong>Wordpress</strong> para creación de blogs, temas perzonalizados y sitios customizables.</li>
        <li>Conocimiento de <strong>SEO</strong> y estrategias de posicionamiento web; Generando una solida estructura semantica y amigable con los motores de busqueda.</li>
      </ul>
      </div>
    </div>


    <div className='mt-10 pt-20'>

      <div className='container'>
        <h2 className='text-6xl py-4' style={{'color':'#2d2d2d'}}>Experiencia</h2>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#2D2D2D"/>
        </svg>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis magna. Turpis massa tincidunt dui ut ornare lectus sit amet est. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Arcu dui vivamus arcu felis bibendum. Sollicitudin ac orci phasellus egestas. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Diam sollicitudin tempor id eu nisl nunc. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Quis lectus nulla at volutpat diam ut venenatis tellus.
      </p>
      
      </div>
    </div>
    
    <div className='b-10 pt-20' style={{backgroundColor:"#2d2d2d"}}>
      
      <div className='container my-20 py-20'>
        <h2 className='text-6xl py-4' style={{'color':'#fff'}}>Formación</h2>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#fff"/>
        </svg>
       
       <div>
        <FormacionCard/>
       </div>
      
      </div>
     </div>


    <Footer/>


      <div className='fixed mx-auto bottom-0 flex justify-end  p-0  container' style={{transform: "translate(-50%, -50%)"}}>
        <a href="/cristian_salgado.pdf" className='ms-auto'  download style={{backgroundColor:"#fff", borderRadius:"10px"}}>
          <button><FontAwesomeIcon className='text-5xl p-2' style={{color:"#2d2d2d"}} icon={faFileArrowDown} /></button>
        
        </a>
    
      </div>
    
    </div>
    
    
  )
}
