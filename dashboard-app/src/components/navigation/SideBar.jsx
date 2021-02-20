import { ExternalLinkIcon, SettingsIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import { Link, useLocation, useParams } from 'react-router-dom'
import React from 'react'

const NavItem = ({ icon, path, name, location, iconTwo }) => {
    return (
        <Flex as="li" py={2}
            style={{ marginTop: "0" }}
            justify="center"
            cursor="pointer"
            _hover={{ bg: '#eee', color: '#fff' }}
            className={location === path ? 'active' : ""}>
            <Link to={path}>
                <Flex fontSize="sm" alignItems="center">
                    <Box>{icon}</Box>
                    <Box style={{ marginTop: "2px", marginLeft: "17px" }}>{name}</Box>
                    <Box style={{ marginLeft: "40px" }}>{iconTwo}</Box>
                </Flex>
            </Link>
        </Flex>
    )
}

const SideBar = () => {
    const urlPath = useLocation();
    return (
        <Box as="nav"
            display='block'
            position="fixed"
            h={window.outerHeight}
            w="190px"
            boxShadow="sm">
            <Stack spacing="223px">
                <Box>
                    <NavItem
                        path="/"
                        icon={<ExternalLinkIcon />}
                        name="Menu Item 1"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/menu-item-2"
                        icon={<ExternalLinkIcon />}
                        name="Menu Item 2"
                        location={urlPath.pathname}
                        iconTwo={<SmallAddIcon />}
                    />
                    <NavItem
                        path="/menu-item-3"
                        icon={<ExternalLinkIcon />}
                        name="Menu Item 3"
                        location={urlPath.pathname}
                        iconTwo={<SmallAddIcon />}
                    />
                    <NavItem
                        path="/menu-item-4"
                        icon={<ExternalLinkIcon />}
                        name="Menu Item 4"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/menu-item-5"
                        icon={<ExternalLinkIcon />}
                        name="Menu Item 5"
                        location={urlPath.pathname}
                    />
                </Box>
                <Box>
                    <NavItem
                        path="/menu-item-6"
                        icon={<ExternalLinkIcon />}
                        name="Menu Item 6"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/settings"
                        icon={<SettingsIcon />}
                        name="Settings"
                        location={urlPath.pathname}
                    />
                </Box>
            </Stack>
        </Box >
    )
}

export default SideBar
