import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    appbar: {
        flex: '1 1 auto',
        display: 'block'
    },
    title: {
        flexGrow: 1,
        marginLeft: '10px',
    },
}));

export default function (props) {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <Typography variant="h5" className={classes.title}> Amplify-AppSync Voting app</Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
}