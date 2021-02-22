import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const FooterBox = styled(Box)`
bottom: 0;
width: 100%;
height: 100%;
border-top: 1px solid #dedede;
`;

const Footer = () => {
    return (
        <Box>
            <FooterBox>
                <Box m="0 36px" color="#a19d9d" py={3}><small>{`\u0040`} Copyrights - Dummy Design 2021 All Rights Reserved</small></Box>
            </FooterBox>
        </Box>
    )
}

export default Footer
