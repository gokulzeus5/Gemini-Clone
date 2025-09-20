import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const [input , setInput] = useState('');
    const [recentPrompt , setRecentPrompt] = useState('');
    const [prevPrompt , setPrevPrompt] = useState([]);
    const [showResult , setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData ,setResultData] = useState("");

    const onSend = async(prompt) =>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        const response = await run(input);
        console.log("Final Response --->", response);
        setResultData(response);
        setPrevPrompt((prev) => [...prev, input]);
        setLoading(false);
        setInput("");

    }
   
    
    const contextValue ={
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
    }
    return (
        <>
        <Context.Provider value={contextValue}>
           
           {props.children}

        </Context.Provider>
        </>
    )
}

export default ContextProvider;