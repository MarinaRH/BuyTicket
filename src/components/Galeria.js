import React from 'react'
import GaleriaType from './GaleriaType'

const Galeria = ({ data }) => (
  <ul>
    {
      data.map((element, index) =>
        <GaleriaType typeGaleria={element} key={index} />
      )
    }

  </ul>
)

export default Galeria