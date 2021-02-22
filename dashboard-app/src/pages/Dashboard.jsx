/**
 * Dashboard contains skeleton of the menu option one 
 */
import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AttributeCard from '../components/AttributeCard'
import Graph from '../components/Graph'
import attributes from '../db'
import DatePicker from '../components/DatePicker'

const Dashboard = () => {
    return (
        <Box>
            <Box display="flex"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Button size="md"
                    lineHeight="10px"
                    width="160px"
                    variant="solid"
                    borderRadius="30px"
                    bgColor="#2365e8"
                    color="#fff" m="15px 0">Upgrade</Button>
            </Box>
            <Flex justifyContent="space-between" flexDirection={["row"]} flexWrap="wrap">
                {attributes.map((item) => {
                    return (
                        <Box key={item.id}>
                            <AttributeCard icon={<item.icon />} count={item.count} attribute={item.name} />
                        </Box>
                    )
                })}
            </Flex>
            <Box m="20px 0" px={5} boxShadow="sm" h="auto" bgColor="#fff">
                <Flex alignItems="flex-end" flexDirection="column" mr={5}>
                    <DatePicker />
                </Flex>
                <Graph />
            </Box>
        </Box>
    )
}

export default Dashboard
