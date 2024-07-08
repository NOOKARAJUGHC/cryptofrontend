import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Autocomplete, TextField, CircularProgress } from '@mui/material';
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

const TechnicalAnalysis: React.FC = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

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

    const handleCompanyChange = (event: any, newValue: string | null) => {
        setSelectedCompany(newValue);
    };

    if (loading) {
        return (
            <Container sx={{ mt: 5, textAlign: 'left' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#002060', fontWeight: 'bold' }}>
                    Crypto Indicators
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    const options = Array.from(new Set(cryptoData.map(crypto => `${crypto.company} (${crypto.security_code})`)));

    return (
        <Container sx={{ mt: 5, textAlign: 'left' }}>
            <Box>
                <Typography variant="h4" gutterBottom fontFamily={'Roboto, sans-serif'} sx={{ color: '#002060', fontWeight: 'bold' }}>
                    Crypto Indicators
                </Typography>
            </Box>
            <Box mb={3} width={'350px'} >
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => option}
                    value={selectedCompany}
                    onChange={handleCompanyChange}
                    renderInput={(params) => <TextField {...params} label="Select Company" variant="outlined" />}
                />
            </Box>
            {selectedCompany && (
                <Typography variant="h6" gutterBottom>
                    Selected Company: {selectedCompany}
                </Typography>
            )}
        </Container>
    );
}

export default TechnicalAnalysis;
