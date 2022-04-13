import {useCallback} from 'react'
import {toast} from "react-hot-toast";

export const useMessage = () => {
    return useCallback((text) => {
        if (text) {
            toast(text, {
                duration: 4000,
                position: 'bottom-left',
            })
        }
    }, [])
}
