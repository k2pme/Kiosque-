import {TextField, Grid, Button, Container} from '@mui/material';
import {useState} from 'react';
import { KiosqueStandarsColors, secondaryText } from '../Styles/Colors';
import { loginContainers } from '../Styles/Containers';
import { fieldStyle } from '../Styles/Fields';
import { BtnStyle } from '../Styles/Buttons';
import {createTheme, ThemeProvider} from '@mui/material';



export default function LoginPage(){
    const [visible, setVisible] = useState(null)



    return (
        <>
        <Container  sx={loginContainers}>
            
                <Grid container spacing={4} alignItems={"center"} justifyContent={"center"} direction={"column"}>
                    <ThemeProvider theme={KiosqueStandarsColors}>
                        <Grid item xs={12}>
                        <h2>Bienvenue sur kiosque </h2>
                        <h3 style={secondaryText}>Connexion</h3>
                        <svg width="82" height="84" viewBox="0 0 82 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_20_43)">
    <ellipse cx="41" cy="38" rx="21" ry="22" fill="#FFD700" fill-opacity="0.81" shape-rendering="crispEdges"/>
    </g>
    <g filter="url(#filter1_d_20_43)">
    <ellipse cx="32" cy="38" rx="3" ry="5" fill="#D9D9D9"/>
    </g>
    <g filter="url(#filter2_d_20_43)">
    <ellipse cx="51" cy="38" rx="3" ry="5" fill="#D9D9D9"/>
    </g>
    <defs>
    <filter id="filter0_d_20_43" x="0" y="0" width="82" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="10"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_43"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_43" result="shape"/>
    </filter>
    <filter id="filter1_d_20_43" x="9" y="17" width="46" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="10"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.81 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_43"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_43" result="shape"/>
    </filter>
    <filter id="filter2_d_20_43" x="28" y="17" width="46" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="10"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.93 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_43"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_43" result="shape"/>
    </filter>
    </defs>
                        </svg>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            sx={fieldStyle}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            sx={fieldStyle}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color='primary'
                            sx={BtnStyle}
                        ><b style={{color : 'white'}}>Connexion</b></Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color='gentle_black'
                            sx={BtnStyle}
                        ><b style={{color : 'white'}}>Inscription</b></Button>
                    </Grid>

                </ThemeProvider>
                </Grid>
            
        </Container>
       
            

        </>
    );
} 