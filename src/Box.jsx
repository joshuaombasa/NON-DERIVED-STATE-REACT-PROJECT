import React from "react";

export default function Box(props) {
    

        const styles ={ backgroundColor: props.on ?  "gold" : "green"}
    
    

    return (
        <div style={styles} className="box" onClick={props.toggle}></div>
    )
}