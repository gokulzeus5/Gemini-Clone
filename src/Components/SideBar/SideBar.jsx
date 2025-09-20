import React, { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
const SideBar = () => {

    const [extended , setExtended] = useState(false);
       const {
       prevPrompt,
       setPrevPrompt,
       } = useContext(Context);

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtended(prev => !prev) } className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
               {extended ?<p>New Chat</p> : null}
            </div>
         {extended && (
  <>
    <div className="recent">
      <p className="recent-title">Recent</p>
    </div>

 {prevPrompt.length > 0 ? (
  <div className="recent">
    <p className="recent-title">Recent</p>
    {prevPrompt.map((data, index) => (
      <div key={index} className="recent-line">
        <img src={assets.message_icon} alt="" />
        <p>{data}</p>
      </div>
    ))}
  </div>
) : (
  <p>No Data</p>
)}


  </>
)}
      
        </div>
        <div className="bottom">
            <div className="bottom-item  recent-entry" >
                <img src={assets.question_icon} alt="" />
                {extended ?<p>Help</p> :null}
            </div>
             <div className="bottom-item  recent-entry" >
                <img src={assets.history_icon} alt="" />
                {extended ? <p>Activity</p> :null}
            </div>
             <div className="bottom-item  recent-entry" >
                <img src={assets.setting_icon} alt="" />
                {extended ? <p>Settings</p> :null}
            </div>
        </div>
      
    </div>
  )
}

export default SideBar
