import { useState } from "react"
import styles from "./CustomCursor.module.css"
import { useEffect } from "react";
import { useRef } from "react";

export const CustomCursor = () => {
    const [isMouseOver,setisMouseOver] = useState(true);
    const cursor = useRef(null);

    
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursor.current.clientWidth / 2;
            const mouseY = clientY - cursor.current.clientHeight / 2;
            cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        })
        
    },[])

  return (

    <div className={styles.customCursor} ref={cursor}/>

  )
}
