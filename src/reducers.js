import { combineReducers } from "redux";
import fluidFragment from "./components/fluid-fragment/FluidFragmentReducer";
import fragmentContainer from "./components/fluid-fragment/fragment-container/FragmentContainerReducer";

export default combineReducers({
    fluidFragment,
    fragmentContainer
});