import { React } from "./imports";

export default class RootFragment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateDimension = this._updateDimension.bind(this);
    }
    componentWillMount() {
        this._updateDimension();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimension);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimension);
    }
    _updateDimension() {
        this.setState({ height: (window.innerHeight - 41), width: window.innerWidth });
    }
    render() {
        const style = { ...this.props.style, height: this.state.height, width: this.state.width };
        return <div {...this.props} style={style} />
    }
}
