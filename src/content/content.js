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
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import awsconfig from "../aws-exports";
import * as api from '../backend/api'

Amplify.configure(awsconfig);

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

    const handleClick = (selection, comment) => {
        API.graphql(
            graphqlOperation(mutations.createVoting, {
                input: {
                    choice: selection,
                    comment: comment,
                }
            })
        )
            .then(data => {
                console.log('Added');
            })
            .catch(err => {
                console.log('Failed', err);
            });
    };

    return (
        <div>
            <Voting options={options} handleClick={handleClick} />
            <Summary />
        </div>
    );


    // return (vote !== undefined ?
    //     (
    //         vote === undefined ?
    //             <Voting options={options} vote={vote} handleClick={handleClick} />
    //             :
    //             <Summary data={data} comments={comments} />
    //     )
    //     :
    //     <Dialog open={vote === undefined} PaperProps={{
    //         style: {
    //             backgroundColor: 'transparent',
    //             boxShadow: 'none',
    //         },
    //     }}>
    //         <DialogContent className={classes.dialog}>
    //             <Typography variant='h5' className={classes.loadingtext}> Loading...</Typography>
    //             <CircularProgress className={classes.progress} />
    //         </DialogContent>
    //     </Dialog>
    // );
}