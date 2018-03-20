import React from 'react';
import CazuelaType from './CazuelaType'

const Cazuela = ({ data }) => {

  return (
    <ul>
      {
        data.map((element, index) =>
          <CazuelaType typeCazuela={element} key={index} />
        )
      }
    </ul>)
}

export default Cazuela