import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from 'redux';

interface reduxState {
  value: number;
  at: Array<any>;
  mainHorse: number;
  races: any;
  raceLength: any;
  barn: number;
  day: number;
}

const initialState: reduxState = {
  value: 225,
  at: [0],
  mainHorse: 0,
  races: {
    Easy: 12,
    Middle: 48,
    Hard: 71,
  },
  raceLength: {
    Easy: 400,
    Middle: 800,
    Hard: 1600,
  },
  barn: 7,
  day: 1,
};

const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    setmoney: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

const atSlice = createSlice({
  name: 'at',
  initialState,
  reducers: {
    setat: (state, action: PayloadAction<Array<any>>) => {
      state.at = action.payload;
    },
  },
});

const mainHorseSlice = createSlice({
  name: 'mainHorse',
  initialState,
  reducers: {
    setmainHorse: (state, action: PayloadAction<number>) => {
      state.mainHorse = action.payload;
    },
  },
});

const racesSlice = createSlice({
  name: 'races',
  initialState,
  reducers: {
    setraces: (state, action: PayloadAction<any>) => {
      state.races = action.payload;
    },
  },
});

const raceLengthSlice = createSlice({
  name: 'raceLength',
  initialState,
  reducers: {
    setraceLength: (state, action: PayloadAction<any>) => {
      state.raceLength = action.payload;
    },
  },
});

const barnSlice = createSlice({
  name: 'barn',
  initialState,
  reducers: {
    setbarn: (state, action: PayloadAction<number>) => {
      state.barn = action.payload;
    },
  },
});

const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    setday: (state, action: PayloadAction<number>) => {
      state.day = action.payload;
    },
  },
});

export const {setmoney} = moneySlice.actions;
export const moneyReducer = moneySlice.reducer;

export const {setat} = atSlice.actions;
export const atReducer = atSlice.reducer;

export const {setmainHorse} = mainHorseSlice.actions;
export const mainHorseReducer = mainHorseSlice.reducer;

export const {setraces} = racesSlice.actions;
export const racesReducer = racesSlice.reducer;

export const {setraceLength} = raceLengthSlice.actions;
export const raceLengthReducer = raceLengthSlice.reducer;

export const {setbarn} = barnSlice.actions;
export const barnReducer = barnSlice.reducer;

export const {setday} = daySlice.actions;
export const dayReducer = daySlice.reducer;

const rootReducer = combineReducers({
  money: moneyReducer,
  at: atReducer,
  mainHorse: mainHorseReducer,
  races: racesReducer,
  raceLength: raceLengthReducer,
  barn: barnReducer,
  day: dayReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
