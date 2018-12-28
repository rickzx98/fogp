import { FragmentContainer, PropTypes, React } from "./imports";

export default class FluidFragmentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.createFragmentProps = this._createFragmentProps.bind(this);
        this.createFragmentComponent = this._createFragmentComponent.bind(this);
    }
    _createFragmentComponent() {
        // support Promise return
        return this.props.factory(this.props.fragmentType);
    }
    _createFragmentProps() {
        const props = { ...this.props.fragmentProps, id: `$$fluidFragment$$${this.props.fragmentId}` };
        props.children = (<React.Fragment>
            {Object.keys(this.props.fragments).map(fragmentId =>
                <FluidFragmentComponent
                    factory={this.props.factory}
                    fragmentActive={this.props.fragments[fragmentId].fragmentActive}
                    fragmentContainer={this.props.fragments[fragmentId].styles || this.props.fragmentContainer}
                    fragmentProps={this.props.fragments[fragmentId].fragmentProps}
                    fragments={this.props.fragments[fragmentId].fragments}
                    key={fragmentId}
                    fragmentId={fragmentId} />)}
        </React.Fragment>);
        return props;
    }
    render() {
        const props = this.createFragmentProps();
        const FragmentComponent = this.createFragmentComponent();
        return (<React.Fragment>
            {this.props.fragmentActive && <FragmentContainer
                fragmentActive={this.props.fragmentActive}
                fragmentContainer={this.props.fragmentContainer}>
                {<FragmentComponent {...props} />}
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
    fragmentActive: PropTypes.bool,
    factory: PropTypes.func.isRequired
};