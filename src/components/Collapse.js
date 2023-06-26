import { useState } from "react";
import "../styles/Collapse.scss";
import upArrow from "../images/upArrow.png";

function Collapse(props) {
    const [isCollapsed, setCollapsed] = useState(false);
    function clickCheck() {setCollapsed(!isCollapsed)}

    return (
        <div className={props.class + " collapse"}>
            <div className="collapse-container">
                <h2>{props.label}</h2>
                <img
                    className={
                        isCollapsed
                          ? "collapse-container-arrow active"
                          : "collapse-container-arrow inactive"
                    }
                    src={upArrow}
                    alt="Flèche"
                    onClick={clickCheck}
                />
            </div>
            <div
                className={
                    isCollapsed
                      ? "collapse-text opened"
                      : "collapse-text closed"
                }
            >
                <br />
                {props.text}
                <br />
            </div>
        </div>
    )
}

export default Collapse