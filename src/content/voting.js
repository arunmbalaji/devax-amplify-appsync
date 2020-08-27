import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

import * as api from '../backend/api'

const useStyles = makeStyles((theme) => ({
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        maxWidth: '900px',
        minWidth: '600px',
        marginTop: '50px'
    },
    question: {
        marginBottom: '30px'
    },
    comment: {
        marginTop: '20px',
        marginBottom: '10px',
    },
    submit: {
        alignSelf: 'flex-end'
    }
}));

const options = [
    'React',
    'Vue',
    'Angular',
    'Bootstrap',
    'None'
];

export default function (props) {
    const classes = useStyles();

    const [selection, setSelection] = useState();
    const [comment, setComment] = useState();

    const handleSelection = event => {
        setSelection(event.target.value);
        console.log()
    };

    return (
        < Paper className={classes.contentRoot} variant='elevation' elevation={3} >

            <Typography variant="subtitle1" className={classes.question}> Which front-end library or framework do you use?</Typography>

            <RadioGroup value={selection} onChange={handleSelection}>
                {props.options.map(item => <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
            </RadioGroup>

            <TextField className={classes.comment} value={comment} label="Comment" variant="outlined" onChange={event => setComment(event.target.value)} />

            <Button className={classes.submit}> Submit</Button>
        </Paper >
    );
}