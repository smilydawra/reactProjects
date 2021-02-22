/** 
 * Container component
 * Main Container for all menu options
 */
import React from 'react';
import { Box } from '@chakra-ui/react';

const Container = ({ children, padding = '0', margin = '0 auto' }) => {
    return (
        <Box maxW={1000} width="95%" m={margin} p={padding}>
            {children}
        </Box>
    );
}

export default Container;