  import React from 'react';
import DaisyNav from './component/DaisyNav/DaisyNav';
import NavBar from './component/DaisyNav/NavBar/NavBar';
   

  
  const App = () => {
    return (
      <header>
        <NavBar/>
          <DaisyNav/>
      </header>
    );
  };
  
  export default App;