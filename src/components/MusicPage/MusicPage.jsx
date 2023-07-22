import styles from './MusicPage.module.css'
import mockMusicData from '../../mockData/mockMusicData'
import Post from '../Post/Post'

const MusicPage = () => {
  return (
    <>
        <div>MusicPage</div>
        {mockMusicData.data.map(x => (
            <Post
                
            />
        ))}
    </>
  )
}

export default MusicPage