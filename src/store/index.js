import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';
import keypadSlice from './keypadSlice';
import modeSlice from './modeSlice';

const store = configureStore({
    reducer:{
        board:boardSlice.reducer,
        keypad:keypadSlice.reducer,
        mode:modeSlice.reducer,
    }

}
)

export default store;