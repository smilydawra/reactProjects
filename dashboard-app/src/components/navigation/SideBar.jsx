import React from 'react'
import { ExternalLinkIcon, SettingsIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FiMonitor } from 'react-icons/fi'
import { RiBriefcase3Line } from 'react-icons/ri'
import { AiOutlineLayout } from 'react-icons/ai'
import { HiOutlineCube } from 'react-icons/hi'
import { GiTrophyCup } from 'react-icons/gi'

const NavItem = ({ icon, path, name, location, iconTwo, height = 'auto', lineHeight = "auto" }) => {
    return (
        <Flex as="li" py={2} px={3}
            style={{ marginTop: "0" }}
            cursor="pointer"
            _hover={{ bg: '#eee', color: '#fff' }}
            className={location === path ? 'active' : ""} h={height} lineHeight={lineHeight}>
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
                        icon={<FiMonitor />}
                        name="Menu Item 1"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/menu-item-2"
                        icon={<RiBriefcase3Line />}
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
                        icon={<AiOutlineLayout />}
                        name="Menu Item 4"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/menu-item-5"
                        icon={<HiOutlineCube />}
                        name="Menu Item 5"
                        location={urlPath.pathname}
                    />
                </Box>
                <Box>
                    <NavItem
                        path="/menu-item-6"
                        icon={<GiTrophyCup />}
                        name="Menu Item 6"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/settings"
                        icon={<SettingsIcon />}
                        name="Settings"
                        location={urlPath.pathname}
                        height="69px"
                        lineHeight="3rem"
                    />
                </Box>
            </Stack>
        </Box >
    )
}

export default SideBar
