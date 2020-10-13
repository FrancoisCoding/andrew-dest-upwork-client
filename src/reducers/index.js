import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";
import destInfo from "../destInfo";

const initialState = {
  destinations: null,
  countryInput: "",
  destinationInput: "",
  destInfo: destInfo,
  checkInput: false,
  output: null,
  outputInfo: null,
  textObject: {
    borders: "Opened Borders",
    visa: "",
    quarantine: "",
    covid: "",
    temp: "",
    vColor: "green",
    color: "green",
  },
};

const initialReducer = (state = initialState, action) => {
  console.log('OUTPUT INFO',state.output)
  switch (action.type) {
    case actionTypes.SET_DESTINATIONS:
      return {
        ...state,
        destinations: action.payload,
      };
    case actionTypes.SET_OUTPUT:
      return {
        ...state,
        output: state.destinations.filter(
          (x) =>
            x.A.toLowerCase().includes(`${state.countryInput}`) &&
            x.B.toLowerCase().includes(`${state.destinationInput}`)
        )[0],
      };
    case actionTypes.SET_OUTPUT_INFO:
      return {
        ...state,
        outputInfo: action.payload,
      };
    case actionTypes.SET_SUGGESTION:
      return {
        ...state,
        suggestion: action.payload,
      };
    case actionTypes.UPDATE_DESTINATION:
      return {
        ...state,
        destinationInput: action.payload,
      };
    case actionTypes.UPDATE_COUNTRY:
      return {
        ...state,
        countryInput: action.payload,
      };
    case actionTypes.UPDATE_CHECK:
      return {
        ...state,
        checkInput: action.payload,
      };
    case actionTypes.SEARCH_DEST:
      return {
        ...state,
        outputInfo: destInfo.find((o) => o.A == state.output.B),
      };
    case actionTypes.SET_TEXT_OBJECT:
      return {
        ...state,
        textObject: {
          borders: state.outputInfo.B === 'Y' ? 'Opened Borders' : 'Closed Borders',
          visa: "Visa-free",
          quarantine: "No",
          covid: "No",
          temp: "No",
        },
      };
    case actionTypes.SET_TEXT_OBJECT_VF:
      return {
        ...state,
        textObject: {
          borders: state.outputInfo.B === 'Y' ? 'Opened Borders' : 'Closed Borders',
          visa: "Visa-free",
          quarantine: "No",
          covid: "No",
          temp: "No",
        },
      };
    case actionTypes.SET_TEXT_OBJECT_VOA:
      return {
        ...state,
        textObject: {
          borders: state.outputInfo.B === 'Y' ? 'Opened Borders' : 'Closed Borders',
          visa: "Visa on Arrival",
          quarantine: "No",
          covid: "No",
          temp: "No",
          vColor: "yellow",
          color: "green",
        },
      };
    case actionTypes.SET_TEXT_OBJECT_ETA:
      return {
        ...state,
        textObject: {
          borders: state.outputInfo.B === 'Y' ? 'Opened Borders' : 'Closed Borders',
          visa: "Electronic Travel Authority",
          quarantine: "No",
          covid: "No",
          temp: "No",
          vColor: "yellow",
          color: "green",
        },
      };
    case actionTypes.SET_TEXT_OBJECT_VR:
      return {
        ...state,
        textObject: {
          borders: state.outputInfo.B === 'Y' ? 'Opened Borders' : 'Closed Borders',
          visa: "Visa Required",
          quarantine: "Yes",
          covid: "Yes",
          temp: "Yes",
          vColor: "red",
          color: "red",
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state: initialReducer,
});

export default rootReducer;
