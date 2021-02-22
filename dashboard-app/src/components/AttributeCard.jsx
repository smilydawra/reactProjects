/**
 * AttributeCard Component can use dynamic content to diplay cards
 */
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const AttributeCard = ({ icon, count, attribute }) => {
    return (
        <Box py={5} px={9} overflow="hidden" w="240px" bgColor="#fff" m={[4, 4, 4, 4, 0]}>
            <Flex justifyContent="space-between" >
                <Box style={{ position: "relative" }}>
                    <Box fontSize="4xl" color="#2365e8"
                        style={{
                            backgroundColor: "rgb(207, 219, 252, 0.2)",
                            borderRadius: "50%",
                            padding: "40px",
                            position: "absolute",
                            transform: "translate(-45%,-36px)"
                        }}>{icon}</Box>
                </Box>
                <Box>
                    <Box fontWeight="bold">{count}</Box>
                    <Box fontSize="sm" color="#aaa">{attribute}</Box>
                </Box>
            </Flex>
        </Box >
    )
}

export default AttributeCard
