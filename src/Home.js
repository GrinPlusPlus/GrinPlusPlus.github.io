import React, { Component } from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

import SendViaFile from './static/img/SendViaFile.gif';

import { Grid, Paper, Typography } from '@material-ui/core';
import UsabilityIcon from '@material-ui/icons/InsertEmoticonOutlined';
import LightningIcon from '@material-ui/icons/FlashOnOutlined';
import PrivateIcon from '@material-ui/icons/Fingerprint';//VpnKey
import ScalableIcon from '@material-ui/icons/CloudOutlined';


class Home extends Component {
    render() {
        function lightningFast() {
            return (
                <Paper className='Paper' style={{ backgroundColor: 'black' }}>
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
            );
        }

        function easyToUse() {
            return (
                <Paper className='Paper' style={{ backgroundColor: 'black' }}>
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
            );
        }

        function highlyScalable() {
            return (
                <Paper className='Paper' style={{ backgroundColor: 'black' }}>
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
            );
        }

        function privateAndSecure() {
            return (
                <Paper className='Paper' style={{ backgroundColor: 'black' }}>
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
            );
        }

        return (
            <React.Fragment>
                <section>
                    <br /><br /><br />
                    <Grid container spacing={0} justify='center' style={{ width: '90%', margin: '0 auto'}}>
                        <Grid item xs={6} md={3}>
                            { lightningFast() }
                        </Grid>
                        <Grid item xs={6} md={3}>
                            { easyToUse() }
                        </Grid>
                        <Grid item xs={6} md={3}>
                            { highlyScalable() }
                        </Grid>
                        <Grid item xs={6} md={3}>
                            { privateAndSecure() }
                        </Grid>
                    </Grid>
                </section><br /><br /><br />
                <section style={{ backgroundColor: '#aaaaaa', padding: '40px 0px' }}>
                    <img src={SendViaFile} alt='Send Via File' style={{ width: 'calc(200px + 40vw)' }} />
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(Home);