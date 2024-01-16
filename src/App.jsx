import './App.css'
import CardWork from './components/CardWork';
import Footer from './components/Footer';
import Header from './components/Header';
import MailCTA from './components/MailCTA';
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis magna. Turpis massa tincidunt dui ut ornare lectus sit amet est. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Arcu dui vivamus arcu felis bibendum. Sollicitudin ac orci phasellus egestas. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Diam sollicitudin tempor id eu nisl nunc. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Quis lectus nulla at volutpat diam ut venenatis tellus.
      </p>
      
    </div>

    <div className='flex justify-center'>
      <CardWork/>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#2d2d2d" fill-opacity="1" d="M0,256L0,64L205.7,64L205.7,96L411.4,96L411.4,192L617.1,192L617.1,160L822.9,160L822.9,128L1028.6,128L1028.6,192L1234.3,192L1234.3,128L1440,128L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z"></path></svg></div>
    
    <div className='b-10 pt-20' style={{backgroundColor:"#2d2d2d"}}>
      
      <div className='container my-20'>
        <h2 className='text-6xl py-4' style={{'color':'#fff'}}>Formación</h2>
        <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="4" fill="#fff"/>
        </svg>
        <p style={{color:"#fff"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis magna. Turpis massa tincidunt dui ut ornare lectus sit amet est. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Arcu dui vivamus arcu felis bibendum. Sollicitudin ac orci phasellus egestas. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Diam sollicitudin tempor id eu nisl nunc. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Quis lectus nulla at volutpat diam ut venenatis tellus.
        </p>
      
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#ffffff" fill-opacity="1" d="M0,224L0,32L205.7,32L205.7,128L411.4,128L411.4,96L617.1,96L617.1,224L822.9,224L822.9,64L1028.6,64L1028.6,224L1234.3,224L1234.3,192L1440,192L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z"></path></svg> </div>


    <Footer/>


    <a href="/cristian_salgado.pdf" className='fixed bottom-0 rigth-0' download>
      <button>Descargar Archivo</button>
    </a>
    
    </div>
    
    
  )
}
