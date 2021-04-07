import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default ()=>{
    return(
        
     <div className="link_container">
         <Link className="users_link" to={{ pathname: '/userList'}}>USERS</Link>
         <Link className="users_link" to={{ pathname: '/' }}>POSTS</Link>
        </div>
        
    )
}