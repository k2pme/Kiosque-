import {TextField, Grid, Button, Container,IconButton} from '@mui/material';
import {useState, useEffect} from 'react';
import { KiosqueStandarsColors, secondaryText } from '../Styles/Colors';
import { loginContainers, loginContainers_phone } from '../Styles/Containers';
import { fieldStyle } from '../Styles/Fields';
import { BtnStyle, gpBtn } from '../Styles/Buttons';
import {createTheme, ThemeProvider} from '@mui/material';


export default function LoginPage(){
    const [visible, setVisible] = useState(null)
    const [phone, setPhone] = useState(null)
    useEffect(() => window.screen.width < 500 ? setPhone(true) : setPhone(false), [])


    return (
        <>
        <Container  sx={phone ? loginContainers_phone :loginContainers}>
            
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
                            variant="text"
                            color='secondary'
                            sx={{marginLeft : '100px'}}
                        ><b>Mot de passe oublier ?</b></Button>
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
        <Grid sx = { {paddingTop : '30px'} }container spacing={2} alignItems={"center"} justifyContent={"center"} direction={"column"}>
            <ThemeProvider theme={KiosqueStandarsColors}>
                <Grid item xs={12}>
                    <svg width="158" height="2" viewBox="0 0 158 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="-1.859e-05" y1="1.5" x2="158" y2="1.49413" stroke="#96A5A6" stroke-opacity="0.46"/>
                    </svg>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.38734 5.90909C9.38734 6.98295 9.19345 7.91098 8.80566 8.69318C8.41788 9.47538 7.88592 10.0786 7.20978 10.5028C6.53365 10.9271 5.76139 11.1392 4.89302 11.1392C4.02465 11.1392 3.2524 10.9271 2.57626 10.5028C1.90012 10.0786 1.36816 9.47538 0.98038 8.69318C0.592596 7.91098 0.398704 6.98295 0.398704 5.90909C0.398704 4.83523 0.592596 3.9072 0.98038 3.125C1.36816 2.3428 1.90012 1.73958 2.57626 1.31534C3.2524 0.891098 4.02465 0.678977 4.89302 0.678977C5.76139 0.678977 6.53365 0.891098 7.20978 1.31534C7.88592 1.73958 8.41788 2.3428 8.80566 3.125C9.19345 3.9072 9.38734 4.83523 9.38734 5.90909ZM8.19416 5.90909C8.19416 5.02746 8.04667 4.28338 7.75169 3.67685C7.46002 3.07031 7.06395 2.61127 6.56348 2.29972C6.06632 1.98816 5.5095 1.83239 4.89302 1.83239C4.27654 1.83239 3.71807 1.98816 3.2176 2.29972C2.72044 2.61127 2.32437 3.07031 2.02939 3.67685C1.73772 4.28338 1.59189 5.02746 1.59189 5.90909C1.59189 6.79072 1.73772 7.5348 2.02939 8.14134C2.32437 8.74787 2.72044 9.20691 3.2176 9.51847C3.71807 9.83002 4.27654 9.9858 4.89302 9.9858C5.5095 9.9858 6.06632 9.83002 6.56348 9.51847C7.06395 9.20691 7.46002 8.74787 7.75169 8.14134C8.04667 7.5348 8.19416 6.79072 8.19416 5.90909ZM11.3014 11V3.36364H12.4349V4.51705H12.5145C12.6537 4.1392 12.9056 3.83262 13.2702 3.5973C13.6347 3.36198 14.0457 3.24432 14.5031 3.24432C14.5893 3.24432 14.697 3.24597 14.8263 3.24929C14.9555 3.2526 15.0533 3.25758 15.1196 3.2642V4.45739C15.0798 4.44744 14.9887 4.43253 14.8461 4.41264C14.7069 4.38944 14.5595 4.37784 14.4037 4.37784C14.0325 4.37784 13.701 4.45573 13.4094 4.61151C13.121 4.76397 12.8923 4.97609 12.7233 5.24787C12.5576 5.51634 12.4747 5.82292 12.4747 6.16761V11H11.3014Z" fill="#96A5A6"/>
                    </svg>
                    <svg width="158" height="1" viewBox="0 0 158 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.49201e-10" y1="0.5" x2="158" y2="0.5" stroke="#96A5A6" stroke-opacity="0.46"/>
                    </svg>
                </Grid>
                <Grid item xs={12}>
                    <IconButton
                        sx={gpBtn}
                        color="secondary"
                    >
                        <img src="paypal.png" width={30}/>
                    </IconButton>
                    <IconButton
                        size='x-large'
                        sx={gpBtn}
                        color="secondary"
                    >
                        <img src="gg.png" width={40}/>
                    </IconButton>
                    <IconButton
                        size='x-large'
                        sx={gpBtn}
                        color="secondary"
                    >
                        <img src="fb.png" width={40}/>
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <p>En vous inscrivant vous acceptez<br/> 
                        <Button 
                            variant='text'
                            color='secondary'
                        ><b>notre politque de gestion<br/> de vos donnees personelles</b></Button> </p>
                </Grid>

            </ThemeProvider>
        </Grid>
       
            

        </>
    );
} 