import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ErrorCardHome() {
    const navigate = useNavigate();

    const toPost = () => {
        navigate('/content')
    }

    const toFriend = () => {
        navigate('/search-people')
    }

    return (
        <div style={{ paddingRight: '15px', paddingLeft: '15px' }}>
            <Card sx={{ minWidth: 275 }} className='shadow' >
                <CardContent>
                    <Typography variant="h3" component="div" style={{ fontSize: '33px' }}>
                        There's no posts on your timeline.
                    </Typography>
                </CardContent>

                <CardActions className='d-flex justify-content-center '>
                    <div >
                        <h5 style={{ marginTop: '2vh' }}>Click <a style={{ color: 'red', textDecoration: 'none' }} href=""
                            onClick={(e) => {
                                e.preventDefault();
                                toPost();
                            }}>here</a> to post something</h5>
                        <h5 style={{ marginTop: '2vh' }}>Or Click <a style={{ color: 'red', textDecoration: 'none' }} href=""
                            onClick={(e) => {
                                e.preventDefault();
                                toFriend();
                            }}>here</a> to find new friends</h5>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
}
