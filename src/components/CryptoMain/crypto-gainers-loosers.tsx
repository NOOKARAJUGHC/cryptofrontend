import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import axios from 'axios';

interface TimePeriodSelectorProps {
    timePeriod: string;
    setTimePeriod: (value: string) => void;
}

const TimePeriodSelector: React.FC<TimePeriodSelectorProps> = ({ timePeriod, setTimePeriod }) => (
    <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel id="time-period-select-label">Time Period</InputLabel>
        <Select
            labelId="time-period-select-label"
            id="time-period-select"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value as string)}
            label="Time Period"
        >
            <MenuItem value="1day">1 Day</MenuItem>
            <MenuItem value="1week">1 Week</MenuItem>
            <MenuItem value="1month">1 Month</MenuItem>
            <MenuItem value="1year">1 Year</MenuItem>
        </Select>
    </FormControl>
);

interface GainersLosersTableProps {
    title: string;
    data: {
        company: string;
        fs_ticker: string;
        start_price: number;
        end_price: number;
        return_value: number;
    }[];
    headerColor: string;
}

const GainersLosersTable: React.FC<GainersLosersTableProps> = ({ title, data, headerColor }) => (
    <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ backgroundColor: headerColor }}>
                    <TableRow>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Company</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Ticker</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Start Date </TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>End Date</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Return (%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.fs_ticker} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                            <TableCell style={{ color: '#0078ff' }}>{item.company}</TableCell>
                            <TableCell>{item.fs_ticker}</TableCell>
                            <TableCell>${item.start_price.toFixed(2)}</TableCell>
                            <TableCell>${item.end_price.toFixed(2)}</TableCell>
                            <TableCell>{item.return_value.toFixed(2)}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);

interface CryptoData {
    top_gainers: {
        company: string;
        fs_ticker: string;
        start_price: number;
        end_price: number;
        return_value: number;
    }[];
    top_losers: {
        company: string;
        fs_ticker: string;
        start_price: number;
        end_price: number;
        return_value: number;
    }[];
}

const CryptoGainersLosers: React.FC = () => {
    const [timePeriod, setTimePeriod] = useState<string>('1day');
    const [data, setData] = useState<CryptoData>({ top_gainers: [], top_losers: [] });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://192.168.1.57:8001/api/crypto-prices/${timePeriod}/`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the data', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [timePeriod]);

    if (loading) {
        return (
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    <Typography variant="h4" fontFamily={'Roboto, sans-serif'}  sx={{ color: '#002060', fontWeight: 'bold' }}>
                        Top Gainers and Losers
                    </Typography>
                    <TimePeriodSelector timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 5, textAlign: 'left' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h4" sx={{ color: '#002060', fontWeight: 'bold' }}>
                    Top Gainers and Losers
                </Typography>
                <TimePeriodSelector timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <GainersLosersTable title="Top Gainers" data={data.top_gainers} headerColor="#4caf50"  />
                </Grid>
                <Grid item xs={12} md={6}>
                    <GainersLosersTable title="Top Losers" data={data.top_losers} headerColor="#f44336" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default CryptoGainersLosers;
