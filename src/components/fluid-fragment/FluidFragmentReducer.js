import { FluidFragmentActionTypes } from "./imports";

export default (state = defaultState, action) => {
    switch (action.type) {
        case FluidFragmentActionTypes.TYPE_CREATE_FRAGMENT: {
            const { path, fragment } = action.payload;
            return state;
        }
        default:
            return state;
    }
};

const defaultState =
{
    "$$root_fragment": {
        fragments: {
            "$$$fragment_properties": {
                fragmentType: "div",
                fragmentProps: {}
            }
        },
        fragmentType: "div",
        fragmentProps: {}
    }
};