import { Box } from "@mui/material";
import TopBar from "../../components/top-bar/TopBar";
import SprintBox from "../../components/sprint-box/SprintBox";

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
                <SprintBox />
            </Box>
            <Box sx={{ flex: '40%', bgcolor: 'lightcoral'}}>
                Section 2
            </Box>
        </Box>
    </Box>
    )
}

export default SprintTracker;