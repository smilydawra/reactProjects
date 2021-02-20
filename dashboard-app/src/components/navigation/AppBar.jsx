import { ChevronDownIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { Avatar, Button, Box, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text, Wrap, WrapItem, Stack, Icon } from '@chakra-ui/react'
import React from 'react'

const AppBar = () => {
    return (
        <Flex
            as="header"
            width="100%"
            zIndex="sticky"
            position="fixed"
            top={0}
            align="flex-start"
            backgroundColor="#fff"
            direction="row"
        >
            <Flex justifyContent="space-between" flex={1}>
                {/*Logo*/}
                <Flex align="center" style={{ borderRight: "1px solid #eee" }}>
                    <Box>
                        <Heading
                            size="md"
                            px="41px"
                            fontWeight={700}
                            color="#2365e8"
                        >
                            LOGO HERE
                    </Heading>
                    </Box>
                </Flex>

                {/*UserInfo*/}
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    style={{ borderLeft: "1px solid #eee" }}
                >
                    <Box px={1} py={2}>
                        <Menu>
                            <MenuButton backgroundColor="#fff" as={Button}>
                                <Avatar h="30px" w="30px" borderRadius="3px" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />{" "}
                                <small>Anthony Johnson</small>
                                <Icon w={5} h={5} as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Profile</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                </Box>
            </Flex>
        </Flex >
    )
}

export default AppBar
