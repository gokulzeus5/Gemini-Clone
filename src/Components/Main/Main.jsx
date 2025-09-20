import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {


    const {
       prevPrompt,
       setPrevPrompt,
       onSend,
       setRecentPrompt,
       recentPrompt,
       showResult,
       loading,
       resultData,
       input,
       setInput,
    } = useContext(Context);


  return (
    <div  className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult
                 ?<>
                 <div className="greeting">
                <p><span>Hello , Dev</span></p>
                <p>How can I help you?</p>

            </div>
            <div className="cards">
                <div className="card">
                    <p>something something something</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
              <div className="card">
                    <p>verb: console; past tense: consoled; past participle: consoled; 3rd person present: consoles; gerund</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
              <div className="card">
                    <p>to make somebody happier when they are very sad or disappointed</p>
                    <img src={assets.message_icon} alt="" />
                </div>
              <div className="card">
                    <p>a flat surface which contains all the controls and switches for a machine, a piece of electronic equipment, etc.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

                 </>

            : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading 
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                     :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                    

                </div>
            </div>
            }
           

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSend()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Meaning of console in English​​ to make someone who is sad or disappointed feel better, usually by giving them comfort or sympathy: Her friends tried to console ...
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
