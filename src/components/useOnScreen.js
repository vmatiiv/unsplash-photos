const { useState, useEffect } = require("react");

const useOnScreen = (increment) => {
    const [ref,setRef] = useState(null);
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting){
                increment()
            }
        });
        if(ref){
            observer.observe(ref)
        }
        return ()=>{
            if(ref){
                observer.unobserve(ref);
            }
        }
    },[ref])
    return setRef
}

export default useOnScreen