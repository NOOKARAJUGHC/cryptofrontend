// Navbar.tsx
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Box,
} from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';
import Login from './Login';
import Signup from './Signup';

const Navbar: React.FC = () => {
    const [anchorElMonitor, setAnchorElMonitor] = useState<null | HTMLElement>(null);
    const [anchorElIndicators, setAnchorElIndicators] = useState<null | HTMLElement>(null);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, anchorElSetter: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
        anchorElSetter(event.currentTarget);
    };

    const handleMenuClose = (anchorElSetter: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
        anchorElSetter(null);
    };

    const handleLoginOpen = () => {
        setSignupOpen(false);
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    const handleSignupOpen = () => {
        setLoginOpen(false);
        setSignupOpen(true);
    };

    const handleSignupClose = () => {
        setSignupOpen(false);
    };

    const menuItems1 = [
        { label: 'Monitor', route: '/monitor', onClick: () => handleMenuClose(setAnchorElMonitor) },
        { label: 'Technical Analysis', route: '/technical-analysis', onClick: () => handleMenuClose(setAnchorElMonitor) },
        { label: 'Index Wizard', route: '/index-wizard', onClick: () => handleMenuClose(setAnchorElMonitor) },
        { label: 'My Watchlists', route: '/my-watclists', onClick: () => handleMenuClose(setAnchorElMonitor) },
    ];

    const menuItems2 = [
        { label: 'My Portfolios', route: '/portfolios', onClick: () => handleMenuClose(setAnchorElIndicators) },
        { label: 'Dashboard Summary', route: '/dashboard-summary', onClick: () => handleMenuClose(setAnchorElIndicators) },
        { label: 'Portfolio Returns', route: '/portfolio-returns', onClick: () => handleMenuClose(setAnchorElIndicators) },
        { label: 'Risk Overview', route: '/risk-overview', onClick: () => handleMenuClose(setAnchorElIndicators) },
    ];

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo />
                </RouterLink>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            component={RouterLink}
                            to="/crypto-monitor"
                            color="inherit"
                            aria-controls="crypto-monitor-menu"
                            aria-haspopup="true"
                            onClick={(event) => handleMenuOpen(event, setAnchorElMonitor)}
                            sx={{ fontWeight: 'bold' }}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Crypto Monitor
                        </Button>
                        <Menu
                            id="crypto-monitor-menu"
                            anchorEl={anchorElMonitor}
                            open={Boolean(anchorElMonitor)}
                            onClose={() => handleMenuClose(setAnchorElMonitor)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            {menuItems1.map((item, index) => (
                                <MenuItem key={index} onClick={item.onClick}>
                                    <RouterLink to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {item.label}
                                    </RouterLink>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Button
                            component={RouterLink}
                            to="/crypto-indicators"
                            color="inherit"
                            aria-controls="crypto-indicators-menu"
                            aria-haspopup="true"
                            onClick={(event) => handleMenuOpen(event, setAnchorElIndicators)}
                            sx={{ fontWeight: 'bold', marginLeft: 2 }}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Crypto Indicators
                        </Button>
                        <Menu
                            id="crypto-indicators-menu"
                            anchorEl={anchorElIndicators}
                            open={Boolean(anchorElIndicators)}
                            onClose={() => handleMenuClose(setAnchorElIndicators)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            {menuItems2.map((item, index) => (
                                <MenuItem key={index} onClick={item.onClick}>
                                    <RouterLink to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {item.label}
                                    </RouterLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Box>
                <Box>
                    <Button color="inherit" sx={{ fontWeight: 'bold', marginLeft: 2 }} onClick={handleLoginOpen}>
                        Login
                    </Button>
                </Box>
            </Toolbar>

            {/* Login Dialog */}
            <Login open={loginOpen} onClose={handleLoginClose} onSignupOpen={handleSignupOpen} />

            {/* Signup Dialog */}
            <Signup open={signupOpen} onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
        </AppBar>
    );
};

export default Navbar;
