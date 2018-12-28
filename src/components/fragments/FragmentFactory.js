import { React } from "./imports";
import RootFragmentComponent from "./RootFragmentComponent";

export default (fragmentType) => {
    switch (fragmentType) {
        case "Root":
            return RootFragmentComponent;
        default:
            return function CommonDivFragment(props) { return <div {...props} />; };
    }
};