import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Chip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const programmingLanguages = ["Go", "Python", "JSX", "C++", "LaTeX", "Ruby"] 

function About() {
    return (
        <Grid container spacing={2} sx={{ marginTop: "5rem", marginBottom: "1rem" }}>
            <Grid item sm={6} xs={12}>
                <Typography variant='h3' component="div">
                    DEVELOPER
                </Typography>
                <Typography variant='h3' component="div">
                    ROBOTICIST
                </Typography>
                <Typography variant='h3' component="div">
                    HACKER
                </Typography>
                <Typography variant='h3' component="div">
                    NERD
                </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Grid container>
                    <Grid item xs={12} sx={{ marginBottom: "0.5rem" }}>
                        <Avatar 
                            alt="James Rolfe"
                            src="/me_headshot.jpeg"
                            sx={{ width: 180, height: 180, marginX: "auto"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex' }}>
                            <IconButton href="https://github.com/jnrolfe" sx={{marginRight: "0.5rem", marginLeft: "auto"}} variant="contained" color="primary">
                                <GitHubIcon fontSize='large' sx={{color: "white"}}/>
                            </IconButton>
                            <IconButton href="mailto:jamesnrolfe@gmail.com" sx={{marginRight: "0.5rem"}} variant="contained" color="primary">
                                <EmailIcon fontSize='large' sx={{color: "white"}}/>
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/rolfejames" sx={{marginRight: "0.5rem"}} variant="contained" color="primary">
                                <LinkedInIcon fontSize='large' sx={{color: "white"}}/>
                            </IconButton>
                            <IconButton sx={{marginRight: "auto"}} variant="contained" color="primary">
                                <TwitterIcon fontSize='large' sx={{color: "white"}}/>
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={4} sx={{display: {md: "flex", sm: "none"}}}>
                <Box 
                    className='centered' 
                    sx={{
                        width: 250,
                        height: 250,
                        borderRadius: 1,
                    }}
                    src="/me_microscope.jpg"
                    alt=""
                    component="img"
                />
            </Grid>
            <Grid item sm={12} md={8}>
                <Typography variant='h5' component="div" sx={{marginBottom: '1rem'}}>
                    Background
                </Typography>
                <Typography variant='body1' component="div">
                    I am a full-stack software engineer writing highly performant and data-intensive web services for the Apple Maps 3D-Vision team.
                    My educational background in computer science and computer engineering feeds my passion to solve hard problems with the newest technologies.
                    Apart from work I enjoy exploring the Bay Area, playing any racquet-based sports, and building robot prototypes.
                </Typography>
                <Typography variant='h5' component="div" sx={{marginY: '1rem'}}>
                    Programming Languages
                </Typography>
                <Box sx={{display: 'flex', width: '100%'}}>
                    {programmingLanguages.map(l => <Chip key={`${l}-language`} sx={{color: 'white'}} label={l}/>)}
                </Box>
            </Grid>
        </Grid>
    )
}

export default About