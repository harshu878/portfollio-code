import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Link } from 'react-scroll';

import React from 'react';


 export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        // leftIcon={}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        <HamburgerIcon boxSize={6} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mobile Menu</DrawerHeader>

          <DrawerBody>
            {/* <Link to="/" onClick={onClose}>
              <h3>Home</h3>
            </Link> */}
            <VStack>
            <Link activeClass="active"  onClick={onClose}  smooth spy to="about">
                ABOUT
              </Link>
              <Link activeClass="active"  onClick={onClose} smooth spy to="tech" duration={300}>
                TECH
              </Link>
     
              <Link activeClass="active" onClick={onClose}  spy to="projects" smooth={true} duration={400}>
                PROJECTS
              </Link> 


              <Link activeClass="active"  onClick={onClose} smooth spy to="contact" duration={400}>
                CONTACT ME
              </Link>
              </VStack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}