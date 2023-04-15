import React from "react";

export default function Box(props) {

    const [status, setStatus] = React.useState(props.on)

         function handleClick() {
            setStatus( (prevStatus) => {
                return !prevStatus
            })
         }

        const styles ={ backgroundColor: status ?  "gold" : "green"}
    
    

    return (
        <div style={styles} className="box" onClick={handleClick}></div>
    )
}