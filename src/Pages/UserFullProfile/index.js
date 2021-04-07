import React, { useEffect, useState } from 'react'
import DataService from '../../Provider/Service/DataService'
import Config from '../../Provider/Config/Config'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
import Helper from '../../Helper/Helper'


export default (props) => {

    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserProfile()
    }, [])

    const getUserProfile = async () => {
        if (!props.location.userID) {           
            Helper.ErrorMessage("Please choose profile that you want to see.You will redirect to UserList page")
            setTimeout(function () {
                window.location.href = "/userList"
            }, 3000);

        }
         else {
            const response = await DataService.getUserFullProfile(props.location.userID)
            setUserDetails(response);
            setLoading(false)
         }


    }

    if (loading)
        return (<Loader />)

    return (
        <>
            <Header />
            <div className="full_profile_container">
                <div className="full_profile">
                    <img className="full_profile_img" src={userDetails.picture}></img>
                    <div className="full_profile_general_detail_container">
                        <p className="light" >
                            {userDetails.id}
                        </p>
                        <p className="bold"><span>{userDetails.title + ' ' + userDetails.firstName + ' ' + userDetails.lastName}</span> { }</p>
                        <p className="overflow_ellipsis bold">Gender: <span className="overflow_ellipsis light">{userDetails.gender}</span></p>
                        <p className="overflow_ellipsis bold">Date Of Birth: <span className="overflow_ellipsis light">{ new Date(userDetails.dateOfBirth).toLocaleDateString()}</span></p>
                        <p className="overflow_ellipsis bold">Register Date: <span className="overflow_ellipsis light"> { new Date(userDetails.registerDate).toLocaleDateString()}</span></p>
                        <p className="overflow_ellipsis bold">Email: <span className="overflow_ellipsis light">{userDetails.email}</span></p>
                        <p className="overflow_ellipsis bold">Phone: <span className="overflow_ellipsis light">{userDetails.phone}</span></p>
                    </div>
                    <div className="full_profile_adress_container">
                        <p className="bold"> Address</p>
                        <span>{userDetails.location.country + ',' + userDetails.location.state + ',' + userDetails.location.city + ' ' + userDetails.location.street}</span>
                        <iframe
                            className="google_map"
                            loading="lazy"
                            allowFullscreen
                            src={"https://www.google.com/maps/embed/v1/place?key=" + Config.Google_API_Key +
                                "&q=" + userDetails.location.country + ' ' + userDetails.location.city}>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}