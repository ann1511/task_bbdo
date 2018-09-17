import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

export class Window extends React.Component {
    render() {
        return (
            <Paper elevation='4'>
                <Grid container  justify="flex-end">
                    <Grid item xs={12}>
                        <TextField
                            multiline rowsMax="8"
                            rows='8'
                            margin="none"
                            fullWidth={true}
                            value={this.props.value}
                            onChange={this.props.onChange}
                            
                        />
                    </Grid>
                    <Grid item xs='2'>
                        <Button color="primary" onClick={this.props.clickOnSave}>
                            Save
                        </Button>
                    </Grid>
                    <Grid item xs='2'>
                        <Button color="primary" onClick={this.props.clickOnCancel}>
                            Cansel
                        </Button>
                    </Grid>
                </Grid>
            </Paper>      
        
        )
    }
}