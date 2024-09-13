import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface BoardContextType {
  needUpdate: boolean;
  setNeedUpdate: Dispatch<SetStateAction<boolean>>;
}

export const BoardContext = createContext<BoardContextType>({
  needUpdate: false,
  setNeedUpdate: () => { }
});


export const BoardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [needUpdate, setNeedUpdate] = useState<boolean>(false);
  return (
    <BoardContext.Provider value={{ needUpdate, setNeedUpdate }}>
      {children}
    </BoardContext.Provider>
  )
}