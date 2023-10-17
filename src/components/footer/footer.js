import React, { Component } from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div`
 background-color: black;
 position: fixed;
 width: 100vw;
 bottom: 0;
 color: white;
 font-size: 25px; 
 height: 100px;
 justify-content: space-between;
 text-align: center;
`;


export default class footer extends Component {
  render() {
    return (
        <StyledFooter>
            
       <div>footer</div>
       </StyledFooter>
    )
  }
}
