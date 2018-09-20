import { CHANGE_TEXT, INPUT_TEXT, SAVE_TEXT, CANSEL } from '../constants';

const initialState = {
    cellInfo: [
        {id: 12, text:'Hello World!'},
        {id: 22, text:'Hi!'},
        {id: 32, text:'Hey, guys!'},
        {id: 42, text:'It is a long time since I saw you last!'},
        {id: 52, text:'Hello!'},
    ],
    isWindowShow: false,
    selectedCellKey: null,
    value: '',
}

export const app = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            const index = state.cellInfo.findIndex(x => x.id === action.id);
            state.selectedCellKey = action.id;
            return {
                ...state, 
                isWindowShow: true,
                value: state.cellInfo[index].text,
                selectedCellKey: action.id,
            }
        case INPUT_TEXT:
            return {
                ...state, 
                value: action.text
            }
        case SAVE_TEXT:
            const indexCell = state.cellInfo.findIndex(x => x.id === state.selectedCellKey);
            let cellInfo = [...state.cellInfo];
            cellInfo[indexCell].text = state.value;
            return {
                ...state,
                cellInfo: cellInfo,
                value: '',
                isWindowShow: false

            }
            case CANSEL:
                return {
                    ...state,
                    value: '',
                    isWindowShow: false
                } 
        default:
            return state
    }
}