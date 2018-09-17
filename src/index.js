import React from 'react';
import ReactDOM from 'react-dom';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { Cell } from './Components/Cell';
import { CellList } from './Components/CellList';
import { Window } from './Components/ChangeWindow';
import { Cell } from './Components/Cell';


// import './index.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cellInfo: [
                {id: 12, text:'Hello World'},
                {id: 22, text:'Hi!'},
                {id: 32, text:'Hey, guys'},
                {id: 42, text:'It is a long time since I saw you last!'},
                {id: 52, text:'Hello!'},
            ],
            clickOnChange: false,
            selectedCellKey: null,
            value: '',

        }

    }

    changeClick = (event, key) => {
        const index = this.state.cellInfo.findIndex(x => x.id === key);
        this.setState(
            prevState => {
                return {
                    clickOnChange: true,
                    value: prevState.cellInfo[index].text,
                    selectedCellKey: key,
                }
            }
        )
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    saveClick = (event, key) => {
        const index = this.state.cellInfo.findIndex(x => x.id === this.state.selectedCellKey);
        this.setState(
            prevState => {
                let cellInfo = prevState.cellInfo;
                cellInfo[index].text = prevState.value;
                return {
                    clickOnChange: false,
                    cellInfo: cellInfo,
                }
        });
    }

    canselClick  = () => {
        this.setState({
            clickOnChange: false,
            value: '',
        })
    }

    render() {
        return (
            <Grid container spacing='24'>
                <Grid item xs='6'>
                    <CellList cellInfo={this.state.cellInfo} onClick={this.changeClick}/>
                </Grid>

                <Grid item xs='6'>
                    {this.state.clickOnChange && 
                        <Window 
                            clickOnSave={this.saveClick}
                            clickOnCancel={this.canselClick} 
                            onChange={this.handleChange} 
                            value={this.state.value}/>}
                </Grid>
            </Grid>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

