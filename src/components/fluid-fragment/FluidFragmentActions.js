import { FluidFragmentActionTypes } from "./imports";

export const createNewFragment = (fragment, path) => dispatch => {
    dispatch({
        type: FluidFragmentActionTypes.TYPE_CREATE_FRAGMENT,
        payload: { fragment, path }
    });
};

export const activateFragment = (path) => dispatch => {
    dispatch({
        type: FluidFragmentActionTypes.TYPE_ACTIVATE_FRAGMENT,
        payload: path
    });
}