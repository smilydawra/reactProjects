import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const BlogList = () => {
    // const [blogs, setBlogs] = useState([]);
    // useEffect(() => {
    //     const fetchBlogList = async () => {
    //         try {
    //             await fetch("http://cms.iversoft.ca/blog/list")
    //                 .then((response) => console.log(response))
    //         } catch (e) {
    //             console.warn(e);
    //         }
    //     }
    //     fetchBlogList();
    // }, [])
    return (
        <>
            <h1 className="text-warning bg-white text-center mt-3">Blog List</h1>
            {/* <NavLink
                to="/blog"
                type="button"
                className="btn btn-primary mb-2 align-right"
            >
                Add New Post
        </NavLink> */}
            <table className="table table-light table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Post</th>
                        {/* <th colSpan="2">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>1</h3>
                        </td>
                        <td>
                            <NavLink to="/single" style={{ textDecoration: "none" }}><h4>Hello there, my first post</h4></NavLink></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BlogList