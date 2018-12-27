import { FluidFragmentActionTypes } from "./imports";
import FluidFragmentDefaultState from "./FluidFragmentDefaultState";
export default (state = FluidFragmentDefaultState, action) => {
    switch (action.type) {
        case FluidFragmentActionTypes.TYPE_CREATE_FRAGMENT: {
            return addFragment(state, action.payload.fragment, action.payload.path);
        }
        case FluidFragmentActionTypes.TYPE_ACTIVATE_FRAGMENT: {
            const path = action.payload;
            return activateFragment(state, path);
        }
        default:
            return state;
    }
};
const findFragment = (state, path) => {
    if (path) {
        path = "$$root_fragment." + path;
        const splitted = path.split(/\./g);
        let stateValue = state;
        for (let index = 0; index < splitted.length; index++) {
            stateValue = stateValue[splitted[index]];
            if (index !== splitted.length - 1) {
                stateValue = stateValue.fragments;
            }
        }
        return stateValue;
    }
    return state["$$root_fragment"];
};
const activateFragment = (state, path) => {
    let stateValue = findFragment(state, path);
    stateValue.active = true;
    return { ...state };
};

const addFragment = (state, fragment, path) => {
    const stateValue = findFragment(state, path);
    if (!stateValue.fragments) {
        stateValue.fragments = {};
    }
    stateValue.fragments[fragment.fragmentId] = fragment;
    return { ...state };
};