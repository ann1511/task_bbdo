import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

export class Cell extends React.Component {
    render() {
        return (
            <Paper elevation='4'>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            // label="Read Only"
                            multiline rowsMax="4"
                            defaultValue="Hello World"
                            value={this.props.value}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Button 
                            key={this.props.buttonKey}
                            color="primary"
                            onClick={event => this.props.onClick(event, this.props.buttonKey)}
                        >
                            Change
                        </Button>
                    </Grid>
                </Grid>
            </Paper>      
        
        )
    }
}

