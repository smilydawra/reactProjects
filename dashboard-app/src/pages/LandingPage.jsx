import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AppBar from '../components/navigation/AppBar'
import Dashboard from '../components/Dashboard'
import Container from '../common/Container'
import styled from '@emotion/styled'
import Footer from '../components/Footer'
import SideBar from '../components/navigation/SideBar'

const ContentWrapper = styled(Box)`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  width: 100%;
`;

const LandingPage = () => {
    return (
        <>
            <AppBar />
            <Flex mt='54px'>
                <SideBar />
                <ContentWrapper
                    as="main"
                    // ml={{ base: 0, lg: '55px' }}
                    ml="169px"
                // w={{ base: '100%', lg: 'calc(100% - 55px)' }}

                >
                    <Container>
                        <Dashboard />
                    </Container>
                    <Footer />
                </ContentWrapper>
            </Flex>
        </>
    )
}

export default LandingPage
