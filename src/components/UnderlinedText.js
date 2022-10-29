import React from 'react';
import { Box } from '@chakra-ui/react';

export const UnderlinedText = ({children}) => {
    return (
        <Box as="span" display="inline-block" position="relative">
            {children}
            <Box as="span" display="block" position="absolute" bg={'gray.300'} w={'100%'} h={'1px'} bottom={-2} />
        </Box>
    )
}
