import React, { createContext, useContext, useState } from 'react';

const ApiDataContext = createContext();

export function useApiData() {
    return useContext(ApiDataContext);
}

export function ApiDataProvider({ children }) {
    const [apiData, setApiData] = useState([])

    const setNewApiData = (newData) => {
        // Check if the fetched data is different from the current data
        if (JSON.stringify(newData) !== JSON.stringify(apiData)) {
            setApiData(newData);
        }
    }

    return (
        <ApiDataContext.Provider value={{ apiData, setNewApiData }}>
            {children}
        </ApiDataContext.Provider>
    );
}
