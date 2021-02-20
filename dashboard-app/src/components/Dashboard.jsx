import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Attribute from './Attribute'
import Graph from './Graph'

const Dashboard = () => {
    return (
        <Box>
            <Box display="flex"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Button size="md"
                    height="48px"
                    width="150px"
                    variant="solid"
                    colorScheme="blue" m="15px 0">Button</Button>
            </Box>
            <Flex justifyContent="space-between" flexDirection="row">
                <Attribute />
                <Attribute />
                <Attribute />
                <Attribute />
            </Flex>
            <Graph />
        </Box>
    )
}

export default Dashboard
