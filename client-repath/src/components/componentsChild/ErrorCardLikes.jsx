import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ErrorCardLikes() {

    const navigate = useNavigate();
    const toHome = () => {
        navigate('/')
    }
    return (
        <div style={{ marginTop: '10vh' }}>
            <Card sx={{ minWidth: 275 }} className='shadow' >
                <CardContent>
                    <Typography variant="h5" component="div" style={{ fontSize: '35px' }}>
                        Oh no!
                    </Typography>

                    <Typography variant="body2" style={{ fontSize: '20px', marginTop: '5vh' }}>
                        There's no liked posts
                        <br />
                        {'on your timeline.'}
                    </Typography>
                </CardContent>
                <CardActions className='d-flex justify-content-center '>
                    <Button
                        style={{ color: 'red', fontSize: '20px' }} onClick={(e) => {
                            e.preventDefault();
                            toHome();
                        }}> Go to Timeline </Button>
                </CardActions>
            </Card>
        </div>
    );
}
