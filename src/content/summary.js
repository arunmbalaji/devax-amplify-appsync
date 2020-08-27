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
import { PieChart, Pie, Cell } from 'recharts';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import * as subscriptions from "../graphql/subscriptions";
import awsconfig from "../aws-exports";

import * as api from '../backend/api'

const useStyles = makeStyles((theme) => ({
    comment: {
        alignSelf: 'flex-end',
        marginLeft: '30px'
    },
    title: {
        marginTop: '30px'
    }
}));

const colors = ['#e74c3c', '#af7ac5', '#5dade2', '#16a085', '#f1c40f', '#95a5a6', '#b03a2e'];

export default function (props) {
    const classes = useStyles();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        API.graphql(
            graphqlOperation(subscriptions.onCreateVoting)
        ).subscribe(newVoting => {
            console.log('newVoting', comments)
            comments.unshift(newVoting.value.data.onCreateVoting.comment);
            setComments([...comments]);
        });
    }, []);



    return (
        <div>
            {/* <PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={props.data} cx={200} cy={200} outerRadius={80} label={entry => entry.name} >
                    {
                        props.data.map((entry, index) => <Cell fill={colors[index % colors.length]} />)
                    }
                </Pie>
            </PieChart> */}

            <Typography className={classes.title} variant="h6" > Comments</Typography>
            {
                comments.map(comment => <Typography variant="body1" className={classes.comment}> {comment}</Typography>)
            }
        </div>
    );
}