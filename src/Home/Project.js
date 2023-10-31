import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProjectCard from '../Components/ProjectCard';

function Project() {
    return (
        <div style={{marginBottom: "0.5rem"}}>
            <Typography sx={{marginBottom: "0.5rem"}} variant='h4'>
                Projects
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Programmable Drone Platform"
                        finishedDate="TBA"
                        programmingLanguages={["Go", "Bash"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="ImmaPlay"
                        finishedDate="May 16, 2020"
                        institutionImagePath="/brown_logo.png"
                        programmingLanguages={["Ruby", "Bash"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Swarmbots"
                        finishedDate="December 11, 2019"
                        description="Project lead for the creation of 3 remote-controlled cars that act as a swarm. Each bot consists of a RaspberryPi 3B+, a camera, 2 wheel driving chasis and motors, and charging circuit. The bots communicate over Bluetooth using pybluez. The Bluetooth communication is used for both anti-collision (via RSSI), leader election through the RAFT protocol, and by the leader bot to receive commands from the user's controller. The camera is used by openCV to recognize the other bots (they each have a design on their back). 

                        Upon first starting, the bots will calibrate their RSSI then elect a leader amongst themselves. The leader will connect to the users controller and start driving around. The followers will follow the leader without colliding into other followers. If the leader doesn't heartbeat with followers, the followers will elect a new leader and that leader will connect to the user's controller. Any bot can be reset and rejoin the swarm as a follower at any time."
                        institutionImagePath="/brown_logo.png"
                        programmingLanguages={["Python", "Bash"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Blockchain for Distributed Record Managment"
                        finishedDate="December 5, 2019"
                        description="Architect and developer of infrastructure to secure distributed records. The architecture uses a public blockchain to tie encrypted records to accounts used between multiple entities that do processing on said records. The use of the blockchain ensures that accounts accross the entities are authenticated and tamper-proof. Each instance in which an entity processes on an accounts records is tracked in a tamper-proof manner. 

                        The backend and custom public blockchain is written in Python3. Also, we created a demo with the backend where-in the entities are hospitals and the accounts are patients. The demo frontend is written in Flask."
                        institutionImagePath="/brown_logo.png"
                        programmingLanguages={["Python"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="PuddleStore"
                        finishedDate="May 8, 2019"
                        description="A distributed, decentralized data storage system using RAFT written in Go with custom Google protobuffs. This was a final project for the Distributed Systems course at Brown University."
                        institutionImagePath="/brown_logo.png"
                        programmingLanguages={["Go", "Bash"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Password Cracker"
                        finishedDate="December 7, 2018"
                        description="Written in Python3, this password cracker uses longest common substring approximation to build a k-NN model on the RockYou and Yahoo! password sets and produce guesses with an accuracy equivalent to John the Ripper. This password cracker can also use seed words to rank the clusters and slightly improve accuracy. It was completed as a final project for CSCI2915E: Advanced Cybersecurity Seminar at Brown University."
                        institutionImagePath="/brown_logo.png"
                        programmingLanguages={["Python"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Handheld Gaming PC Prototype"
                        finishedDate="May 5, 2018"
                        description="For my undergraduate senior capstone, my group and I built a handheld gaming system using a 3D printed shell, a screen and buttons from adafruit, and a RaspberryPi 3B+. The system runs a lightwieght RaspbianOS to bootstrap the Nvidia moonlight protocol."
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["Python", "Bash"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Painter by the Numbers"
                        finishedDate="April 20, 2018"
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["Python"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="IoT ZigBee Attacks"
                        finishedDate="April 25, 2018"
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["Python", "C++"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="JiTRoP Attacks"
                        finishedDate="December 11, 2017"
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["Python", "Bash"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Language Development Research"
                        finishedDate="July 24, 2017"
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["Python", "R"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Demonstrating Machine Learning Concepts"
                        finishedDate="May 7, 2017"
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["Python"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Demonstrating Operating Systems Concepts"
                        finishedDate="December 19, 2016"
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["C++"]}
                    />
                </Grid> 
                <Grid item sm={12} md={6}>
                    <ProjectCard 
                        projectName="Demonstrating Data Structures Concepts"
                        finishedDate="December 19, 2016"
                        institutionImagePath="/ku_jayhawk.png"
                        programmingLanguages={["C++"]}
                    />
                </Grid> 
            </Grid>
        </div>
    )
}

export default Project