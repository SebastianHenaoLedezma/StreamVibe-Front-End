import './styles.sass'
import { FaPlay } from 'react-icons/fa';


const Home = () => {
  return (
    <main className='Home'>
      <section className='containerHome'>
        <div className='containerHome_banner'>
        </div>
        <div className='containerHome_description'>
          <h1 className='containerHome_description-title'>The Best Streaming Experience</h1>
          <p className="containerHome_description-paragraph">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
          <button className="containerHome_description-button">
            <FaPlay className="button-icon" />
              Start Watching Now
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home