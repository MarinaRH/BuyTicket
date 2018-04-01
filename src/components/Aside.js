import React from 'react'

const category=['Teatro','Entretenimiento','Conferencias','Conciertos','Musicales','Tecnologia','Festivales','Arte','Niños'];

const Aside = () => (

    
  <aside>
      <p className="Center Title-aside">CATEGORIAS</p>
      <ul className="Category">
      {
        category.map((element, index) =>
          <li className="list-Category" key={index} >
            {element}
            
          </li>
        )
      }
    </ul>
  </aside>
)

  
  export default Aside