import { Typography, Box, Grid, Chip, Avatar } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AppleIcon from '@mui/icons-material/Apple';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CodeIcon from '@mui/icons-material/Code';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function Work() {
    return (
        <>
        <Typography sx={{marginBottom: "0.5rem"}} variant='h4'>
            Industry Experience
        </Typography>
        <Grid container>
            <Grid item md={2} sx={{display: {md: "flex", sm: "none"}}}>
            </Grid>
            <Grid item md={8}>
            <Timeline sx={{marginLeft: '0px'}}>
                <TimelineItem>
                    <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} />
                    <TimelineSeparator>
                    <TimelineDot>
                        <AppleIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' component='div'>
                            Software Engineer (ICT3)
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                            <DateRangeIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                May 2020 - Present
                            </Typography>
                            <LocationOnIcon />
                            <Typography sx={{marginLeft: '0.5rem' }} variant='subtitle2' component='div'>
                                Cupertino, CA
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                            <AccountBalanceIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem'}} variant='subtitle2' component='div'>
                                Apple
                            </Typography>
                            <CodeIcon />
                            <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                <Chip sx={{color: "white", marginRight: '0.25rem'}} label="Go" />
                                <Chip sx={{color: "white", marginRight: '0.25rem'}} label="JSX" />
                                <Chip sx={{color: "white"}} label="Python" />
                            </Typography>
                        </Box>
                        <Typography variant='body1' component='div'>
                            Full-stack software engineer writing and maintaining various web services for the Apple Maps 3D-Vision team. 
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} />
                    <TimelineSeparator>
                    <TimelineDot>
                        <AppleIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' component='div'>
                            Software Engineer Intern (Support5) with Apple Maps
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                            <DateRangeIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                Summer 2019
                            </Typography>
                            <LocationOnIcon />
                            <Typography sx={{marginLeft: '0.5rem' }} variant='subtitle2' component='div'>
                                Sunnyvale, CA
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                            <AccountBalanceIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem'}} variant='subtitle2' component='div'>
                                Apple
                            </Typography>
                            <CodeIcon />
                            <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                <Chip sx={{color: "white", marginRight: '0.25rem'}} label="Ruby" />
                                <Chip sx={{color: "white"}} label="Javascript" />
                            </Typography>
                        </Box>
                        <Typography variant='body1' component='div'>
                            Lead developer of web-based application to orchestrate code promotion from development to production environments.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} />
                    <TimelineSeparator>
                    <TimelineDot>
                        <AppleIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' component='div'>
                            Software Engineer Intern (Support5) with Apple Maps
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                            <DateRangeIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                Summer 2018
                            </Typography>
                            <LocationOnIcon />
                            <Typography sx={{marginLeft: '0.5rem' }} variant='subtitle2' component='div'>
                                Sunnyvale, CA
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                            <AccountBalanceIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem'}} variant='subtitle2' component='div'>
                                Apple
                            </Typography>
                            <CodeIcon />
                            <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                <Chip sx={{color: "white", marginRight: '0.25rem'}} label="Python" />
                                <Chip sx={{color: "white", marginRight: '0.25rem'}} label="Javascript" />
                                <Chip sx={{color: "white"}} label="Spark" />
                            </Typography>
                        </Box>
                        <Typography variant='body1' component='div'>
                            Lead developer of a software-suite to filter noise and surface errors in logs across a across parallelized computing pool.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} />
                    <TimelineSeparator>
                        <TimelineDot>
                            <Avatar
                                alt="GREYRALLY"
                                src="/greyrally.png"
                                sx={{ width: 20, height: 20, padding: '2px' }}
                            />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' component='div'>
                            Co-Founder & Lead Developer
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                            <DateRangeIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                March 2017 to May 2020
                            </Typography>
                            <LocationOnIcon />
                            <Typography sx={{marginLeft: '0.5rem' }} variant='subtitle2' component='div'>
                                Sunnyvale, CA
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                            <AccountBalanceIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem'}} variant='subtitle2' component='div'>
                                GREYRALLY
                            </Typography>
                            <CodeIcon />
                            <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                <Chip sx={{color: "white", marginRight: '0.25rem'}} label="NodeJS" />
                                <Chip sx={{color: "white"}} label="Javascript" />
                            </Typography>
                        </Box>
                        <Typography variant='body1' component='div'>
                            Managed multiple contractors through the development of a web-based marketplace to anonymously auction, sell, buy, and rate zero-day exploits.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} />
                    <TimelineSeparator>
                    <TimelineDot>
                        <Avatar 
                            alt="KU"
                            src="/ku_logo.png"
                            sx={{ width: 20, height: 16, padding: '2px' }}
                        />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' component='div'>
                            Researcher
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                            <DateRangeIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                May 2015 to March 2018
                            </Typography>
                            <LocationOnIcon />
                            <Typography sx={{marginLeft: '0.5rem' }} variant='subtitle2' component='div'>
                                Lawrence, KS
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                            <AccountBalanceIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem'}} variant='subtitle2' component='div'>
                                KU ITTC
                            </Typography>
                            <CodeIcon />
                            <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                <Chip sx={{color: "white", marginRight: '0.25rem'}} label="Python" />
                                <Chip sx={{color: "white"}} label="Javascript" />
                            </Typography>
                        </Box>
                        <Typography variant='body1' component='div'>
                            Developed a network response simulator web application to quantify resilience of real-world and theoretical 
                            internet networks during attacks or disasters. This project was owned and maintained by the ResiliNets Research Group.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} />
                    <TimelineSeparator>
                    <TimelineDot>
                        <Avatar 
                            alt="Patternex"
                            src="/patternex_logo.jpg"
                            sx={{ width: 18, height: 18, padding: '2px' }}
                        />
                    </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' component='div'>
                            Software Engineer Intern
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                            <DateRangeIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                Summer 2016
                            </Typography>
                            <LocationOnIcon />
                            <Typography sx={{marginLeft: '0.5rem' }} variant='subtitle2' component='div'>
                                San Jose, CA
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                            <AccountBalanceIcon />
                            <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem'}} variant='subtitle2' component='div'>
                                PatternEx
                            </Typography>
                            <CodeIcon />
                            <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                <Chip sx={{color: "white"}} label="Python" />
                            </Typography>
                        </Box>
                        <Typography variant='body1' component='div'>
                            Created a data pipeline that automatically gathers and cleans network data from remote client databases.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            </Grid>
            <Grid item md={2} sx={{display: {md: "flex", sm: "none"}}}>
            </Grid>
        </Grid>
        </>
    )
}

export default Work