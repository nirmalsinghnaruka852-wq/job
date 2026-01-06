import { useCallback, useState } from "react";

function useToggle(initialState?:boolean ):[boolean , ()=>void]{
    const [state , setState] = useState<boolean>(initialState ?? false)

    const toggle=useCallback((value?:boolean)=>{
        setState(prev => (value !== undefined ? value : !prev));
    },[])
    return [state, toggle]
}


export default useToggle;