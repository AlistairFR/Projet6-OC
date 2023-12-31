import Collapse from "./Collapse";
import CollapseText from "../data/about.json";

function AboutCollapses() {
    return (
        <div className="collapses-container">
            {CollapseText.map((e) => (
                <Collapse key={e.label} label={e.label} text={<p>{e.content}</p>}/>
            ))}
        </div>
    )
}

export default AboutCollapses;