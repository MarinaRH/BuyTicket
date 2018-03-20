import React from 'react'

const Galeria = ({ data }) => {
  data = data[1].types
  return (
    <ul className="Galeria">
      {
        data.map((element, index) =>
          <li className="List-Galeria" key={index}>
            {element}
          </li>
        )
      }
    </ul>)
}

export default Galeria