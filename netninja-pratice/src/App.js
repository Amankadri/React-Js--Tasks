
import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.youtube.com/";
  return (
    <div className="App">
      <div className='content'>
        <h1>{title} </h1>
        <p>Liked {likes} times</p>
        <a href={link}>Youtube</a>
        <p>{Math.random() * 10}</p>
      </div>

    </div>
  );
}

export default App;
