import React, { Component } from 'react';

import {
    Grid, Paper, Typography,
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const MuiExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
})(ExpansionPanel);

const MuiExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
})(ExpansionPanelSummary);
  
const MuiExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
      textAlign: 'left'
    },
}))(ExpansionPanelDetails);

class FAQ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: 'panel1'
        };
    }

    handleChange(newExpanded) {
        const newValue = (this.state.expanded == newExpanded ? '' : newExpanded);
        this.setState({
            expanded: newValue
        });
    }

    render() {
        return (
            <React.Fragment>
                <section style={{ backgroundColor: '#aaaaaa', padding: '0px 0px 100px 0px' }}>
                    <br /><br /><br />
                    <Grid container spacing={0} justify='center' style={{ width: '90%', margin: '0 auto'}}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Paper>
                                <br /><Typography color="secondary" variant="h3">Support &amp; FAQ</Typography><br />
                                <MuiExpansionPanel square expanded={this.state.expanded === 'panel1'} onChange={() => {this.handleChange('panel1')}}>
                                    <MuiExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography color="secondary">What's my address?</Typography>
                                    </MuiExpansionPanelSummary>
                                    <MuiExpansionPanelDetails>
                                        <Typography color="secondary">
                                            Grin doesn't have addresses in the same way that bitcoin does, since transactions are built interactively. If an exchange or pool requests your "address", 
                                            most often it's referring to your http(s) address, which you can find by logging into your Grin++ wallet and clicking the "Receive" button.
                                        </Typography>
                                    </MuiExpansionPanelDetails>
                                </MuiExpansionPanel>
                                <MuiExpansionPanel square expanded={this.state.expanded === 'panel2'} onChange={() => {this.handleChange('panel2')}}>
                                    <MuiExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography color="secondary">Unable to send and/or receive</Typography>
                                    </MuiExpansionPanelSummary>
                                    <MuiExpansionPanelDetails>
                                        <Typography color="secondary">
                                            <ul>
                                                <li>
                                                    <b>Are you running the latest version?</b><br />
                                                    Grin++ should update automatically, but the updater doesn't always work as well as it should. Make sure you're running the <a href="https://github.com/GrinPlusPlus/GrinPlusPlus/releases/latest">latest version</a>.
                                                </li>
                                                <li>
                                                    <b>Are you trying to withdraw from Kucoin?</b><br />
                                                    Kucoin no longer supports ngrok withdrawals. If you know how to setup port forwarding on your router, forward port 3415, and withdraw to address http://&lt;YOUR_PUBLIC_IP&gt;:3415
                                                    To determine your public IP address, you may visit <a href="https://www.whatismyip.com">https://www.whatismyip.com</a>
                                                </li>
                                                <li>
                                                    <b>Has Grin++ been running a while?</b><br/>
                                                    ngrok addresses will timeout after 8 hours, and although Grin++ should renew, the renew logic isn't well tested. Also, Grinbox frequently disconnects with no indication to the user. Try restarting Grin++ to resolve both issues.
                                                </li>
                                            </ul>
                                        </Typography>
                                    </MuiExpansionPanelDetails>
                                </MuiExpansionPanel>
                                <MuiExpansionPanel square expanded={this.state.expanded === 'panel3'} onChange={() => {this.handleChange('panel3')}}>
                                    <MuiExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography color="secondary">Problems connecting or syncing</Typography>
                                    </MuiExpansionPanelSummary>
                                    <MuiExpansionPanelDetails>
                                        <Typography color="secondary">
                                            <b>Error dialog: "Error occurred in GrinNode process. Try restarting Grin++."</b> <br />
                                            <ul>
                                                <li>
                                                    <b>Are you running the latest version?</b><br />
                                                    Grin++ should update automatically, but the updater doesn't always work as well as it should. Make sure you're running the <a href="https://github.com/GrinPlusPlus/GrinPlusPlus/releases/latest">latest version</a>.
                                                </li>
                                                <li>
                                                    <b>Are you running a supported OS?</b><br />
                                                    We officially support Windows 7 &amp; 10, Mac OS High Sierra &amp; later, and most linux distros (experimental). <br />
                                                </li>
                                                <li>
                                                    <b>Is a grin node running locally?</b><br />
                                                    Grin interferes with Grin++. 2 nodes cannot be running at the same time on a machine. Also note, Niffler starts a node by default which stays running even after closing Niffler. 
                                                    Check your task manager and kill any processes named "Grin" and reopen Grin++.
                                                </li>
                                                <li>
                                                    <b>Has it worked before?</b><br />
                                                    If you've used Grin++ in the past, just recently started receiving this error, and another node is not already running:
                                                    Your chain data is likely corrupt. Delete "%userprofile%/.GrinPP/MAINNET/NODE" on windows or "~/.GrinPP/MAINNET/NODE" on Mac/Linux and then open Grin++.
                                                </li>
                                                <li>
                                                    <b>Still receiving the error?</b><br />
                                                    I've tried hard to make Grin++ compatible with all 64-bit machines, but some users have still reported incompatibilities with their operating systems. 
                                                    You'll either need to update to the latest version of your operating system, or use another wallet until the incompatibility is resolved.
                                                </li>
                                            </ul>
                                        </Typography>
                                    </MuiExpansionPanelDetails>
                                </MuiExpansionPanel>
                                <MuiExpansionPanel square expanded={this.state.expanded === 'panel4'} onChange={() => {this.handleChange('panel4')}}>
                                    <MuiExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
                                        <Typography color="secondary">Where can I donate?</Typography>
                                    </MuiExpansionPanelSummary>
                                    <MuiExpansionPanelDetails>
                                        <Typography color="secondary">
                                            See our <Link to="/donate/">donation page</Link>.
                                        </Typography>
                                    </MuiExpansionPanelDetails>
                                </MuiExpansionPanel>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(FAQ);