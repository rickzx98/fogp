import "./FragmentContainer.css";

import { PropTypes, React } from "./imports";

export default class FragmentContainerComponent extends React.Component {
    render() {
        const style = this.props.fragmentActive ? this.props.fragmentContainer.style : {};
        return (<React.Fragment>
            {this.props.fragmentActive && <div className={this.props.fragmentActive ? "fragment-container" : "fragment-container hidden"} style={style}>{this.props.fragmentActive && this.props.children}</div>}
        </React.Fragment>);
    }
}
FragmentContainerComponent.propTypes = {
    fragmentContainer: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    fragmentActive: PropTypes.bool
};