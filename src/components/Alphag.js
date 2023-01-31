import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import gmail from '../assets/gmail.png'
import Close from '../assets/Close.png'
import { Link } from 'react-router-dom';
import styles from "./Alpha.module.css"

export default function Alphag() {
    return (
        <Box className={styles.cenbox}>
            <Card className={styles.card}>
                <CardContent>
                    <Box className={styles.head}>
                        <Box>
                            <h2>
                                Alpha Access
                            </h2>
                        </Box>
                        <Box>
                            <img height='35px' src={Close} alt="close" />
                        </Box>
                    </Box>
                    <Link className={styles.link} to="/backendg">
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
                            Our Intelligent Connection connecting Google Gmail and Bearish OS is currently in Alpha Access only. If you think you should have access contact, your admin. You will be automatically redirected if your alpha access code is correct.
                        </Typography>
                    </Box>
                    <Box className={styles.alphabox}>
                        <Box sx={{ padding: "2%" }}>
                            <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
                                Enter Alpha Access Code
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
