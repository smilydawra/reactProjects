import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Line } from 'react-chartjs-2';
import attributes from '../db';

const Graph = () => {
    const state = {
        labels: [2020, "JAN 20", "FEB20", "MAR20", "APR20", "MAY20", "JUN20", "JUL20", "AUG20"],
        datasets: [
            {
                data: [86, 114, 106, 106, 107, 111, 133, 221, 483],
                label: "TOTAL: 2400",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [282, 100, 411, 50, 309, 80, 200, 150, 223],
                label: "READY: 400",
                borderColor: "#8e5ea2",
                borderDash: [10, 7],
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "SEND: 240",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "FAILED: 140",
                borderColor: "#e8c3b9",
                fill: false
            }
        ]
    };


    return (
        <>
            <Box mx={2} mb={2} fontWeight="bold" fontSize="sm">Analytics</Box>
            <HStack spacing={8} ml={2}>
                {attributes.map((item) => {
                    return (<Box key={item.id}>
                        <HStack>
                            <Box fontSize="md" fontWeight="600" color="gray.600">{item.count}</Box>
                            <Box fontSize="sm" color="#aaa">{item.name}</Box>
                        </HStack>
                    </Box>
                    )
                })}
            </HStack>
            <Line
                data={state}
                options={{
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'start',
                        labels: {
                            usePointStyle: true,
                        },
                    }, layout: {
                        padding: {
                            bottom: 40
                        }
                    }
                }}
            />
        </>
    )
}

export default Graph
