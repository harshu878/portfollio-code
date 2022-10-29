import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Badge,
    Stack,
    VStack,
    Text,
    Spacer,
    Avatar
  } from '@chakra-ui/react';
  import { Link, animateScroll as scroll  } from "react-scroll";
  import * as React from 'react';
  import MobileDrawer from './components/MobileDrawer';

  import logo from './Images/H.png'

  export const Nav = () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    });
  
  
    return (
      <Box
        as="nav"
        bg="bg-surface"
        // boxShadow={useColorModeValue('sm', 'sm-dark')}
       
        p="2"
      >
        <HStack spacing="10" justify="space-between">
          <HStack>
         
           <a onClick={() => scroll.scrollToTop()}>  <Avatar size='md' src={logo}/></a>
          </HStack>
          {isDesktop ? (
            <Flex w="100%" align="center" justify="flex-end">
              <HStack as="nav" spacing="5">
               
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
              <Link activeClass="active" smooth spy to="tech" duration={300}>
                TECH
              </Link>
     
              <Link activeClass="active" spy to="projects" smooth={true} duration={400}>
                PROJECTS
              </Link> 


              <Link activeClass="active" smooth spy to="contact" duration={400}>
                CONTACT ME
              </Link>


              </HStack>
              {/* // Call to action items */}
            </Flex>
          ) : (
            <>
            <Spacer />
            <MobileDrawer/>
            </>
          )}
        </HStack>
      </Box>
    );
  };
  