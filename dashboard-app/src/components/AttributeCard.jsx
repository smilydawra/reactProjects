import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const AttributeCard = ({ icon, count, attribute }) => {
    return (
        <Box p={4} w="240px" bgColor="#fff" m={[4, 4, 4, 4, 0]}>
            <Flex justifyContent="space-around" >
                <Box fontSize="4xl" color="#2365e8">{icon}</Box>
                <Box>
                    <Box fontWeight="bold">{count}</Box>
                    <Box fontSize="sm" color="#aaa">{attribute}</Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default AttributeCard
