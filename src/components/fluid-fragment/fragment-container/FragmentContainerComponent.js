import "./FragmentContainer.css";

import { PropTypes, React } from "./imports";

export default class FragmentContainerComponent extends React.Component {
    render() {
        return (<div className="fragment-container" style={this.props.fragmentContainer.style}>{this.props.children}</div>);
    }
}
FragmentContainerComponent.propTypes = {
    fragmentContainer: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired
};