import React, {useState, useEffect} from 'react';
import {
    Box, ChakraProvider, Flex,Heading,Spacer
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export const Footer=()=>{
    return (
        <ChakraProvider>
            <div>
                <hr />
                <div style={{display:'flex',gap:'11rem',width:'85%',margin:'auto'}}>
                    <Box>
                        <Heading as='h6' size='sm' m={4}>Google Play</Heading>
                        <Box m={4}><Link to='/'>Play Pass</Link></Box>
                        <Box m={4}><Link to='/'>Play Points</Link></Box>
                        <Box m={4}><Link to='/'>Gift cards</Link></Box>
                        <Box m={4}><Link to='/'>Reedeem</Link></Box>
                        <Box m={4}><Link to='/'>Refund policy</Link></Box>
                    </Box>
                    <Box >
                        <Heading as='h6' size='sm' m={4}>Kids & family</Heading>
                        <Box m={4}><Link to='/'>Parent Guide</Link></Box>
                        <Box m={4}><Link to='/'>Family sharing</Link></Box>
                    </Box>
                </div>
                <div style={{width:'90%',margin:'3rem auto', fontSize:'12px'}}>
                    <Flex>
                        <Flex gap={6}>
                            <a href="">Terms of Service</a>
                            <a href="">Privacy</a>
                            <a href="">About Google Play</a>
                            <a href="">Developers</a>
                            <a href="">Google Store</a>
                            <p>All prices include GST.</p>
                        </Flex>
                        <Spacer/>
                        <Flex alignItems='center' gap={4}>
                            <img src="https://ssl.gstatic.com/store/images/regionflags/india.png" alt=""  style={{width:'2rem'}}/>
                            <p>India (English (United States))</p>
                        </Flex>
                    </Flex>
                </div>
            </div>

            
        </ChakraProvider>
    )
}