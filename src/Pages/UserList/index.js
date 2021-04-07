import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DataService from '../../Provider/Service/DataService'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
import '../../Scss/style.scss'

export default () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await DataService.getUserList()
        setUserList(response)
        setLoading(false)
    }

    if(loading)
       return(<Loader/>)
  
    return (
        <>
        <Header/>
        <div className="user_list">
             {
                userList.map(user => {
                    return (
                            <div className="user_list_element">
                                <img className="user_list_element_img" src={user.picture} />
                                <div className="user_list_element_description_container">
                                    <p className="overflow_ellipsis light" >
                                        {user.id}
                                    </p>
                                    <p className="overflow_ellipsis bold">{user.lastName+' '+ user.firstName}</p>
                                    <p className="overflow_ellipsis light"> {user.email}</p>
                                </div>
                                <div className="user_list_element_links_container">
                                <Link to={{ pathname: '/userProfile', userID:user.id}}>Get Full Profile</Link>
                                </div>
                            </div>
                    )

                })


            } 
            </div>
        </>
    )
}