import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const AttributeCard = ({ icon, count, attribute }) => {
    return (
        <Box p={4} w="240px" bgColor="#fff">
            <Flex justifyContent="space-around" >
                <Box fontSize="4xl" color="#2365e8">{icon}</Box>
                <Box>
                    <Box>{count}</Box>
                    <Box>{attribute}</Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default AttributeCard
