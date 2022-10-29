import React from 'react';
import { Nav } from './Nav';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Divider,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
// import './styles/globals.css';
// import styles from './styles/Home.module.css'
import './styles/globals.css';
import TechStackSection from './section/TechStackSection';
import styles from './styles/Home.module.css'
import ProfileSection from './section/ProfileSection';
import About from './section/About';
import { LiveProjectSection } from './section/LiveProjectSection';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="nav"> <Nav/></div>
      
         <div className={styles.container}>
       
         <ProfileSection/>
         <Divider my={7} />
    <section id="about"><About/></section>
    <Divider my={7} />
    <section id="tech"><TechStackSection/></section>
    <Divider my={7} />
      <section id="projects"><LiveProjectSection/></section>
      <Divider my={7} />
      <section id="contact">CONTACT ME</section>
      </div>
    </ChakraProvider>
  );
}

export default App;
{/* <Box textAlign="center" fontSize="xl">
<Grid minH="100vh" p={3}>
  <ColorModeSwitcher justifySelf="flex-end" />
  <VStack spacing={8}>
    <Logo h="40vmin" pointerEvents="none" />
    <Text>
      Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
    </Text>
    <Link
      color="teal.500"
      href="https://chakra-ui.com"
      fontSize="2xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Chakra
    </Link>
  </VStack>
</Grid>
</Box> */}