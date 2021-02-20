import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const NavItem = ({ icon, path, name }) => {
    return (
        <Flex p={2}
            justify="center"
            cursor="pointer"
            _hover={{ bg: '#d9e6fc', color: '#333' }}>
            <Link to={path}>
                <Flex justifyContent="space-evenly">
                    <Box>{icon}</Box>
                    <Box>{name}</Box>
                </Flex>

            </Link>
        </Flex>
    )
}

const SideBar = () => {
    return (
        <Box as="nav"
            display='block'
            position="fixed"
            h="100vh"
            w="168px"
            boxShadow="sm">
            <Stack mt={1}>
                <NavItem
                    path="/menu-item-1"
                    icon={<ExternalLinkIcon />}
                    name="Menu Item 1"
                />
                <NavItem
                    path="/menu-item-1"
                    icon={<ExternalLinkIcon />}
                    name="Menu Item 2"
                />
                <NavItem
                    path="/menu-item-1"
                    icon={<ExternalLinkIcon />}
                    name="Menu Item 3"
                />
                <NavItem
                    path="/menu-item-1"
                    icon={<ExternalLinkIcon />}
                    name="Menu Item 4"
                />
                <NavItem
                    path="/menu-item-1"
                    icon={<ExternalLinkIcon />}
                    name="Menu Item 5"
                    path="/"
                />
            </Stack>
        </Box >
    )
}

export default SideBar
