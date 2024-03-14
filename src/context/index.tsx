import { createContext, useContext, ReactNode, useState } from "react";

type projectContextType = {
    header: boolean;
    header_show: (h: boolean) => void;
};

const projectContextDefaultValues: projectContextType = {
    header: true,
    header_show: (h: boolean) => {},
};

const ProjectContext = createContext<projectContextType>(
    projectContextDefaultValues
);

export function useProject() {
    return useContext(ProjectContext);
}

type Props = {
    children: ReactNode;
};

export function ProjectProvider({ children }: Props) {
    const [header, setHeader] = useState<boolean>(true);

    const header_show = (h: boolean) => {
        setHeader(h);
    };

    const value = {
        header,
        header_show,
    };

    return (
        <>
            <ProjectContext.Provider value={value}>
                {children}
            </ProjectContext.Provider>
        </>
    );
}
