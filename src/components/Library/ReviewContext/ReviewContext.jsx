import { createContext, useState } from 'react';

 export const ReviewContext = createContext();

export const ReviewContextProvider = ({ children }) => {
    const [isModal, setIsModal] = useState('');

    const toogleModal = (id) => {
		setIsModal(isModal?'':id);
	};

    return <ReviewContext.Provider value={{toogleModal, isModal}}>{children}</ReviewContext.Provider>
}