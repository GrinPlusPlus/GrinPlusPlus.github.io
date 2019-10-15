import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes.js";

import logo from './static/img/GrinBanner_WhiteLetters.png';
import GitHubIcon from './static/img/GitHub-Mark-64px.png';
import GitterIcon from './static/img/gitter-icon.png';
import TelegramIcon from './static/img/telegram-512.png';
import WindowsIcon from './static/img/windows-512.png';
import MacIcon from './static/img/mac-icon.png';

import { Button, IconButton, Grid } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey, yellow } from "@material-ui/core/colors";

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
    constructor(props) {
        super(props);

        this.state = {
            version: null,
            downloadURL: null
        };
    }


    componentDidMount() {
        let macVersion = (navigator.appVersion.indexOf("Mac") !== -1);

        let self = this;
        fetch("https://api.github.com/repos/GrinPlusPlus/GrinPlusPlus/releases/latest")
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                let version = json.tag_name.substring(1);
                let downloadURL = "";
                const assets = json.assets;
                for (var i = 0; i < assets.length; i++) {
                    const asset = assets[i];
                    if (asset.browser_download_url != null) {
                        if ((macVersion && asset.browser_download_url.endsWith('.dmg'))
                            || (!macVersion && asset.browser_download_url.endsWith('.exe'))) {
                            downloadURL = asset.browser_download_url;
                            break;
                        }
                    }
                }

                console.log(version);
                self.setState({
                    version: version,
                    downloadURL: downloadURL
                });
            })
            .catch(function (error) {
                console.log(error);
                // This is where you run code if the server returns any errors
            });
    }

    render() {
        let macVersion = (navigator.appVersion.indexOf("Mac") !== -1);

        function getDownloadButton(app) {
            let version = app.state.version == null ? "" : "(" + app.state.version + ")";
            if (macVersion) {
                return (
                    <Button
                        variant='contained'
                        color='primary'
                        style={{ width: 'calc(150px + 2vw)', height: '50px', fontSize: 'calc(10px + .2vw)' }}
                        onClick={() => { window.location = app.state.downloadURL }}
                    >
                        <img src={MacIcon} alt={"Download Grin++ " + app.state.version + " (MacOS)"} style={{ width: 'calc(20px + .2vw)', marginRight: '5px' }} />
                        <b>Download {version}</b>
                    </Button>
                );
            } else {
                return (
                    <Button
                        variant='contained'
                        color='primary'
                        style={{ width: 'calc(150px + 2vw)', height: '50px', fontSize: 'calc(10px + .2vw)' }}
                        onClick={() => { window.location = app.state.downloadURL }}
                    >
                        <img src={WindowsIcon} alt={"Download Grin++ " + app.state.version + " (Win64)"} style={{ width: 'calc(20px + .2vw)', marginRight: '5px' }} />
                        <b>Download {version}</b>
                    </Button>
                );
            }
        }

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className="HeaderSubTitle">
                            Fast<span className="span-dot">.</span> Secure<span className="span-dot">.</span> Open Source<span className="span-dot">.</span>
                        </p>
                        <Grid container justify='center' spacing={2} style={{ width: '90%', margin: '0 auto' }}>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    style={{ width: 'calc(150px + 2vw)', height: '50px', fontSize: 'calc(10px + .2vw)', borderColor: 'white', borderWidth: '2px', borderStyle: 'solid' }}
                                    onClick={() => { window.location = 'https://github.com/GrinPlusPlus/GrinPlusPlus/wiki'}}
                                >
                                    <b>Learn More</b>
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'left' }}>
                                {getDownloadButton(this)}
                            </Grid>
                        </Grid>
                    </header>
                    <section>
                        <Routes {...this.state} />
                    </section>
                    <br /> <br />
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
