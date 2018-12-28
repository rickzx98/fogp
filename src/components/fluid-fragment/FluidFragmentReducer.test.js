import { FluidFragment } from "./FluidFragmentModel";
import { FluidFragmentActionTypes } from "./imports";
import FluidFragmentDefaultState from "./FluidFragmentDefaultState";
import FluidFragmentReducer from "./FluidFragmentReducer";

it("should add a new fragment to 1st layer fragment", () => {
    const state = {
        ...FluidFragmentDefaultState
    };
    state[FluidFragment.ROOT_FRAGMENT_ID].fragments["firstLayerFragment"] = new FluidFragment("firstLayerFragment");
    const newState = FluidFragmentReducer(state, {
        type: FluidFragmentActionTypes.TYPE_CREATE_FRAGMENT,
        payload: {
            path: "firstLayerFragment",
            fragment: new FluidFragment("SampleFragment")
        }
    });
    expect(newState[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayerFragment.fragments.SampleFragment).toBeDefined();
});
it("should add a new fragment to $$root_fragment", () => {
    const state = { ...FluidFragmentDefaultState };
    const newState = FluidFragmentReducer(state, {
        type: FluidFragmentActionTypes.TYPE_CREATE_FRAGMENT,
        payload: {
            fragment: new FluidFragment("SampleFragment")
        }
    });
    expect(newState[FluidFragment.ROOT_FRAGMENT_ID].fragments.SampleFragment).toBeDefined();
});

it("should activate a fragment first layer", () => {
    const state = { ...FluidFragmentDefaultState };
    state[FluidFragment.ROOT_FRAGMENT_ID].fragments.sampleFragment = {};
    const newState = FluidFragmentReducer(state, {
        type: FluidFragmentActionTypes.TYPE_ACTIVATE_FRAGMENT,
        payload: "sampleFragment"
    });
    expect(newState[FluidFragment.ROOT_FRAGMENT_ID].fragments.sampleFragment.active).toEqual(true);
});

it("should activate a fragment second layer", () => {
    const state = { ...FluidFragmentDefaultState };
    state[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayer = { fragments: {} };
    state[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayer.fragments.sampleFragment = {};
    const newState = FluidFragmentReducer(state, {
        type: FluidFragmentActionTypes.TYPE_ACTIVATE_FRAGMENT,
        payload: "firstLayer.sampleFragment"
    });
    expect(newState[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayer.fragments.sampleFragment.active).toEqual(true);
});


it("should activate a fragment third layer", () => {
    const state = { ...FluidFragmentDefaultState };
    state[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayer = { fragments: {} };
    state[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayer.fragments.secondLayer = { fragments: {} };
    state[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayer.fragments.secondLayer.fragments.sampleFragment = {};
    const newState = FluidFragmentReducer(state, {
        type: FluidFragmentActionTypes.TYPE_ACTIVATE_FRAGMENT,
        payload: "firstLayer.secondLayer.sampleFragment"
    });
    expect(newState[FluidFragment.ROOT_FRAGMENT_ID].fragments.firstLayer.fragments.secondLayer.fragments.sampleFragment.active).toEqual(true);
});