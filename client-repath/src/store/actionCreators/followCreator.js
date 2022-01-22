const baseUrl = 'http://localhost:3000';

export const followUser = (followId) =>{
    return (dispatch, getState) => {
       return new Promise((resolve, reject) => {
           fetch(`${baseUrl}/follows/${followId}`, {
                method: 'POST',
                headers: {
                    access_token: localStorage.getItem('access_token'),
                }
            })
            .then((data) => {
                console.log(data, "FOLLOW SUCCESS");
            })
            .catch((err) => {
                console.log(err, `FOLLOW FAILED`);
            })
       })
    }
}