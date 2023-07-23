import styles from './MusicPage.module.css'
import mockMusicData from '../../mockData/mockMusicData'
import MusicPost from '../MusicPost/MusicPost'
import { useState, useEffect, useRef } from 'react'

const MusicPage = () => {

  const audioSong = useRef();
  const [isPlaying, setisPlaying] = useState(false);
  const [currentSong, setcurrentSong] = useState(null)
  useEffect(() => {
    if(isPlaying)
    {
      audioSong.current.play();
    }else{
      audioSong.current.pause();
    }
  },[isPlaying]);


  // cuando termina un audio debería resetear el isPlaying a false.
  return (
    <>
        <div>MusicPage</div>
        <audio src={currentSong} ref={audioSong}/>
        {mockMusicData.data.map((post) => (
            <MusicPost
                id={post.id}
                audioUrl={post.attributes.audioUrl}
                title={post.attributes.title}
                duration={post.attributes.duration}
                genre={post.attributes.genre}
                imageUrl={post.attributes.imageUrl}

                isPlaying={isPlaying}
                setisPlaying={setisPlaying}
                setcurrentSong={setcurrentSong}
            />
        ))}
    </>
  )
}

export default MusicPage