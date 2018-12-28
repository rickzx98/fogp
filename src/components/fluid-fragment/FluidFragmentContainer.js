import * as actions from "./FluidFragmentActions";

import { PropTypes, React, bindActionCreators, connect } from "./imports";

import FluidFragment from "./FluidFragmentComponent";

const MAIN_FRAGMENT = "$$root_fragment";

class FluidFragmentContainer extends React.Component {
    render() {
        return <FluidFragment
            factory={this.props.factory}
            fragmentId={MAIN_FRAGMENT}
            fragmentProps={this.props.fluidFragment[MAIN_FRAGMENT].fragmentProps}
            fragments={this.props.fluidFragment[MAIN_FRAGMENT].fragments}
            fragmentType={this.props.fluidFragment[MAIN_FRAGMENT].fragmentType}
            fragmentContainer={this.props.fragmentContainer} />
    }
}

FluidFragmentContainer.propTypes = {
    fluidFragment: PropTypes.object.isRequired,
    fragmentContainer: PropTypes.object.isRequired,
    factory: PropTypes.func.isRequired
};
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