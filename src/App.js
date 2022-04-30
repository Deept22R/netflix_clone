import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {

  return (
    <div className="App">
      <Banner />
     <Row title="NETFLIX ORIGINALS" 
     isLargeRow={true}
     fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     <Row title="Discover" fetchUrl={requests.fetchDiscover}/>
    </div>
  );
}

export default App;
