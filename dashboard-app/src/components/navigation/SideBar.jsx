import React from 'react'
import { ExternalLinkIcon, SettingsIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { FiMonitor } from 'react-icons/fi'
import { RiBriefcase3Line } from 'react-icons/ri'
import { AiOutlineLayout } from 'react-icons/ai'
import { HiOutlineArrowNarrowRight, HiOutlineCube } from 'react-icons/hi'
import { GiTrophyCup } from 'react-icons/gi'

const NavItem = ({ icon, path, name, location, iconTwo, height = 'auto', lineHeight = "auto" }) => {
    return (
        <Flex as="li" py={2} px={3}
            style={{ marginTop: "0" }}
            cursor="pointer"
            _hover={{ bg: '#2365e8', color: '#fff' }}
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
            w="210px"
            boxShadow="sm">
            <Stack spacing="223px">
                <Box>
                    <NavItem
                        path="/"
                        icon={<FiMonitor />}
                        name="Menu Option 1"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/menu-option-2"
                        icon={<RiBriefcase3Line />}
                        name="Menu Option 2"
                        location={urlPath.pathname}
                        iconTwo={<SmallAddIcon />}
                    />
                    <NavItem
                        path="/menu-option-3"
                        icon={<ExternalLinkIcon />}
                        name="Menu Option 3"
                        location={urlPath.pathname}
                        iconTwo={<SmallAddIcon />}
                    />
                    <NavItem
                        path="/menu-option-4"
                        icon={<AiOutlineLayout />}
                        name="Menu Option 4"
                        location={urlPath.pathname}
                    />
                    <NavItem
                        path="/menu-option-5"
                        icon={<HiOutlineCube />}
                        name="Menu Option 5"
                        location={urlPath.pathname}
                        iconTwo={<HiOutlineArrowNarrowRight />}
                    />
                </Box>
                <Box>
                    <NavItem
                        path="/menu-option-6"
                        icon={<GiTrophyCup />}
                        name="Menu Option 6"
                        location={urlPath.pathname}
                        iconTwo={<HiOutlineArrowNarrowRight />}
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
