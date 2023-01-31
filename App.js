import { ChakraProvider } from '@chakra-ui/react';
import Header from "./components/Header"; 
import AboutLittleLemom from './components/AboutLittleLemon';
import Menu from './components/Menu';
import TableBookings from './components/TableBookings';
import Footer from "./components/Footer"; 

function App() {
  return (
    <ChakraProvider>
    <main> 
         <Header /> 
         <AboutLittleLemom />
         <Menu />
         <TableBookings/>
         <Footer /> 
         {/*<LandingSection /> 
         <ProjectsSection /> 
         <ContactMeSection /> 
         */}
       </main> 
    </ChakraProvider>
  );
}

export default App;
