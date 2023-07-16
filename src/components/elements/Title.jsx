import React from 'react'
import './../../css/elements/title.css'

function Title(props) {
  return (
	 <>
		<h2 className='title'>{props.children}</h2>
	 </>
  )
}

export default Title;

