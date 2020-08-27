import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import amber from '@material-ui/core/colors/amber';

import Header from './header/header.js';
import Content from './content/content.js';
//Explain the below code - TODO
import { withAuthenticator } from "aws-amplify-react";

import Amplify from "@aws-amplify/core"; 
import aws_exports from "./aws-exports";


import './App.css';
Amplify.configure(aws_exports);


const useStyles = makeStyles((theme) => ({
    appRoot: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        alignItems: 'center'
    },
    toolbar: theme.mixins.toolbar,
}));

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: amber,
    },
});

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.appRoot} >
                <Header />
                <div className={classes.toolbar} />
                <Content />
            </div>
        </ThemeProvider>
    );
}

export default withAuthenticator(App);
