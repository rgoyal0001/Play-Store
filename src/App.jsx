import React, { Children } from 'react';
import { Route,Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Navbar } from './Components/Navbar/Navbar';
import { Games } from './Components/Games/Games';
import { Apps } from './Components/Apps/Apps';
import { Books } from './Components/Books/Books';
import { Movies } from './Components/Movies/Movies';
import { Kids } from './Components/Kids/Kids';
import { Phone } from './Components/Games/Phone/Phone';
import { Tablet } from './Components/Games/Tablet/Tablet';
import { Tv } from './Components/Games/Tv/Tv';
import { Chromebook } from './Components/Games/Chromebook/Chromebook';
import { Footer } from './Components/Footer/Footer';



function App() {
  return (
  <>
       <ChakraProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path = "/games/*"  element= {<Games/>}></Route>
        <Route path = "/apps"  element= {<Apps/>}></Route>
        <Route path = "/movies"  element= {<Movies/>}></Route>
        <Route path = "/books"  element= {<Books/>}></Route>
        <Route path = "/kids"  element= {<Kids/>}></Route>

        <Route path = "/games/phone"  element= {<Phone/>}></Route>


        {/*     games      */}


      </Routes>
      <Footer/>
     </ChakraProvider>
    </>
  );
}

export default App;
