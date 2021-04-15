import React, {useRef} from "react";

function Upload(){
    const fileInput=useRef();
    const handleClick = event =>{
	event.prefentDefault();
	console.log(fileInput.current)
    };

    
}

export default Upload;
