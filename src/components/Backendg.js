import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import gmail from '../assets/gmail.png'
import Close from '../assets/Close.png'
import { Link } from 'react-router-dom';
import styles from "./Backend.module.css"

export default function Backendg() {
    return (
        <Box className={styles.cenbox}>
            <Card className={styles.card}>
                <CardContent>
                    <Box className={styles.head}>
                        <Box>
                            <h2>
                                Tickling the Backend
                            </h2>
                        </Box>
                        <Box>
                            <img height='35px' src={Close} alt="close" />
                        </Box>
                    </Box>
                    <Link className={styles.link} to="/successg">
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
                    </Link>
                    <Box>
                        <Typography sx={{ fontSize: 14 }}>
                            This page should automatically redirect for you to login to Google Gmail.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
