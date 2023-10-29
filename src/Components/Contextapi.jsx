import React, { useState } from 'react'
import { createContext } from 'react'
const myContext = createContext();

function Contextapi({ children }) {
    const [mode, setmode] = useState(true);
    return (
        <myContext.Provider value={{
            mode, setmode
        }}>
            {children}
        </myContext.Provider>

    )
}

export { myContext, Contextapi }
