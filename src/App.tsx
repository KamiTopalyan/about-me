import { useState } from 'react';
import Wrapper from './components/Wrapper';


function App() {


  return (
    <div className="App">
      <Wrapper>
        <div className="header">
          <h1>About Me</h1>
        </div>
        <div className="container">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            condimentum accumsan rhoncus. Sed cursus consequat ex at dapibus.
            Nunc ac pellentesque dolor. Nulla id leo id sapien dictum aliquet.
            Praesent semper lobortis risus id consectetur. Maecenas eget ipsum
            ac magna congue tristique. Nam et tellus molestie, ornare lorem non,
            aliquet libero. Suspendisse feugiat vitae ipsum ac sollicitudin.
          </span>
          <img src="https://placehold.co/200x200"></img>
        </div>
        <div className="container">
          <img src="https://placehold.co/200x200"></img>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            condimentum accumsan rhoncus. Sed cursus consequat ex at dapibus.
            Nunc ac pellentesque dolor. Nulla id leo id sapien dictum aliquet.
            Praesent semper lobortis risus id consectetur. Maecenas eget ipsum
            ac magna congue tristique. Nam et tellus molestie, ornare lorem non,
            aliquet libero. Suspendisse feugiat vitae ipsum ac sollicitudin.
          </span>
        </div>
        <div className="container">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            condimentum accumsan rhoncus. Sed cursus consequat ex at dapibus.
            Nunc ac pellentesque dolor. Nulla id leo id sapien dictum aliquet.
            Praesent semper lobortis risus id consectetur. Maecenas eget ipsum
            ac magna congue tristique. Nam et tellus molestie, ornare lorem non,
            aliquet libero. Suspendisse feugiat vitae ipsum ac sollicitudin.
          </span>
          <img src="https://placehold.co/200x200"></img>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
