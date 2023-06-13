import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import "../App.css"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'


const Heading = styled(Box)`
  display: flex;
  background: #1d1e22;
  padding: 9px 12px;
  color: white;

`

const  Header = styled(Box)`
  display:flex;
  background: #060606;
  color: #AAAEBC;
  justify-content:space-between;
  font-weigtht:700;

`
const WholeBox = styled(Box) `

display:flex;
flex-direction:column;
padding: 0 8px 8px;
background-color:#060606;
 

`

function Editor({ heading, language, value, onChange, icon, color }) {



const handleChange = (editor,data,value) => {
  
  onChange(value);

}

 const [width,setWidth] = React.useState(true)


const handleWidth = () => {
  setWidth(!width)
}


  return (

    <WholeBox style={{width: width? "33vw" :"86vw"}} >
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              display: "flex",
              height: 20,
              width: 20,
              borderRadius: 5,
              placeContent: "center",
              marginRight: 5,
              color:"black",
              paddingBottom:5,
              fontWeight:900,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>

     <span title="Expand">   <CloseFullscreenIcon fontSize="small"  style={{cursor:"pointer",alignSelf:"center"} } onClick={handleWidth} /> </span>
      </Header>
      
      <ControlledEditor
      className="controlled-editor"
      value={value}
      onBeforeChange={handleChange}
      options={{
        theme:"material",
        mode:language,
        lineNumbers:true
      }}
      
      />
    </WholeBox>
         


  );
}

export default Editor;
