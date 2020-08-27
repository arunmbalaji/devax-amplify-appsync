import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DoneIcon from '@material-ui/icons/Done';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { CircularProgress } from '@material-ui/core';
import Voting from './voting';
import Summary from './summary';

import * as api from '../backend/api'

const useStyles = makeStyles((theme) => ({
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progress: {
        width: '100px',
        height: '100px',
        margin: '20px',
        color: 'white'
    },
    loadingtext: {
        color: 'white'
    }
}));

const options = [
    'React',
    'Vue',
    'Angular',
    'Bootstrap',
    'None'
];

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const comments = [
    'asdfasdfasdfadf',
    'asdf asdfg asf asdfg ',
    'asdfg asfdg asfg asfg',
    'zxvbsthsdfb sdfb sdghn s',
    'asfgskfy bvc dfj dh'
]

export default function (props) {
    const classes = useStyles();

    const [vote, setVote] = useState();

    useEffect(() => {
        async function getVoteHelper() {
            // const vote = await api.getVote();
            

            // TODO
            setVote(vote);
        }
        getVoteHelper();
    }, []);

    return (vote !== undefined ?
        (
            vote.selection === undefined ?
                < Voting options={options} />
                :
                <Summary data={data} comments={comments} />
        )
        :
        <Dialog open={vote === undefined} PaperProps={{
            style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
        }}>
            <DialogContent className={classes.dialog}>
                <Typography variant='h5' className={classes.loadingtext}> Loading...</Typography>
                <CircularProgress className={classes.progress} />
            </DialogContent>
        </Dialog>
    );
}