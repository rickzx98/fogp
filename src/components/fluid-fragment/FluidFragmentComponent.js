import { FragmentContainer, PropTypes, React } from "./imports";

export default class FluidFragmentComponent extends React.Component {
    render() {
        const props = { ...this.props.fragmentProps, id: `$$fluidFragment$$${this.props.fragmentId}` };

        props.children = (<React.Fragment>
            {Object.keys(this.props.fragments).map(fragmentId =>
                <FluidFragmentComponent
                    fragmentActive={this.props.fragments[fragmentId].fragmentActive}
                    fragmentContainer={this.props.fragments[fragmentId].styles || this.props.fragmentContainer}
                    fragmentProps={this.props.fragments[fragmentId].fragmentProps}
                    fragments={this.props.fragments[fragmentId].fragments}
                    key={fragmentId}
                    fragmentId={fragmentId} />)}
        </React.Fragment>);

        let element = React.createElement(this.props.fragmentType, props);
        return (<React.Fragment>
            {this.props.fragmentActive && <FragmentContainer
                fragmentActive={this.props.fragmentActive}
                fragmentContainer={this.props.fragmentContainer}>
                {element}
            </FragmentContainer>}
        </React.Fragment>);
    }
}
FluidFragmentComponent.defaultProps = {
    fragmentType: "div",
    fragmentProps: {},
    fragments: {},
    fragmentActive: true
}
FluidFragmentComponent.propTypes = {
    fragmentId: PropTypes.string.isRequired,
    fragmentProps: PropTypes.object,
    fragmentType: PropTypes.string.isRequired,
    fragments: PropTypes.object,
    fragmentContainer: PropTypes.object,
    fragmentActive: PropTypes.bool
};