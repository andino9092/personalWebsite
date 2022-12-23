import './App.css';
import { Divider, Paper, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import AvatarImg from './imgs/avatar.jpg'
import styled, { keyframes} from 'styled-components';
import { useState } from 'react';
import AboutMe from './AboutMe';
import Sidebar from './SideBar';
import Introduction from './Introduction';

var Line = styled.div`
    width: 25px;
    height: ${props => props.length || "1000px"};
    opacity: .5;
    position: absolute;
    border-radius: 50px;
    background-color: ${props => props.color || "green"};
    border-width: 1px;
    animation: dissappear 3s ease-out ${props => props.delay || "0"}s infinite;
    transform: ${props => props.moveOut ? "rotate(20deg)" : "none"};
`

var moveLeft = keyframes`
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(-1500px);
  }
`

var moveRight = keyframes`
  0%{
    transform: translateX(-1500px);
  }
  75%{
    transform: translateX(50px);
  }
  100%{
    transform: translateX(0px);
  }
`

var moveUp = keyframes`
  0%{
    transform: translate(0px);
  }
  65%{
    transform: translateY(-1420px);
  }
  100%{
    transform: translateY(-1400px);
  }
`

var moveDown = keyframes`
  0%{
    transform: translateY(-1400px)
  }
  100%{
    transform: translateY(0px);
  }
`


var fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

var MoveInProjects = styled.div`
  top: 1410px;
  position: absolute;
  animation-name: ${props => props.moveOut ? moveUp: (props.firstChange ? moveDown: "none")};
  animation-duration: 1.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  z-index: 1;
`
var MoveOutIntro = styled.div`
  animation: ${props => props.moveOut ? moveLeft: (props.firstChange ? moveRight: "none")} 1.25s ease-out 1 forwards;
  z-index: 1;
`

var FadeInText = styled.div`
  opacity: 0;
  animation: ${fadeIn} ${props => props.duration || 1}s ease 1 forwards;
  animation-delay: ${props => props.delay}s;
`

function App() {
  
  
  const headingStyle = {
    fontFamily: "'Courier New', Courier, monospace",
    display: "inline-flex",
  }
  
  const [moveOut, setMovedOut] = useState(false);
  const [firstChange, toggleFirst] = useState(false);

  return (
    <div className="App">
      <Introduction/>
      <div className="lineContainer" style={{top: "-400px", left: "100px"}}>
        <Line color="green" delay={.75} moveOut={moveOut}/>
      </div>
      <div className="lineContainer" style={{top: "-300px"}}>
        <Line color="yellow" delay={1} moveOut={moveOut}/>
      </div>
      <div className="lineContainer" style={{top: "200px"}}>
        <Line color="red" delay={.5} moveOut={moveOut}/>
      </div>
      <div className="lineContainer" style={{top: "400px", left: "200px"}}>
        <Line color="blue" delay={2} moveOut={moveOut}/>
      </div>
      <div className="lineContainer" style={{right: "200px", top: "100px"}}>
        <Line color="purple" delay={1.5} moveOut={moveOut}/>
      </div>
      <MoveOutIntro moveOut={moveOut} firstChange={firstChange}>
        <Paper elevation={3}>
          <div className="introduction">
            <FadeInText delay={3+3}>
              <Avatar
                alt="A"
                src={AvatarImg}
                sx={{ width: 250, height: 250 }}
              />
            </FadeInText>
            <div>
              <FadeInText delay={.5+3}>
                <Typography component='span' variant='h3' style={headingStyle}>
                  Hello there! My name is
                </Typography>
              </FadeInText>
              <FadeInText delay={.75+3} duration={1}>
                <Typography variant='h2' style={{fontFamily: "Allerta Stencil"}}>
                    Andy Li
                </Typography>
              </FadeInText>
              <FadeInText delay={1.75+3}>
                <p style={{fontFamily: "'Courier New', Courier, monospace", paddingTop: "10px", paddingBottom: "10px"}}>
                    ASPIRING FULL-STACK DEVELOPER, DANCER, HOME-COOK, AND MANWHA ENTHUSIAST
                </p>
              </FadeInText>
              <div style={{fontFamily: "'Courier New', Courier, monospace", paddingTop: "10px", paddingBottom: "10px"}}>
                <FadeInText delay={2+3}>
                  NEW YORK, NY
                </FadeInText>
              </div>
              <div style={{display: "inline-flex", gap:"15px", paddingTop: "26px", }}>
                <FadeInText delay={2.25+3}>
                  View my projects and hobbies here as I continue to work on them &#128513;
                </FadeInText>
                <FadeInText delay={3.25+3}>
                  <div className="downArrowContainer" onClick={() => {
                      setMovedOut(true)
                      toggleFirst(true)
                    }}>
                    <div className='downArrow'/>
                  </div>
                </FadeInText>
              </div>
            </div>
          </div>
        </Paper>
      </MoveOutIntro>
      <MoveInProjects moveOut={moveOut} firstChange={firstChange}>
        <Paper elevation={3}>
          <div className='paperTemplate aboutMe'>
            <div style={{display:"inline-flex"}}>
            <div className="downArrowContainer secondArrow" onClick={() => {
              setMovedOut(false)
            }}>
              <div className='downArrow leftVariant'/>
            </div>
              <Typography variant='h2' style={{fontFamily: "'Courier New', Courier, monospace", textAlign: "center", flexGrow:"4"}}>
                About Me
              </Typography>
            </div>
            <Divider style={{borderColor:"black"}}/>
            <AboutMe/>
          </div>
        </Paper>
      </MoveInProjects>
      <Sidebar/>
    </div>
  );
}

export default App;
