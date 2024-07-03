// src/components/Login.tsx

import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControl,
    InputAdornment,
    IconButton as MuiIconButton,
    Button,
    Box,
    Link
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface LoginProps {
    open: boolean;
    onClose: () => void;
    onSignupOpen: () => void; // Add this prop
}

const Login: React.FC<LoginProps> = ({ open, onClose, onSignupOpen }) => { // Include the new prop
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="login-username"
                        label="Username / Email"
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="login-password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <MuiIconButton onClick={handleClickShowPassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </MuiIconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <Box mt={2} textAlign="right">
                    <Link href="#" color="primary"  sx={{ textDecoration: 'none' }}> 
                        Forgot password?
                    </Link>
                </Box>
                <Box mt={2} textAlign="center">
                    <Link href="#" color="#551a8b" onClick={onSignupOpen}  sx={{ textDecoration: 'none' }}> 
                        New User? Create an account
                    </Link>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLoginClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleLoginClose} color="primary" variant="contained">
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Login;
