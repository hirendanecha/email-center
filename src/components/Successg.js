import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import gmail from '../assets/gmail.png'
import Close from '../assets/Close.png'
import styles from "./Success.module.css"

export default function Successg() {
    return (
        <Box className={styles.cenbox}>
            <Card className={styles.card}>
                <CardContent>
                    <Box className={styles.head}>
                        <Box>
                            <h2>
                                Success
                            </h2>
                        </Box>
                        <Box>
                            <img height='35px' src={Close} alt="close" />
                        </Box>
                    </Box>
                    <Box className={styles.option_box}>
                        <Box>
                            <img height='35px' src={gmail} alt="gmail" />
                        </Box>
                        <Box className={styles.option_namebox}>
                            <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
                                Google Gmail
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 14 }}>
                            Your intelligent connection to Google Gmail was a success.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
