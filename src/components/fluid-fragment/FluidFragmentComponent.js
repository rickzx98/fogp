import { FragmentContainer, PropTypes, React } from "./imports";

export default class FluidFragmentComponent extends React.Component {
    componentWillMount() {
        console.log("FluidFragmentComponent", this.props.fragmentProps);
    }
    render() {
        const props = { ...this.props.fragmentProps };

        props.children = (<React.Fragment>
            {Object.keys(this.props.fragments).map(fragmentId =>
                <FluidFragmentComponent
                    fragmentContainer={this.props.fragmentContainer}
                    fragmentProps={this.props.fragments[fragmentId].fragmentProps}
                    fragments={this.props.fragments[fragmentId].fragments}
                    key={fragmentId}
                    fragmentId={fragmentId} />)}
        </React.Fragment>);

        let element = React.createElement(this.props.fragmentType, props);
        return (<FragmentContainer fragmentContainer={this.props.fragmentContainer}>
            {element}
        </FragmentContainer>);
    }
}
FluidFragmentComponent.defaultProps = {
    fragmentType: "div",
    fragmentProps: {},
    fragments: {}
}
FluidFragmentComponent.propTypes = {
    fragmentId: PropTypes.string.isRequired,
    fragmentProps: PropTypes.object,
    fragmentType: PropTypes.string.isRequired,
    fragments: PropTypes.object,
    fragmentContainer: PropTypes.object
};