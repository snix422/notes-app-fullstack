import { createContext, useCallback, useContext, useState } from "react";

type NotifyContextType = {
    notify: string;
    isOpenNotify: boolean;
    dispatchNotify: (message: string) => void;
    handleClose: () => void
  };

const NotifyContext = createContext<NotifyContextType | null>(null);

type NotifyProviderProps = {
    children: React.ReactNode;
  };

export const NotifyProvider : React.FC<NotifyProviderProps> = ({children}) => {
    const [notify,setNotify] = useState("");
    const [isOpenNotify, setIsOpenNotify] = useState(false);

    const dispatchNotify = useCallback((message:string) => {
        setNotify(message);
        setIsOpenNotify(true);
        setTimeout(()=>{
          setNotify("")
          setIsOpenNotify(false)
        },5000)
    },[])

    const handleClose = () => setIsOpenNotify(false);

    return(
        <NotifyContext.Provider value={{notify,isOpenNotify,dispatchNotify,handleClose}}>
            {children}
        </NotifyContext.Provider>
    )
}

export const useNotify = () => {
    const notifyContext = useContext(NotifyContext);
  
    if (!notifyContext) {
      throw Error('useAuth needs to be used inside AuthContext');
    }
  
    return notifyContext;
  };