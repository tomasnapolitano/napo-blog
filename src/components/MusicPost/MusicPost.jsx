import styles from "./MusicPost.module.css"


// la idea sería renderizar cards por cada canción/tema subido. Mostraría:
// Imagen del tema (portada)
// Título
// Duración
// género??
// 
const MusicPost = (props) => {

    return(
        <div className={styles.musicPostContainer}>
            MusicPost
            <h3>{props.id}</h3>
            <h2>{props.title}</h2>
            <h2>{props.duration}</h2>
            <h2>{props.genre}</h2>
            <h2>{props.imageUrl}</h2>
        </div>
    )
}

export default MusicPost;