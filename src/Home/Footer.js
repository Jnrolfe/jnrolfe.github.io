import { Box, Typography } from "@mui/material"

function Footer() {
    return (
        <Box sx={{display: 'flex', width: '100%', bgcolor: 'black', paddingY: '0.25rem', marginTop: '1rem'}}>
            <Typography sx={{marginLeft: 'auto', marginRight: '0.25rem'}} color="#BCBCBC" variant="subtitle2">
                Updated
            </Typography>
            <Typography sx={{marginRight: 'auto', marginLeft: '0.25rem'}} variant="subtitle2">
                May 2022
            </Typography>
        </Box>
    )
}

export default Footer