import React from 'react'

const CazuelaType = ({ typeCazuela }) => (
    <li>{typeCazuela.name}
        <p>{typeCazuela.description} </p>
        <p> {typeCazuela.nivel} NIVEL</p>
    </li>
)
export default CazuelaType
