import { Box, CssBaseline } from "@mui/material";
import TopBar from "../../components/top-bar/TopBar";



const SprintTracker = () => {
    return (
    <Box sx={{width: '100vw'}}>
        <TopBar />
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 64px)', // Subtract the height of the AppBar
            }}
        >
            <Box sx={{ flex: '60%', bgcolor: 'lightblue'}}>
                Section 1
            </Box>
            <Box sx={{ flex: '40%', bgcolor: 'lightcoral'}}>
                Section 2
            </Box>
        </Box>
    </Box>
    )
}

export default SprintTracker;