import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AttributeCard from './AttributeCard'
import Graph from './Graph'
import attributes from '../db'

const Dashboard = () => {
    const [attributeData, setAttributeData] = useState([]);
    useEffect(async () => {
        const result = await fetch('db.js').then(res => res.json()).then((data) => {
            setAttributeData(data.attributes);
        })
        return result;
    }, [])

    return (
        <Box>
            <Box display="flex"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Button size="md"
                    lineHeight="10px"
                    width="130px"
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
            <Graph />
        </Box>
    )
}

export default Dashboard
