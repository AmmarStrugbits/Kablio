import React, { ReactNode, createContext, useContext, useState } from 'react';

export enum Occupation {
    JOBSEEKER = "Jobseeker",
    EMPLOYER = "Employer",
    RECRUITER = "Recruiter"
}

interface NavbarContextType {
    occupation: Occupation;
    setOccupation: React.Dispatch<React.SetStateAction<Occupation>>;
}

const NavbarContext = createContext<NavbarContextType>({
    occupation: Occupation.JOBSEEKER,
    setOccupation: () => { }
});

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [occupation, setOccupation] = useState<Occupation>(Occupation.JOBSEEKER);

    return (
        <NavbarContext.Provider value={{ occupation, setOccupation }}>
            {children}
        </NavbarContext.Provider>
    );
};
