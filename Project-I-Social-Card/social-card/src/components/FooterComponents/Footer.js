import React from 'react';
import './Footer.css';

import { IconContext } from "react-icons";
import {
  MdChatBubbleOutline,
  MdSync,
  MdFavoriteBorder,
  MdMailOutline
} from 'react-icons/md';

function Footer() {
  return (
    <>
      <IconContext.Provider value={
        {
          className: "bubble-icon",
          color: '#9c9c9c',
          size: "24px",
          // style: { textAlign: 'center' }
        }
      }>
        <footer className="footer">
          <div className="footer-icon-bubble"> <MdChatBubbleOutline /> </div>
          <div className="footer-icon"> <MdSync /> <span className="icon-count">6</span> </div>
          <div className="footer-icon"> <MdFavoriteBorder /> <span className="icon-count">4</span> </div>
          <div className="footer-icon"> <MdMailOutline /> </div>
        </footer>
      </IconContext.Provider>
    </>
  )
}

export default Footer;
