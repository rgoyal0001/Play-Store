import React, {useState, useEffect} from 'react';
import { Route,Routes } from 'react-router-dom';
import {MdPhoneAndroid,MdTabletMac,MdTv,MdLaptopChromebook} from 'react-icons/md'
import { 
    ChakraProvider,
    Box,
    Button,
    Stack,
    Link
} from '@chakra-ui/react';
import { Nav } from './Nav';
import { Phone } from './Phone/Phone';
import { Tablet } from './Tablet/Tablet';
import { Tv } from './Tv/Tv';
import { Chromebook } from './Chromebook/Chromebook';

    
export const Games=()=>{
    return (
        <ChakraProvider>
            <Nav/>
             <Box>
                <Stack direction='row' spacing={6} m={4} ml={150}>
                <Link href='/games/phone'><Button size='sm' border="1px" borderColor='grey' variant='outline' leftIcon={<MdPhoneAndroid/>} 
                    // _active={{
                    //     bg: '#dddfe2',
                    //     transform: 'scale(0.98)',
                    //     borderColor: '#bec3c9',
                    // }}
                    // _focus={{
                    //     boxShadow:
                    //       '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                    //   }}
                      > Phone </Button></Link>
                    <Link href='/games/tablet'><Button size='sm' border="1px" borderColor='grey' variant='outline' leftIcon={<MdTabletMac/>}> Tablet </Button></Link>  
                    <Link href='/games/tv'><Button size='sm' border="1px" borderColor='grey' variant='outline' leftIcon={<MdTv/>}> TV </Button></Link>
                    <Link href='/games/chromebook'><Button size='sm' border="1px" borderColor='grey' variant='outline' leftIcon={<MdLaptopChromebook/>}> Chromebook </Button></Link>
                </Stack>
                
             </Box>
             
             {/* <Routes>
             <Route path = "/games/phone"  element= {<Phone/>}></Route>
            <Route path = "/games/tablet"  element= {<Tablet/>}></Route>
            <Route path = "/games/tv"  element= {<Tv/>}></Route>
            <Route path = "/games/chromebook"  element= {<Chromebook/>}></Route>
            </Routes> */}

        </ChakraProvider>

    )
}