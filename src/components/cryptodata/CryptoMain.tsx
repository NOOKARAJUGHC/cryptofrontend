import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CryptoMain = () => {
  // Sample data for the area charts
  const chartOptions = [
    {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Bitcoin',
        align: 'left',
        style: {
          color: '#2196f3',
          fontWeight: 'bold',
          fontSize: '16px'
        }
      },
      xAxis: {
        categories: ['1/1/2023', '2/1/2023', '3/1/2023', '4/1/2023', '5/1/2023', '6/1/2023', '7/1/2023', '8/1/2023', '9/1/2023', '10/1/2023'],
        labels: {
          style: {
            color: '#2196f3'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Value ($)',
          style: {
            color: '#2196f3',
            fontWeight: 'bold'
          }
        },
        labels: {
          style: {
            color: '#2196f3'
          }
        }
      },
      series: [{
        name: 'Bitcoin',
        data: [10000, 12000, 11000, 13000, 12500, 13500, 13000, 14000, 13500, 15000],
        color: '#2196f3'
      }]
    },
    {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Ethereum',
        align: 'left',
        style: {
          color: '#2196f3',
          fontWeight: 'bold',
          fontSize: '16px'
        }
      },
      xAxis: {
        categories: ['1/1/2023', '2/1/2023', '3/1/2023', '4/1/2023', '5/1/2023', '6/1/2023', '7/1/2023', '8/1/2023', '9/1/2023', '10/1/2023'],
        labels: {
          style: {
            color: '#2196f3'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Value ($)',
          style: {
            color: '#2196f3',
            fontWeight: 'bold'
          }
        },
        labels: {
          style: {
            color: '#2196f3'
          }
        }
      },
      series: [{
        name: 'Ethereum',
        data: [5000, 5500, 5200, 5800, 5600, 6000, 5900, 6100, 6000, 6200],
        color: '#2196f3'
      }]
    },
    {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Ripple',
        align: 'left',
        style: {
          color: '#2196f3',
          fontWeight: 'bold',
          fontSize: '16px'
        }
      },
      xAxis: {
        categories: ['1/1/2023', '2/1/2023', '3/1/2023', '4/1/2023', '5/1/2023', '6/1/2023', '7/1/2023', '8/1/2023', '9/1/2023', '10/1/2023'],
        labels: {
          style: {
            color: '#2196f3'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Value ($)',
          style: {
            color: '#2196f3',
            fontWeight: 'bold'
          }
        },
        labels: {
          style: {
            color: '#2196f3'
          }
        }
      },
      series: [{
        name: 'Ripple',
        data: [2000, 2300, 2200, 2400, 2250, 2500, 2450, 2550, 2500, 2600],
        color: '#2196f3'
      }]
    }
  ];

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" color="#7a2180" component="h1" gutterBottom fontWeight="bold">
          Crypto Overview
        </Typography>
        <Typography variant="body1" component="p">
          Cryptocurrency is digital money designed to exchange over the internet to buy goods and services, 
          held as part of an investment strategy to trade without any intermediaries like banks, and allows 
          to transact globally 24 X 7 with very low fees. Its main purpose is to eliminate problems caused 
          by transactions through financial institutions, including long processing time, fraud transactions, 
          and high transaction fees.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" component="h2" color="#7a2180" gutterBottom fontWeight="bold">
          Top Crypto Currencies
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {chartOptions.map((options, index) => (
            <Box key={index} sx={{ flex: '1 1 25%', minWidth: '300px' }}>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default CryptoMain;
