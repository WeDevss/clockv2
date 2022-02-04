import React from 'react';
import styled from 'styled-components'
import colors from "./Colors";

const DisplayStyle = styled.div`

    span{
        font-size:100px !important;
        color:${colors.textColor};
        
        
    }
    span+span+span{
        font-size:70px !important;
        color:gray !important;
    }

`
export default DisplayStyle