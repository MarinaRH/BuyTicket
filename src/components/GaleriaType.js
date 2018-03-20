import React from 'react'

const GaleriaType = ({ typeGaleria }) => (
  <li>{typeGaleria.name}
    <p>{typeGaleria.description} </p>
    <p> {typeGaleria.nivel} NIVEL</p>
  </li>
)
export default  GaleriaType