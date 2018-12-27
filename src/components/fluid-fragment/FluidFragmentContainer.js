import * as actions from "./FluidFragmentActions";

import { React, bindActionCreators, connect } from "./imports";

import FluidFragment from "./FluidFragmentComponent";

const MAIN_FRAGMENT = "$$root_fragment";

class FluidFragmentContainer extends React.Component {
    render() {
        return <FluidFragment fragmentId={MAIN_FRAGMENT}
            fragmentProps={this.props.fluidFragment[MAIN_FRAGMENT].fragmentProps}
            fragments={this.props.fluidFragment[MAIN_FRAGMENT].fragments}
            fragmentType={this.props.fluidFragment[MAIN_FRAGMENT].fragmentType}
            fragmentContainer={this.props.fragmentContainer} />
    }
}
const mapStateToProps = (state) => {
    return {
        fluidFragment: state.fluidFragment,
        fragmentContainer: state.fragmentContainer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(FluidFragmentContainer);