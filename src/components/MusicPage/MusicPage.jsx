import styles from './MusicPage.module.css'
import mockMusicData from '../../mockData/mockMusicData'
import MusicPost from '../MusicPost/MusicPost'

const MusicPage = () => {
  return (
    <>
        <div>MusicPage</div>
        {mockMusicData.data.map((post) => (
            <MusicPost
                id={post.id}
                title={post.attributes.title}
                duration={post.attributes.duration}
                genre={post.attributes.genre}
                imageUrl={post.attributes.imageUrl}
            />
        ))}
    </>
  )
}

export default MusicPage