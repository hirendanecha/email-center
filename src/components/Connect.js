import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import gmail from '../assets/gmail.png'
import Exchange from '../assets/Exchange.png'
import outlook from '../assets/outlook.png'
import Close from '../assets/Close.png'
import { Link } from 'react-router-dom';
import styles from "./Connect.module.css"

export default function Connect() {
    return (
        <Box className={styles.cenbox}>
            <Card className={styles.card}>
                <CardContent>
                    <Box className={styles.head}>
                        <Box>
                            <h2>
                                Connect an Account
                            </h2>
                        </Box>
                        <Box>
                            <img height='35px' src={Close} alt="close" />
                        </Box>
                    </Box>
                    <Link className={styles.link} to="/alphag">
                        <Box className={styles.content}>
                            <Box
                                className={styles.option_box1}
                            >
                                <Box className={styles.option_box2}>
                                    <img height='35px' src={gmail} alt="gmail" />
                                    <Typography
                                        sx={{ fontSize: 17, paddingLeft: "10px" }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Google Gmail
                                    </Typography>
                                </Box>
                                <Box className={styles.badge}>
                                    <Typography
                                        sx={{ fontSize: 17 }}
                                    >
                                        Alpha
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                    <Link className={styles.link} to="/backendo">
                        <Box className={styles.option_box}>
                            <Box>
                                <img height='35px' src={outlook} alt="outlook" />
                            </Box>
                            <Box className={styles.option_namebox}>
                                <Typography sx={{ fontSize: 17, paddingLeft: "10px" }} color="text.secondary" gutterBottom>
                                    Microsoft Outlook
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    <Box className={styles.content}>
                        <Box
                            className={styles.option_box1}
                        >
                            <Box className={styles.option_box2}>
                                <img height='35px' src={Exchange} alt="exchange" />
                                <Typography
                                    sx={{ fontSize: 17, paddingLeft: "10px" }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Microsoft Exchange
                                </Typography>
                            </Box>
                            <Box className={styles.badge}>
                                <Typography
                                    sx={{ fontSize: 17 }}
                                >
                                    Soon
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
