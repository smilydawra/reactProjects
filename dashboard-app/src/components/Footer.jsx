import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Container from '../common/Container'

const Footer = () => {
    return (
        <Box>
            <Container>
                <Box m="15px 0" style={{ borderTop: "1px solid #333" }}>
                    Footer
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
