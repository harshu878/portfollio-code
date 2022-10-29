import React from 'react';
import { Heading, SlideFade, Grid, Text, useColorModeValue, Divider, Box } from "@chakra-ui/react";
import StackCard from '../components/StackCard';
import { techStacks } from '../constant/inde';
import Calender from './Statsgit';
import Stats from './git2';
// import styles from '../styles/Home.module.css'
const TechStackSection = () => {
    return (
     
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3}
            >
                Tech Stack
            </Heading>
            <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'lg'}>A list of my favorite tools and technologies that I use on a regular basis.</Text>
            <Grid
                mt={5}
                templateColumns={["1fr", "repeat(2,1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={[2, 5, 5, 5]}
            >
                {techStacks.map((stack) => (
                    <StackCard stack={stack} key={stack?.name} />
                ))}
            </Grid>
            <Divider my={3} />
            <Box padding='4'>
            <Text as='b' fontSize='xl'>My GitHub-Stats</Text>
            </Box>
        <Calender/>
        <Divider my={3} />
       
        <Stats/>
        </SlideFade>
    
    )
}

export default TechStackSection;
