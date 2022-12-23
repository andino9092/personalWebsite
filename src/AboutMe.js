import "./App.css"
import "./AboutMe.css"

export default function AboutMe(props){

    return(
        <div>
            <div className="projectHeading">
                <ul className="aboutMe">
                    <li className="aboutMe">
                        Projects
                        <p>
                            <a href="https://github.com/andino9092/ChoreoTool">ChoreoTool</a> is a tool for choreographers to save and edit formations on stage. It is
                            synced to their Spotify account for easy access. 
                        </p>
                        <p>
                            <a href="https://github.com/andino9092/MachineTranslations">Machine Translations</a> is a tool that machine translates Asian comics into english using
                            image and language recognition software.
                        </p>
                        <p>
                            <a href="https://github.com/andino9092/ToDo">ToDo</a> is a simple ToDo app that uses a Django backend and a React frontend.
                        </p>
                    </li>
                    <li className="aboutMe">
                        Hobbies
                        <p>
                            Dance is one of my passions. I love the urban dance community in New York 
                            and its nuturing community. On my instagram are snippets of my dance 
                            experience.
                        </p>
                        <p>
                            Art is a hobby I have recently developed in college. I have been practicing
                            painting people using ProCreate on an iPad. I plan to create an Instagram 
                            to log my progress. One of the people I look up to in this area is <a href="https://www.instagram.com/samdoesarts/?hl=en"> SamDoesArts</a> and <a href="https://www.instagram.com/wlop/?hl=en"> WLOP</a>.
                        </p>
                        <p>
                            Food is my love language. Cooking is another one of the hobbies I developed
                            in college. I love learning about new dishes. I mostly focus on Asian dishes
                            and more specifically, Korean dishes. Currently, I am looking into how to
                            make Makgeoli. I get a lot of inspiration from <a href="https://www.instagram.com/doobydobap/?hl=en"> doobydobap (Tina Choi)</a>.
                        </p>
                    </li>
                    <li className="aboutMe">
                        Music
                        <p>
                            I love sharing my music and discovering new songs. If you are curious about
                            my music taste, check out <a href="https://open.spotify.com/user/t5v8mrhmyr4azxtbfwc872xrv?si=8586a951062543f4">here</a>.
                        </p>
                    </li>
                    {/* <Link to="/workshop" style={{textDecoration: "none", fontSize: "1rem"}}>
                        To the Workshop
                    </Link> */}
                </ul>
            </div>
        </div>
    )
}