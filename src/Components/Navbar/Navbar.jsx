import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Box,
    Image,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    HStack,
    textDecoration
} from '@chakra-ui/react'
import { MoonIcon, SunIcon ,SearchIcon,QuestionIcon} from '@chakra-ui/icons';
import logo from '../../Images/logo.png'
import library from '../../Images/library.webp'
import google from '../../Images/google.png'
import {MdPayment,MdLocalActivity,MdCardGiftcard, MdSettings} from 'react-icons/md'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc'
import { GoogleOauth } from '../Auth/GoogleOauth';
import { useGoogleLogin } from '@react-oauth/google';

export const Navbar=()=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isHover,setHover]=React.useState(false)
    const style={
        textDecoration:isHover ? 'underline' :'none',
        backgroundColor: isHover ? '' : 'white',
        color:isHover?'darkblack':'black'
    }
    const login=useGoogleLogin({
      onSuccess:tokenRes=>console.log('tokenRes',tokenRes)
    })
    return (
        <div style={{position:'relative', top:'0'}}>
        <Box px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
            <Box>
                <Link to='/games/phone'><Image boxSize='3.8rem' w='100%' src={logo}/></Link>
            </Box>
            <HStack as={'nav'} alignItems={'center'} spacing={10} m={10}>
            <Link to="/games/phone">Games</Link>
            <Link to="/apps">Apps</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/books">Books</Link>
            <Link to="/kids">Kids</Link>

            </HStack>
            </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button
              colorScheme={'black'}
              variant='ghost'
              size="px"

              leftIcon={<SearchIcon />}>
            </Button>
            <Button
              colorScheme={'black'}
              variant='ghost'
              size="px"
              leftIcon={<AiOutlineQuestionCircle/>}>
            </Button>
              <Menu>
                <MenuButton
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} p={4}>
                  {/* <MenuItem>
                    <Image
                        boxSize='2rem'
                        borderRadius='full'
                        src={google}
                        mr='12px'
                    />
                    <Button variant='ghost' onClick={()=>login()}><span >Sign in with Google</span></Button>
                    <span style={{marginLeft:'20px'}}>Sign in with Google</span> 
                  </MenuItem> */}
                  <MenuItem>
                    <GoogleOauth/>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Image
                        boxSize='1.5rem'
                        borderRadius='full'
                        src={library}
                    />
                    <span style={{marginLeft:'20px'}}>Library & devices</span>
                  </MenuItem>
                  <MenuItem>
                    <MdPayment size={24}/>
                    <span style={{marginLeft:'20px'}}>Payments & subscription</span>
                  </MenuItem>
                  <MenuItem>
                    <MdLocalActivity size={24}/>
                    <span style={{marginLeft:'20px'}}>My Plan activity</span>
                  </MenuItem>
                  <MenuItem>
                    <MdCardGiftcard size={24}/>
                    <span style={{marginLeft:'20px'}}>Offers</span>
                  </MenuItem>
                  <MenuItem>
                    <VscDebugBreakpointLogUnverified size={24}/>
                    <span style={{marginLeft:'20px'}}>Play Points</span>
                  </MenuItem>
                  <MenuDivider/>
                  <MenuItem>
                    <MdSettings size={24}/>
                    <span style={{marginLeft:'20px'}}>Settings</span>
                  </MenuItem>
                  <MenuDivider/>
                  <Center><p style={{fontSize:'12px'}}>Privacy Policy • Terms of Service</p></Center>

                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        </Box>
        </div>
    )
}