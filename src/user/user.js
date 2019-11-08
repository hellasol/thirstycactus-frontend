import React, { useState, useEffect } from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardImg, Button, CardColumns
} from 'reactstrap';
import api from "../api";

export function UserCard () {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        api.users.get().then(setUsers)
    }, []);
  
  return (
    <div style={{maxWidth: `100%`, marginBottom: `1rem`, marginTop: '1rem', marginLeft: `1rem`, textAlign: 'center'}}> 
  <CardColumns>
  {users.map(user => (
      <p key={user._id}>
      <Card>   
        <CardBody>
        <CardImg
                  width="100%"
                //src={profilepic}
                  src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAB5CAMAAABr/MGBAAAAY1BMVEX///81NTUpKSmDg4MhISGioqIxMTElJSUuLi4ZGRk6Ojr19fX8/PxsbGzl5eW2trbZ2dnu7u5LS0tnZ2cAAABaWlpQUFDDw8OWlpbS0tK9vb1FRUWMjIx1dXU/Pz8PDw+rq6tRViyLAAADC0lEQVR4nO2biZKCMAxAoUAPRE6hnML/f+XW0d3VFaVdW1Nn+r7gTWOSklTPczgcDofD4XC8laRI8zwvCmiPZyRpFlTlEMfx0FQjLxJooVWKpUYMUewLMKaE+ROHdronbQmh/i0IxdkOWuyW7Bj6K2BWddBqV6TVjNc0BfTQWvMzzWP0wPJEWFkS+x49OszLz7RMoRVP8A1NIdpYIJrTLU0hWkNbekX5txqtQQJoz4BIaArRHlaTH6Q0RSEFTfpdLRP1E2EL6ZmtdqH1E4XM+UH2OMWBjnCa3SytKYDrn+OzfvkXBJbyRbNd4q88wQKfy2eRADdQpUkh209QqIxv5XrRNwzqyrxXSSPhmQF5SjejM2EE5DmopLu4i0C1zk/xbD4k7pWaJ1gejR9Slxa1Oo+g6nzHVDTxANU3i1LpHgL2LZcEKomEoNJIfMWp3JMR3JdcguUDjyYwTc+L5DM+hBwwymcSCkDHi5FsaZqBR2GV3B2UQPX2b/JYJvIIflbLJSJPYwsGoNtfc/SYQ0ueaDdOlCJLdh59+Kx/ksGCoJ/h5cObKGaTNZqetxvZen0K/QXa7ZZ8T+9MMfFH+xbHXUBn9HMxwZTMx8iikF+x40FV0pDNjPjNvs3Ba/tjdmnXcc673NLlu8PhcFiCKJd9tkRbLBnv4FpT0U/NUbSfcBvRoIZ67CAaFA8o23xxcX0pwYQdozdf7BNeE7Vlx9kVoeCdpmkwq42SfyH0fVP65T9n+UNYvudzKWnVxsh3UPqOzfGuflFTMJuPfVGpLQ/WMf5aJKleP80TzOy8KZF8rrRNaHQKrriJeQI2uaXJ/1s1V6C1uS4qOeyUw9xIVGm9sc1s6EDlH6nJYWrP3WtLogtHM6mkuG7fxsxCvpB8QikPbkx4RrpK/C8mBs3JXnfYRSYt+j0LxVcrMqBJ/7Ss01njL+BSfwntlR4vSGLg1fKrt/hVDvq/6gIDcfdn/f9Qmkx4Mv1fSoqPEyU99d+WnafztNmzCpF+Dvo9o8AAkyWbeYfD4XA4HA6H44Yvf/8ryEEMJ6EAAAAASUVORK5CYII="}
                  alt="Add Image"
                  href="/addUserImage"
                />

                
        <CardTitle><h5>{user.name}</h5></CardTitle>
        <CardText>Email: {user.email}</CardText>
        <CardText>Password: *********</CardText>
        <Button href="/editUser">Edit</Button>
        </CardBody>
      </Card>
      </p>
        ))}
        </CardColumns>
    </div>
  );
}

