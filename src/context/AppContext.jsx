import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [showWorkspace, setShowWorkspace] = useState(false)

    const value = {
        showWorkspace,
        setShowWorkspace
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider