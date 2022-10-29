import { Box, Divider, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import "../styles/Appi.css";
const Stats = () => {
  return (
    // streak 
    <>
       <SimpleGrid
              columns={[1, 1, 2]} spacing='40px'
            >
      <Box >
        <a href="https://github.com/harshu878">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=harshu878"
          />
        </a>
      </Box>
      <Box>
        <a href="https://github.com/harshu878">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=harshu878&count_private=true&show_icons=true" //stats
          />
        </a>
        </Box>
     
  
      {/* <GridItem colSpan={2} >
        <a href="https://github.com/harshu878">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=harshu878"  //launguages
          />
        </a>
        </GridItem> */}
        </SimpleGrid>
    </>
  );
};

export default Stats;