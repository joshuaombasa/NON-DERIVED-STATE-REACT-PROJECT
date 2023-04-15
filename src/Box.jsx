import React from "react";

export default function Box(props) {
    console.log(props.handleClick)
    const [status, setStatus] = React.useState(props.on)

        //  function handleClick() {
        //     setStatus( (prevStatus) => {
        //         return !prevStatus
        //     })
        //  }

        const styles ={ backgroundColor: status ?  "gold" : "green"}
    
    

    return (
        <div style={styles} className="box" onClick={() => {
            props.handleClick.toggle(props.id)
        }}></div>
    )
}