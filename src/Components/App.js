import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CellList } from './CellList';
import { Window } from './Window';
import { connect } from 'react-redux';
import { changeText, inputText, saveText, cansel } from '../actions/index';

class App extends React.Component {

    changeClick = (event, id) => {
        this.props.dispatch(changeText(id));
    }

    handleChange = (event) => {
        this.props.dispatch(inputText(event.target.value));
    }

    saveClick = () => {
        this.props.dispatch(saveText());
    }

    canselClick = () => {
        this.props.dispatch(cansel());
    }

    render() {
        return (
            <Grid container spacing='24'>
                <Grid item xs='6'>
                    <CellList 
                        cellInfo={this.props.cellInfo} 
                        onClick={this.changeClick}
                    />
                </Grid>

                <Grid item xs='6'>
                    { this.props.isWindowShow && 
                        <Window 
                            clickOnSave={this.saveClick}
                            clickOnCancel={this.canselClick}
                            onChange={this.handleChange} 
                            value={this.props.value}
                        />
                    }
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cellInfo: state.app.cellInfo,
        isWindowShow: state.app.isWindowShow,
        value: state.app.value,
    }
}
export default connect(mapStateToProps)(App)