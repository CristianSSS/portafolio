import CardWork from "../CardWork";
import uaaImage from '../../../public/images/uaa.png'
import waveImage from '../../../public/images/waveit.png'
import benderImage from '../../../public/images/bender.png'
import gdsImage from '../../../public/images/gds.png'
import { Link } from "react-router-dom";

export default function ListWorks({quantity}){
 // Props
 // quantity -> Define la cantidad de elementos que se van a mostrar

    return(
        <>
        <div className="flex gap-10 flex-wrap justify-between">

          <CardWork src={uaaImage} title={'Universidad Atlantida Argentina'} description={'Sitio universitario para obtener informacion de carreras, contactarse con el campus y pagar semestres'} />
          <CardWork src={waveImage} title={'Wave It'} description={'Sitio universitario para obtener informacion de carreras, contactarse con el campus y pagar semestres'} />
          <CardWork src={benderImage} title={'Bender'} description={'Sitio universitario para obtener informacion de carreras, contactarse con el campus y pagar semestres'} />
          <CardWork src={gdsImage} title={'GDS Branding'} description={'Sitio universitario para obtener informacion de carreras, contactarse con el campus y pagar semestres'} />

        </div>

        <div>
            <Link>Ver mas proyectos</Link>
        </div>
        </>
    );

}