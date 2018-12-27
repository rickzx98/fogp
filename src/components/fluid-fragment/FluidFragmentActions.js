import { FluidFragmentActionTypes } from "./imports";

export const createNewFragment = (fragment) => dispatch => {
    dispatch({
        type: FluidFragmentActionTypes.TYPE_CREATE_FRAGMENT,
        payload: fragment
    });
};