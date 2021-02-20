import { Flex, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../components/Footer'
import AppBar from '../components/navigation/AppBar'
import SideBar from '../components/navigation/SideBar'
import Container from './Container';

const ContentWrapper = styled(Box)`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  width: 100%;
  position: relative;
`;

const Page = ({ path, page }) => {
    const renderRoute = () => {
        return (
            <Route
                path={path}
                component={page} />
        )
    }
    return (
        <>
            <AppBar />
            <Flex mt='54px'>
                <SideBar />
                <ContentWrapper
                    as="main"
                    ml="189px"
                >
                    <Container margin="0 auto 30px auto">
                        {renderRoute()}
                    </Container>

                    <Footer />
                </ContentWrapper>
            </Flex>
        </>
    )
}

export default Page
