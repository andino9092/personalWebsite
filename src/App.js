import './App.css';
import { Divider, Paper, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import AvatarImg from './imgs/avatar.jpg'
import styled, { keyframes} from 'styled-components';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProjectDescriptions from './ProjectDescriptions';
import AboutMe from './AboutMe';

var moveLeft = keyframes`
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(-1500px);
  }
`

var moveUp = keyframes`
  100%{
    transform: translateY(-1400px);
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
  top: 1500px;
  position: absolute;
  animation-name: ${props => props.moveIn ? "none": moveUp};
  animation-duration: 1s;
  animation-delay: .5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, 1;
`
var MoveOutIntro = styled.div`
  animation: ${props => props.moveOut ? moveLeft : "none"} 1s ease-in 1 forwards;
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
  
  const [moveOut, setMovedOut] = useState(false)
  const [moveIn, setMoveIn] = useState(true)

  return (
    <div className="App">
      <MoveOutIntro moveOut={moveOut}>
        <Paper elevation={3}>
          <div className="introduction">
            <FadeInText delay={3}>
              <Avatar
                alt="A"
                src={AvatarImg}
                sx={{ width: 250, height: 250 }}
              />
            </FadeInText>
            <div>
              <FadeInText delay={.5}>
                <Typography component='span' variant='h3' style={headingStyle}>
                  Hello there! My name is
                </Typography>
              </FadeInText>
              <FadeInText delay={.75} duration={1}>
                <Typography variant='h2' style={{fontFamily: "Allerta Stencil"}}>
                    Andy Li
                </Typography>
              </FadeInText>
              <FadeInText delay={1.75}>
                <p style={{fontFamily: "'Courier New', Courier, monospace", paddingTop: "10px", paddingBottom: "10px"}}>
                    ASPIRING FULL-STACK DEVELOPER, DANCER, HOME-COOK, AND MANWHA ENTHUSIAST
                </p>
              </FadeInText>
              <div style={{fontFamily: "'Courier New', Courier, monospace", paddingTop: "10px", paddingBottom: "10px"}}>
                <FadeInText delay={2}>
                  NEW YORK, NY
                </FadeInText>
              </div>
              <div style={{display: "inline-flex", gap:"15px", paddingTop: "26px", }}>
                <FadeInText delay={2.25}>
                  View my projects and hobbies here as I continue to work on them &#128513;
                </FadeInText>
                <FadeInText delay={3.25}>
                  <div className="downArrowContainer" onClick={() => {
                      setMovedOut(true)
                      setMoveIn(false);
                    }}>
                    <div className='downArrow'/>
                  </div>
                </FadeInText>
              </div>
            </div>
          </div>
        </Paper>
      </MoveOutIntro>
      <MoveInProjects moveIn={moveIn}>
        <Paper elevation={3}>
          <div className='paperTemplate aboutMe'>
            <div style={{display:"inline-flex"}}>
            <div className="downArrowContainer secondArrow" onClick={() => {
              setMovedOut(false)
              setMoveIn(true);
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
        {/* Projects here:
        <Paper elevation={3}>
          <div className='paperTemplate'>
            <div className="downArrowContainer" onClick={() => {
              setMovedOut(false)
              setMoveIn(true);
            }}>
              <div className='downArrow leftVariant'/>
            </div>
            <div style={{display:"inline-flex"}}>
              <Typography variant='h2' style={{fontFamily: "'Courier New', Courier, monospace", textAlign: "center", flexGrow:"4"}}>
                Projects
              </Typography>
            </div>
            <Divider style={{borderColor:"white"}}/>
            <ProjectDescriptions/>
            <Link to="/workshop" style={{textDecoration: "none"}}>
              <div className="linkToWorkshop">
                  To the Workshop
              </div>
            </Link>
          </div>
        </Paper> */}
      
    </div>
  );
}

export default App;
