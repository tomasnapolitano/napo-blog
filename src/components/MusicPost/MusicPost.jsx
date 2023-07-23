import { useRef, useState, useEffect } from "react"
import styles from "./MusicPost.module.css"


// la idea sería renderizar cards por cada canción/tema subido. Mostraría:
// Imagen del tema (portada)
// Título
// Duración
// género??
// 
const MusicPost = (props) => {

    const playPause = () =>{
        props.setcurrentSong(props.audioUrl)
        props.setisPlaying(!props.isPlaying);
    }

    return(
        <div className={styles.musicPostContainer}>
            <h3>{props.id}</h3>
            <h2>{props.title}</h2>
            <h2>{props.duration}</h2>
            <h2>{props.genre}</h2>
            <h2>{props.imageUrl}</h2>
            
            <button onClick={playPause}>play</button>
        </div>
    )
}

export default MusicPost;