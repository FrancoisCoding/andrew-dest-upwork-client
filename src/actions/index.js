import axios from "axios";
import * as actionTypes from "./types";
import firebaseDest from "../firebaseDest";

const databaseRef = firebaseDest.database().ref();

export const setDestinations = () => (dispatch) => {
  databaseRef.on("value", (snapshot) => {
    dispatch({ type: actionTypes.SET_DESTINATIONS, payload: snapshot.val() });
  });
};

export const updateCountry = (country) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_COUNTRY, payload: country });
};

export const updateDestination = (destination) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_DESTINATION, payload: destination });
};

export const updateCheck = (check) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_CHECK, payload: check });
};

export const setOutput = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_OUTPUT });
};

export const setOutputInfo = (foundObj) => (dispatch) => {
  dispatch({ type: actionTypes.SET_OUTPUT_INFO, payload: foundObj });
};

export const setSuggestion = (foundObj) => (dispatch) => {
  dispatch({ type: actionTypes.SET_SUGGESTION, payload: foundObj });
};

export const setTextObject = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_TEXT_OBJECT });
};

export const setTextObjectVF = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_TEXT_OBJECT_VF });
};

export const setTextObjectVOA = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_TEXT_OBJECT_VOA });
};

export const setTextObjectETA = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_TEXT_OBJECT_ETA });
};

export const setTextObjectVR = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_TEXT_OBJECT_VR });
};

export const searchDest = () => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_DEST });
};
