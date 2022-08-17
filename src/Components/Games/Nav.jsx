import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Box,
    Flex,
    HStack,
} from '@chakra-ui/react'
// import { MoonIcon, SunIcon ,SearchIcon,QuestionIcon} from '@chakra-ui/icons';
// import logo from '../../Images/logo.png'
// import library from '../../Images/library.webp'
// import google from '../../Images/google.png'
// import {MdPayment,MdLocalActivity,MdCardGiftcard, MdSettings} from 'react-icons/md'
// import {AiOutlineQuestionCircle} from 'react-icons/ai'
// import {CgProfile} from 'react-icons/cg'
// import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc'

export const Nav=()=>{
    // const { colorMode, toggleColorMode } = useColorMode();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [isHover,setHover]=React.useState(false)
    const style={
        textDecoration:isHover ? 'underline' :'none',
        backgroundColor: isHover ? '' : 'white',
        color:isHover?'darkblack':'black'
    }
    return (
        <>
        <Box px={4}>
            {/* <Flex h={16} alignItems={'center'} justifyContent={'space-around'}> */}
            
            <HStack as={'nav'} alignItems={'center'} spacing={10} m={10}>
                <Link to="/games/phone">Phone</Link>
                <Link to="/games/tablet">Tablet</Link>
                <Link to="/games/tv">TV</Link>
                <Link to="/games/chromebook">Chromebook</Link>
            
            </HStack>
            
        {/* </Flex> */}
        </Box>
        </>
    )
}