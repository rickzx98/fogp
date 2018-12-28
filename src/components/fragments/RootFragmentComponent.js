import { React } from "./imports";

export default class RootFragment extends React.Component {
    render() {
        return <div {...this.props} />
    }
}