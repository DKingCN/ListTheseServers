import React from 'react';

import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';

import ServerCardStatusIcon from './ServerCardStatusIcon';
import ServerActivityDialog from '../activity/ServerActivityDialog';


class ServerCard extends React.Component {
    /**
     * Represents a single server; each server will regularly
     * be updated using a tick function
     * @param {*} props 
     */


    render() {

        return (
            <Card>
                <CardHeader
                    action={
                        <ServerCardStatusIcon status={this.props.status} />
                    }
                    title={this.props.serverName}
                    subheader={`${this.props.ipAddress}:${this.props.port}`}

                />
                <CardContent>
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ServerActivityDialog serverName={this.props.serverName} />
                    <Button size="small" color="primary">Copy</Button>
                </CardActions>
            </Card>
        );
    }
}


export default ServerCard;
