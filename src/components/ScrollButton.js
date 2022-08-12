import React, {useState} from 'react';
import {FaArrowCircleUp} from '@react-icons/all-files/fa/FaArrowCircleUp';
  

// Not sure how in love with this "to the top" button I am, I'm gonna sit on it for a bit

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <p id='scrollButton'
        style={{
            position:'fixed',
            width:'100%',
            left:'80%',
            bottom:'65px',
            height:'20px',
            fontSize:'3rem',
            zIndex:'1',
            cursor:'pointer',
            color:'#facb65 ',
        }}>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </p>
  );
}
  
export default ScrollButton;