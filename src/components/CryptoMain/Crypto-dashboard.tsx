import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

interface CryptoData {
    company: string;
    security_code: string;
    price: number;
    marketcapitalization: number;
    volume: number;
    marketcapdominance: number;
    circulatingsupply: number;
    maxsupply: number;
}

const CryptoDashboard: React.FC = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.57:8001/pages/cryptomonitor/');
                setCryptoData(response.data['crypto_monitor']);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the crypto data', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <Container sx={{ mt: 5, textAlign: 'left' }}>
                <Typography variant="h4" gutterBottom  sx={{ color: '#002060', fontWeight: 'bold' }}>
                    Cryptocurrency Dashboard
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 5, textAlign: 'left' }}>
            <Typography variant="h4" gutterBottom fontFamily={'Roboto, sans-serif'}  sx={{ color: '#002060', fontWeight: 'bold' }}>
                Cryptocurrency Dashboard
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#3f51b5' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Company</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Security Code</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Market Capitalization</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Volume</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Market Cap Dominance</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Circulating Supply</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Max Supply</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cryptoData.map((crypto) => (
                            <TableRow key={crypto.security_code} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                                <TableCell style={{ color: '#0078ff' }}>{crypto.company}</TableCell>
                                <TableCell>{crypto.security_code}</TableCell>
                                <TableCell>${crypto.price.toFixed(2)}</TableCell>
                                <TableCell>${crypto.marketcapitalization.toFixed(2)}</TableCell>
                                <TableCell>{crypto.volume.toFixed(2)}</TableCell>
                                <TableCell>{crypto.marketcapdominance.toFixed(2)}%</TableCell>
                                <TableCell>{crypto.circulatingsupply.toFixed(2)}</TableCell>
                                <TableCell>{crypto.maxsupply}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default CryptoDashboard;
