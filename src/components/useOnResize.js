import { useEffect,useState } from "react"
const UseOnResize = (target) => {
    const [width,setWidth] = useState(null)

    useEffect(()=>{        
        if(target?.clientWidth){
            
            setWidth(target?.clientWidth);
            const onResize = (e) => {
                    setWidth(target?.clientWidth);
            } 
            window.addEventListener('resize',onResize)
            return () => window.removeEventListener('resize',onResize)
        }        
    },[target?.clientWidth,target])
    return [Math.floor(width/310) || Math.floor(window.innerWidth/310), target.clientHeight || window.innerHeight]
}


export default UseOnResize