import * as actions from "./FluidFragmentActions";

import { PropTypes, React, bindActionCreators, connect } from "./imports";

import FluidFragment from "./FluidFragmentComponent";

class FluidFragmentContainer extends React.Component {
    render() {
        return (<React.Fragment>
            {Object.keys(this.props.fluidFragment).map(fragmentId => {
                return (<FluidFragment
                    key={fragmentId}
                    factory={this.props.factory}
                    fragmentId={fragmentId}
                    fragmentProps={this.props.fluidFragment[fragmentId].fragmentProps}
                    fragments={this.props.fluidFragment[fragmentId].fragments}
                    fragmentType={this.props.fluidFragment[fragmentId].fragmentType}
                    fragmentContainer={this.props.fragmentContainer}
                    fragmentActive={this.props.fluidFragment[fragmentId].fragmentActive} />);
            })}
        </React.Fragment>)
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