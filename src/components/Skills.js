import React from 'react'

export default function Skills() {
  return (
    <div className='skills'>
      <div className='title'>
        <div className='oppa1'>Skills</div>
        <div className='oppa2'>Skills</div>
      </div>
      <div className='con'>
        <div className='left'>
          <progress className='item' value="98" max="100"></progress>
          <p className='b'>Adobe Photoshop</p>
          <progress className='item' value="90" max="100"></progress>
          <p className='b'>Unity</p>
          <progress className='item' value="86" max="100"></progress>
          <p className='b'>Adobe Illustrator</p>


        </div>
        <div className='right'>
          <progress className='item' value="70" max="100"></progress>
          <p className='b'>Adobe XD</p>
          <progress className='item' value="84" max="100"></progress>
          <p className='b'>Adobe Premiere Pro</p>
          <progress className='item' value="60" max="100"></progress>
          <p className='b'>Web Desing</p>

        </div>
      </div>
    </div>
  )
}
