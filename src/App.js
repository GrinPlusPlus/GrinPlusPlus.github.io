import React, { Component } from 'react';
import './App.css';

import logo from './static/img/GrinBanner_WhiteLetters.png';
import SendViaFile from './static/img/SendViaFile.gif';
import GitHubIcon from './static/img/GitHub-Mark-64px.png';
import GitterIcon from './static/img/gitter-icon.png';
import TelegramIcon from './static/img/telegram-512.png';
import WindowsIcon from './static/img/windows-512.png';

import { Button, IconButton, Grid, Paper, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey, yellow } from "@material-ui/core/colors";
import UsabilityIcon from '@material-ui/icons/InsertEmoticonOutlined';
import LightningIcon from '@material-ui/icons/FlashOnOutlined';
import PrivateIcon from '@material-ui/icons/Fingerprint';//VpnKey
import ScalableIcon from '@material-ui/icons/CloudOutlined';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: grey[800]
        },
        primary: {
            main: yellow[500],
        },
        text: {
            primary: "#ffffff",
            secondary: "#cccccc",
            disabled: "#444444"
        },
    },
    typography: {
        useNextVariants: true,
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "Lato",
            "sans-serif"
        ].join(",")
    },
    overrides: {
        MuiDialog: {
            paper: {
                backgroundColor: '#DDDDDD',
                border: '#FFEB3B 2px solid'
            }
        }
    }
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className="HeaderSubTitle">
                            Fast<span className="span-dot">.</span> Secure<span className="span-dot">.</span> Open Source<span className="span-dot">.</span>
                        </p>
                        <Grid container spacing={24}>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    style={{ width: '200px', height: '50px', borderColor: 'white', borderWidth: '2px', borderStyle: 'solid' }}
                                    onClick={() => { window.location = 'https://github.com/GrinPlusPlus/GrinPlusPlus/wiki'}}
                                >
                                    <b>Learn More</b>
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'left' }}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{ width: '200px', height: '50px' }}
                                    onClick={() => { window.location = 'https://github.com/GrinPlusPlus/GrinPlusPlus/releases/download/v0.3.1/Grin++_v0.3.1_Win64.zip' }}
                                >
                                    <img src={WindowsIcon} style={{ height: '32px', marginRight: '5px' }} />
                                    <b>Download (0.3.1)</b>
                                </Button>
                            </Grid>
                        </Grid>
                    </header>
                    <section>
                        <br /><br /><br />
                        <Grid container spacing={0}>
                            <Grid item xs={2} />
                            <Grid item xs={2}>
                                <Paper style={{ backgroundColor: '#000000', margin: '5px', margin: '5px', paddingTop: '10px', height: '100%' }}>
                                    <LightningIcon color="primary" fontSize="large" style={{ marginTop: '25px', marginBottom: '15px', transform: 'scale(2)' }} />
                                    <Typography color="textPrimary" variant="h4">Lightning Fast</Typography>
                                    <Typography color="textPrimary" variant="h6" style={{ width: '100%', textAlign: 'left' }}>
                                        <ul>
                                            <li>Send & receive instantly</li>
                                            <li>Restore wallets in seconds</li>
                                            <li>Node fully syncs in minutes</li>
                                        </ul>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper style={{ backgroundColor: '#000000', margin: '5px', paddingTop: '10px', height: '100%' }}>
                                    <UsabilityIcon color="primary" fontSize="large" style={{ marginTop: '25px', marginBottom: '15px', transform: 'scale(2)' }} />
                                    <Typography color="textPrimary" variant="h4">Easy To Use</Typography>
                                    <Typography color="textPrimary" variant="h6" style={{ width: '100%', textAlign: 'left' }}>
                                        <ul>
                                            <li>Transact via file, http(s), or grinbox</li>
                                            <li>100% compatible with grin-wallet</li>
                                            <li>i2p support coming soon</li>
                                        </ul>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper style={{ backgroundColor: '#000000', margin: '5px', paddingTop: '10px', height: '100%' }}>
                                    <ScalableIcon color="primary" fontSize="large" style={{ marginTop: '25px', marginBottom: '15px', transform: 'scale(2)' }} />
                                    <Typography color="textPrimary" variant="h4">Highly Scalable</Typography>
                                    <Typography color="textPrimary" variant="h6" style={{ width: '100%', textAlign: 'left' }}>
                                        <ul>
                                            <li>Ultra-modular design</li>
                                            <li>Powerful multi-user wallet</li>
                                            <li>Adjustable caching</li>
                                        </ul>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper style={{ backgroundColor: '#000000', margin: '5px', paddingTop: '10px', height: '100%' }}>
                                    <PrivateIcon color="primary" fontSize="large" style={{ marginTop: '25px', marginBottom: '15px', transform: 'scale(2)' }} />
                                    <Typography color="textPrimary" variant="h4">Private & Secure</Typography>
                                    <Typography color="textPrimary" variant="h6" style={{ width: '100%', textAlign: 'left' }}>
                                        <ul>
                                            <li>Your keys, your coins</li>
                                            <li>Fully-encrypted wallet</li>
                                            <li>Transact via i2p (WIP)</li>
                                        </ul>
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </section><br /><br /><br />
                    <section style={{ backgroundColor: '#aaaaaa', padding: '30px' }}>
                        <img src={SendViaFile} alt='Send Via File' style={{ height: '65vmin' }} />
                    </section>
                    <footer>
                        <a href='https://github.com/GrinPlusPlus/GrinPlusPlus'><IconButton><img src={GitHubIcon} alt='GitHub' style={{ height: '32px' }} /></IconButton></a>
                        <a href='https://gitter.im/GrinPlusPlus/community'><IconButton><img src={GitterIcon} alt='Gitter' style={{ height: '32px' }} /></IconButton></a>
                        <a href='https://t.me/GrinPP'><IconButton><img src={TelegramIcon} alt='Telegram' style={{ height: '32px' }} /></IconButton></a>
                    </footer>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
