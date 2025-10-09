import Sidebar from '../Sidebar.jsx'
import Activity from '../Activity/Activity.jsx'
import Grid from '@mui/material/Grid';

function Course() {
    return (
        <Grid container spacing={2}>
            <Grid size={3}>
                <Sidebar />
            </Grid>
            <Grid size={9}>
                <Activity />
            </Grid>
        </Grid>
    )
}

export default Course;