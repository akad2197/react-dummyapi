import React, { useEffect, useState } from 'react'
import DataService from '../../Provider/Service/DataService'
import LikeSvg from '../../Assets/Like.svg'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
export default  ()=>{

    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#3c4cad"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>

    const [postList , setPostList] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getPostList()
    },[])

    const getPostList = async () =>{
        const response =await  DataService.getPostList();
        setPostList(response);
        setLoading(false)
    }

    if(loading)
       return(<><Loader/></>)

    return(
    <>
    <Header/>
        <div className="post_list">

           { postList.map(post=>
            <div className="post_list_element">
            <div className="post_list_element_header">
                <img className="post_list_element_header_img" src={post.owner.picture}></img>
                <p className="bold overflow_ellipsis">{post.owner.firstName +' '+ post.owner.lastName}
                <br/><span className="light">{post.owner.email}</span>
                </p>

            </div>
            <img className="post_list_element_img" src={post.image}/>
            <div className="post_list_element_middle">
                <div className="post_list_element_middle_tags">
                    {post.tags.map(tag =>(
                        <p className="tag ">{tag}</p>
                    ))}                                    
                </div>

                <div className="post_list_element_middle_info">
                    <p>{post.text}</p>
                    <a className="overflow_ellipsis">{post.link}</a>
                </div>
                <div className="post_list_element_middle_likes">
                    <div class="d_flex">
                    <img className="post_list_element_middle_likes_img" src={LikeSvg}></img>
                    <p>{post.likes}</p>
                    </div>
                    <p>{new Date(post.publishDate).toLocaleDateString()}</p>

                </div>
            </div>
            <div className="post_list_element_footer">
                
            </div>
        </div>
            ) }
        </div>
        </>
    )
}