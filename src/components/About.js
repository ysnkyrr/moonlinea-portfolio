import React, { useRef } from 'react'

export default function About() {
  const dotsRef = useRef(null)
  const moreRef = useRef(null)
  const myBtnRef = useRef(null)
  function myFunction() {
    if (dotsRef.current.style.display === "none") {
      dotsRef.current.style.display = "inline";
      myBtnRef.current.innerHTML = "Read more";
      moreRef.current.style.display = "none";
    } else {
      dotsRef.current.style.display = "none";
      myBtnRef.current.innerHTML = "Read less";
      moreRef.current.style.display = "inline";
    }
  }
  return (
    <div  className='about' id='about'>
      <div className='title'>
        <div className='oppa1'>About</div>
        <div className='oppa2'>About Me</div>
      </div>
      <div className='page'>
        {/* <div className='pictures'>
          <div className='pic1'><img className='pp' src="" /></div>

        </div> */}
        <div className='text'>
          <div className='tı1'><p className='pı1'> My name is </p> <p className='pı2'>Aylin KARADAVUT</p></div>
          <div className='tı3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem sunt et culpa. Dicta id minus ducimus sed. Soluta explicabo facere voluptatem inventore natus iusto eius iste repellendus perferendis?<span ref={dotsRef}>...</span><span ref={moreRef}> Possimus tempore veritatis, omnis ducimus tempora ad id illum exercitationem consectetur, dicta ipsa, dolore reprehenderit soluta. Fuga laborum pariatur in corrupti voluptatem odio, enim tenetur quas dignissimos labore error, blanditiis, accusantium similique aut quia beatae ipsa esse aliquid consequuntur asperiores facere.</span></div><button className='btn' onClick={myFunction} ref={myBtnRef}>Read more...</button>
          <div className='ev1'>
            <div className='name'>Name <p className='g1'>Aylin Karadavut</p></div>
            <div className='phone'>Phone <p className='g1'>05059790658</p></div>
            <div className='country'>Country <p className='g1'>Ankara</p></div>
            <div className='mail'>Email <p className='g1'>ysnkyr@gmail.com</p></div>

          </div>

        </div>


      </div>
      <div className='edu'>Education
        <p className='g1'>Hacettepe Üniversitesi Web Tasarım</p>
        <div className='icons'>
          <img className='icons-bg' src="/logo/facebook.svg" />
          <img src="/logo/twitter.svg" />
          <img src="/logo/instagram.svg" />
        </div>
      </div>



    </div>

  )

}
