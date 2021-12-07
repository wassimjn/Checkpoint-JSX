
import './App.css';

import imageSrc from "./2.jpg"
function App() {
  return (
   <div className="cards">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

           <h1 className="title red">Your name here</h1>

           <br/>

          <img src={imageSrc} alt='...'/>

            <br/>

          <img src="1.jpg"  alt='...'/>
    </div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>

   </div>
  );
}

export default App;
