import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { Typography, Tooltip, IconButton, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import CodeIcon from '@mui/icons-material/Code';

function ProjectCard({projectName, finishedDate, description, actionButtons, institutionImagePath, projectImagePath, programmingLanguages}) {
    return (
        <Card sx={{ display: 'flex', bgcolor: 'inherit', border: 'none', boxShadow: 'none' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', color: "white" }}>
                    <Typography component="div" variant="h5">
                        {projectName}
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                        <DateRangeIcon />
                        <Typography sx={{marginLeft: '0.5rem' }} variant='subtitle2' component='div'>
                            {finishedDate}
                        </Typography>
                    </Box>
                    {programmingLanguages?.length && (
                        <Box sx={{display: 'flex', alignItems: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                            <CodeIcon />
                            <Typography sx={{marginLeft: '0.5rem'}} variant='subtitle2' component='div'>
                                {programmingLanguages.map(name => <Chip key={`${projectName}-${name}-language`} sx={{color: "white", marginRight: '0.25rem'}} label={name} />)}
                            </Typography>
                        </Box>
                    )}
                    <Typography variant='body1' component="div">
                        {description || 
                            <Typography sx={{marginTop: '0.5rem', color: '#BCBCBC'}} variant='body2' component='div'>
                                Project description coming soon.
                            </Typography>
                        }
                    </Typography>
                </CardContent>
                <CardActions sx={{marginLeft: "0.25rem", marginBottom: "0.25rem"}}>
                    {actionButtons ? actionButtons : (
                    <>
                        <Tooltip title="Coming Soon">
                            <IconButton variant="contained">
                                <GitHubIcon sx={{color: "#BCBCBC"}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Coming Soon">
                            <IconButton variant="contained">
                                <ReadMoreIcon sx={{color: "#BCBCBC"}}/>
                            </IconButton>
                        </Tooltip>
                    </>
                    )}
                </CardActions>
            </Box>
            <Box sx={{marginLeft: "auto", justifyContent: "center", alignItems: "center" }}>
                {institutionImagePath ? (
                    <CardMedia
                        component="img"
                        sx={{ width: 40, marginLeft: "auto", marginTop: "1rem", marginRight: "1rem" }}
                        image={institutionImagePath}
                    />
                ) : (
                    <Box sx={{ width: 40, marginLeft: "auto", marginTop: "1rem", marginRight: "0.5rem" }}>
                        <PersonIcon fontSize='large' sx={{color: "white"}}/>
                    </Box>
                )}
                {projectImagePath ? (
                    <CardMedia
                        component="img"
                        sx={{ width: 150, marginTop: "0.5rem", marginBottom: "auto", marginRight: "1rem" }}
                        image={projectImagePath}
                        alt="project image"
                    />
                ) : (
                    <CardMedia
                        component="img"
                        sx={{ display: {lg: "flex", md: "none", sm: "none"}, width: 150, marginTop: "0.5rem", marginBottom: "auto", marginRight: "1rem", borderRadius: 1 }}
                        image="/binary_code.jpg"
                        alt="project image"
                    />
                )}
            </Box>
        </Card>
    )
}

export default ProjectCard