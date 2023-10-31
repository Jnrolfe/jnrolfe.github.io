import { useEffect } from "react";
import Grid from '@mui/material/Grid';
import About from "./About";
import Work from "./Work"
import Project from "./Project"
import Footer from "./Footer"
import Education from "./Education";

function Home() {
    useEffect(() => {
        document.title = "James Rolfe | Home"
    }, [])

    return (
        <Grid container spacing={1} >
            <Grid item xs={12} style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                <About />
                <Work/>
                <Project/>
                <Education/>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}

export default Home