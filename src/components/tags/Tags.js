import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Card, CardContent, Container} from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/redmasters">
                redmasters
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Tags() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://spent-api-production.up.railway.app/api/v1/expense/tags');
                const data = await response.json();
                console.log(data)
                setData(data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }

        fetchData();
    }, []);
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (data) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon sx={{mr: 2}}/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Spent App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <Container sx={{py: 8}} maxWidth="sm">
                    <Grid container spacing={4}>
                    {data.map((tag) => (
                        <Grid item key={tag}>
                            <Card
                                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                            >
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <p>{tag}</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    {/* End hero unit */}
                    </Grid>
                    </Container>
                </main>
                {/* Footer */
                }
                <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        SPENT-APP
                    </Typography>
                    <Copyright/>
                </Box>
                {/* End footer */
                }
            </ThemeProvider>
        );
    }
    return <p>No data</p>


    }
