import { useState } from "react";
import "./Headder.css";
const Headder = ({ colors, setColors, light, dark }) => {
    let cssStyle = {
        display: "flex",
        padding: "10px",
        background: colors.top,
        color: colors.font,
        fontSize: "22px",
    };
    const [toggle, setToggle] = useState(1);
    return (
        <div style={cssStyle}>
            <div style={{ alignContent: "left", marginRight: "auto" }}>
                React Demo <button style={{ color: colors.font, background: colors.contrast, borderRadius: "20px" }} onClick={() => {
                    if (toggle === 1) {
                        setToggle(0);
                        setColors(dark);
                    } else {
                        setToggle(1);
                        setColors(light)
                    }
                    // setColors(dark)
                }}>Change Theam</button>
            </div>
            <div style={{ alignContent: "right" }}>
                <ul>
                    <li style={{ color: colors.font, background: colors.contrast }}>To Do list</li>
                    {/* <li style={{ color: colors.font, background: colors.contrast }}>Currency calculator</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Headder;
