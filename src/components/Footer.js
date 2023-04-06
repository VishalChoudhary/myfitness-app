import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Footer-Logo1.jpg';

const Footer = () => (
    <Box mt="80px" bgcolor="#fdecdc">
        <Stack gap="40px" sx={{ alignItems: 'center', justifyContent: 'center' }} direction="row" px="40px" pt="24px">
            <img className='footer' src={Logo} alt="logo" style={{ width: '190px', height: '150px', marginTop: '-24px' }} />
            <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">© atheistcoder</Typography>
        </Stack>
    </Box>
);

export default Footer;
