import React from 'react'
import Header from './Header'
import Aside from './Aside'
import { connect } from 'react-redux'


const teatro = [
  {
    nombre: 'Gareca,hazme un hijo',
    resumen: 'Los deseos de los hinchas a veces se cumplen" ¿eso querrán? ',
    direccion: ' Ximena Arroyo',
    actores: ['Sebastián Monteghirfo', 'Mayella Lloclla'],
    precios: '22 soles',
    duracion: '49min',
    restriccion: 'mayores de 14 años',
    fechas: '18 Mar - 22 Abr',
    imagen: 'https://thumb.ibb.co/juMKh7/5a4ff4c4acd13.jpg'
  },
  {
    nombre: 'El Detective, La mujer y Kevin O',
    resumen: 'una divertida historia de intriga y seducción',
    direccion: 'Gonzalo molina',
    actores: ['pablo', 'maria maria', 'mercedes merce'],
    precios: '21 soles',
    duracion: '49min Aprox',
    restriccion: 'mayores de 16 años',
    fechas: '31 Mar- 22 Abr',
    imagen: 'https://thumb.ibb.co/cxkJaS/5a906cec0a931.jpg'
  },
  {
    nombre: 'Ada y Evo',
    resumen: 'Después del apocalipsis, Dios decide que Ada y Evo sean los elegidos para volver a poblar el mundo ¿El problema? Ambos son gays.',
    direccion: 'Jesus Oro',
    actores: ['Anahí De Cárdenas', 'José Dammert'],
    precios: '18 soles',
    duracion: '39 min Aprox',
    restriccion: 'mayores de 18 años',
    fechas: '1 abr - 22 Abr',
    imagen: 'https://thumb.ibb.co/kA7mUn/act5aadae9512202.jpg'
  },
  {
    nombre: 'Celular',
    resumen: 'Cuatro amigos que se conocen desde la escuela, y sus respectivas esposas, que se reúnen para cenar y pasar una velada divertida. En un momento de la comida, uno de ellos propone un juego: ...',
    direccion: 'Osvaldo Cattone',
    actores: ['Andrea Montenegro', 'Bruno Odar', 'Julián Legaspi', 'Marisol Aguirre'],
    precios: '50 soles',
    duracion: '1:19 min',
    restriccion: 'mayores de 18 años',
    fechas: '20 Mar - 20 Abr',
    imagen: 'https://thumb.ibb.co/jYpEh7/act5a78b080645a3.jpg'

  },
  {
    nombre: 'Agua ¿bendita?',
    resumen: 'Ángela le cuenta a su mejor amiga, María, que acaba de tener el mayor descubrimiento de todos los tiempos: Agua Bendita debajo de su propia casa. ¿Qué será más fuerte, su avaricia o su fe?',
    direccion: 'Tracy Alcántara',
    actores: ['Celine Aguirre', 'Alejandra Saba'],
    precios: '18 soles',
    duracion: '39 min',
    restriccion: 'mayores de 14 años',
    fechas: '18 abr - 22 Abr',
    imagen: 'https://thumb.ibb.co/jZUGUn/act5aada42d3a8ee.jpg'

  },
  {
    nombre: 'Japan, el musical',
    resumen: 'Musical familiar con 19 canciones tocadas y cantadas en vivo. En una historia cargada de diversión que te llevará a los 2000. ',
    direccion: 'Mario Mendoza Peña',
    actores: ['Natalia Salas', 'Anahi de Cardenas', ' Martín Velásquez', 'Italo Maldonado Forero'],
    precios: '35 soles',
    duracion: '1:59 min',
    restriccion: 'publico general',
    fechas: '2 abr - 22 Abr',
    imagen: 'https://thumb.ibb.co/dN76vS/5ab2d15bec1ff.jpg'

  }

]
const Home = ({ navigateTo }) => (
  <div>
    <Header />
    <Aside />
    <main className="Main-home">
      <h3 className="Title-home">TEATRO</h3>
      <ul className="Home">
        {
          teatro.map((element, index) =>
            <li className="List-home" key={index} >
              <h3 className="Name-home Center">{element.nombre}</h3>
              <img className="Img-home" src={element.imagen} />
              <span><img className="Img-clock" src="https://thumb.ibb.co/mTLjX7/watch_13224.png" />{element.duracion}</span><br />
              <span><img className="Img-clock" src="https://thumb.ibb.co/e7Xben/calendar_256.png" />   {element.fechas}</span><br />
              <div className="div-btn">
                {/* <button data-toggle="modal" data-target="#exampleModal" className="Btn-home"> Ver más>></button> */}

                <button className="Btn-home Right" onClick={() => { navigateTo('pagina-2') }}> COMPRAR</button>
              </div>


            </li>
          )
        }
        {/* modal */}
        {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                
                  <div className="List-home" key={index} >
                    <h3 className="Name-home">{element.nombre}</h3>
                    <img className="Img-home" src={element.imagen}/>
                    <div className="Right">
                      <button className="Btn-home">COMPRAR</button>
                    </div>
                  </div> 
              
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div> */}
      </ul>
    </main>
  </div>
)
export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    navigateTo: (pagina) => {
      dispatch({
        type: 'NAVIGATE_TO',
        pagina
      })
    }
  })
)(Home);