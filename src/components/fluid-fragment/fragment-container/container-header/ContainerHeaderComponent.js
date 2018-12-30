import "./ContainerHeader.css";

import { React } from "./imports";
import Toolbox from "./toolbox/ToolboxComponent";

export default class ContainerHeaderComponent extends React.Component {
    render() {
        return (<div className="container-header"><Toolbox /></div>)
    }
}