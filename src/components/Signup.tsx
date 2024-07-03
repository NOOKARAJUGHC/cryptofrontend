// src/components/Signup.tsx

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

interface SignupProps {
    open: boolean;
    onClose: () => void;
    onLoginOpen: () => void; // Add this prop
}

const Signup: React.FC<SignupProps> = ({ open, onClose, onLoginOpen }) => { // Include the new prop
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignupClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sign up</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="signup-username"
                        label="Username"
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="signup-email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="signup-password"
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
                <Box mt={2} textAlign="center">
                    <Link href="#" color="#551a8b" onClick={onLoginOpen}  sx={{ textDecoration: 'none' }}> {/* Link to open login */}
                        Already a User? Login to your account
                    </Link>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSignupClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSignupClose} color="primary" variant="contained">
                    Sign up
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Signup;
