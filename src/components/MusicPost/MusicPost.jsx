import { useRef, useState, useEffect } from "react"
import styles from "./MusicPost.module.css"
import { Link } from "react-router-dom"


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
            {/* <h3>{props.id}</h3> */}
            <div className={styles.songTitle}><h2 style={{}}>{props.title}</h2></div>
            {/* <h2>{props.duration}</h2>
            <h2>{props.genre}</h2> */}
            <Link onClick={playPause}>
                <img src={props.imageUrl} style={{height: 200}}/>
            </Link>
            
        </div>
    )
}

export default MusicPost;