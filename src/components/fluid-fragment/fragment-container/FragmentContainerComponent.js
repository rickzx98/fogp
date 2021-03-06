import "./FragmentContainer.css";

import { PropTypes, React } from "./imports";

import ContainerHeader from "./container-header/ContainerHeaderComponent";

export default class FragmentContainerComponent extends React.Component {
    render() {
        const style = this.props.fragmentActive ? this.props.fragmentContainer.style : {};
        return (<div className={this.props.fragmentActive ? "fragment-container" : "fragment-container hidden"} style={style}>
            <ContainerHeader />
            {this.props.fragmentActive && this.props.children}
        </div>);
    }
}
FragmentContainerComponent.propTypes = {
    fragmentContainer: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    fragmentActive: PropTypes.bool
};