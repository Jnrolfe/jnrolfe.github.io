import * as React from 'react';
import { Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Box, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';

const notableCourses = [
    "Data Structures",
    "Advanced Algorithms",
    "Linear Algebra",
    "Machine Learning",
    "Data Science",
    "Data Mining",
    "Computer Security (Exploit Crafting)",
    "Advanced Computer Security (Seminar)",
    "Operating Systems",
    "Computer Networks",
    "Advanced Computer Networking (Seminar)",
    "Embedded Systems",
    "Distributed Systems",
    "Advanced Distributed Systems (Seminar)",
    "Web Design",
    "Programming Languages",
    "Software Engineering"
]

function Education() {
    return (
        <div>
            <Typography sx={{marginBottom: "0.5rem"}} variant='h4'>
                Education
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <Typography sx={{marginBottom: "0.5rem"}} variant='h5'>
                        Degrees
                    </Typography>
                    <List sx={{ width: '100%' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar 
                                    alt="Brown"
                                    src="/brown_logo.png"
                                    sx={{ width: 30, height: 30 }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                            primary={
                                <Typography variant='h6'>
                                    Sc.M. Computer Science
                                </Typography>
                            }
                            secondary={
                                <>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'white'}}>
                                    <DateRangeIcon />
                                    <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                        May 2020
                                    </Typography>
                                    <LocationOnIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        Providence, RI
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', color: 'white'}}>
                                    <SchoolIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        Brown University
                                    </Typography>
                                </Box>
                                <Typography sx={{marginTop: '0.5rem', color: '#BCBCBC'}} variant='body2' component='div'>
                                    Concentration in Embedded Systems and Distibuted Systems
                                </Typography>
                                </>
                            }
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar 
                                    alt="KU"
                                    src="/ku_logo.png"
                                    sx={{ width: 20, height: 16, padding: '2px' }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                            primary={
                                <Typography variant='h6'>
                                    B.S. Computer Engineering
                                </Typography>
                            }
                            secondary={
                                <>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'white'}}>
                                    <DateRangeIcon />
                                    <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                        May 2018
                                    </Typography>
                                    <LocationOnIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        Lawrence, KS
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', color: 'white'}}>
                                    <SchoolIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        University of Kansas
                                    </Typography>
                                </Box>
                                </>
                            }
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={6}>
                    <Typography sx={{marginBottom: "0.5rem"}} variant='h5'>
                        Extracurriculars
                    </Typography>
                    <List sx={{ width: '100%' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar 
                                    alt="Brown"
                                    src="/brown_logo.png"
                                    sx={{ width: 30, height: 30 }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                            primary={
                                <Typography variant='h6'>
                                    Teaching Assistant
                                </Typography>
                            }
                            secondary={
                                <>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'white'}}>
                                    <DateRangeIcon />
                                    <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                        Fall 2019
                                    </Typography>
                                    <LocationOnIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        Providence, RI
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', color: 'white'}}>
                                    <GroupsIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        CSCI 0060 | Practical Systems Skills
                                    </Typography>
                                </Box>
                                <Typography sx={{marginTop: '0.5rem', color: '#BCBCBC'}} variant='body2' component='div'>
                                    Responsible for designing cirrulum, holding office hours, grading, and leading workshops.
                                </Typography>
                                </>
                            }
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar 
                                    alt="KU"
                                    src="/ku_logo.png"
                                    sx={{ width: 20, height: 16, padding: '2px' }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                            primary={
                                <Typography variant='h6'>
                                    Volunteer
                                </Typography>
                            }
                            secondary={
                                <>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'white'}}>
                                    <DateRangeIcon />
                                    <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                        2013 - 2018
                                    </Typography>
                                    <LocationOnIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        Lawrence, KS
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', color: 'white'}}>
                                    <GroupsIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        ACM | Engineering Expo
                                    </Typography>
                                </Box>
                                <Typography sx={{marginTop: '0.5rem', color: '#BCBCBC'}} variant='body2' component='div'>
                                    Teaching middle school and high school students how to code with MIT's Scratch language.
                                </Typography>
                                </>
                            }
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar 
                                    alt="HKU"
                                    src="/hku_logo.png"
                                    sx={{ width: 25, height: 25, padding: '2px' }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                            primary={
                                <Typography variant='h6'>
                                    Study Abroad
                                </Typography>
                            }
                            secondary={
                                <>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'white'}}>
                                    <DateRangeIcon />
                                    <Typography sx={{marginLeft: '0.5rem', marginRight: '1rem' }} variant='subtitle2' component='div'>
                                        Fall 2015
                                    </Typography>
                                    <LocationOnIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        Hong Kong, China
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', color: 'white'}}>
                                    <SchoolIcon />
                                    <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                        HKU
                                    </Typography>
                                </Box>
                                </>
                            }
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={12} sx={{marginBottom: "1rem"}}>
                    <Typography sx={{marginBottom: "0.5rem"}} variant='h5'>
                        Notable Courses
                    </Typography>
                    {notableCourses.map(l => <Chip key={`${l}-course`} sx={{color: 'white'}} label={l}/>)}
                </Grid>
            </Grid>
        </div>
    )
}

export default Education