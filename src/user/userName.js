import React, { useState, useEffect } from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardImg, Button, CardColumns, NavLink
} from 'reactstrap';
import api from "../api";

export function UserName () {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        api.users.get().then(setUsers)
    }, []);
  
  return (
      <div>
           {users.map(user => (
      <p key={user._id}>
     <NavLink href="/User">{user.name}</NavLink>

      </p>
          ))}
      </div>
  )}