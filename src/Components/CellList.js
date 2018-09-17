import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Cell } from '../Components/Cell';

export class CellList extends React.Component {

    render() {
        const cells = [...Array(this.props.cellInfo.length).keys()].map((x,index) => 
            <Cell 
                key={this.props.cellInfo[index].id}
                buttonKey={this.props.cellInfo[index].id}
                value={this.props.cellInfo[index].text} 
                onClick={this.props.onClick}/>
            );
        return (
                <Grid 
                    container spacing='24'
                    direction="column"
                    justify="center"
                    // alignItems="baseline"
                >
                    <Grid item xs='12'>
                        {cells}
                    </Grid>
                </Grid>
        );
    }
}