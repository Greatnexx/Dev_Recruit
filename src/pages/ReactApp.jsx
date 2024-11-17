import { Spinner } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Navbar from '../Components/Navbar';

const ReactApp = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3; // Adjust the number of posts per page as needed

    const fetchData = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${currentPage}`);
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]); 

    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); 
    };

    return (
        <>
        <Navbar/>

            <Link to="/" className="text-blue-700 mb-5 flex items-center">
                <BiArrowBack className='mr-2' />
                Go back 
            </Link>
            <h1 className='text-[20px] font-bold text-center mb-11 w-[60%] m-auto'>Example using a fetchData component to get Data from jsonplaceholder using the useState and useEffect hook in react Displaying the title and Body with pagination</h1>

            {loading ? (
                <Spinner className="h-12 w-12 text-center m-auto mt-28 text-blue-700" />
            ) : (
                <>
                    <div className='grid md:grid-cols-3 gap-4 md:px-[100px] px-9 bg-gray-50'>
                        {posts?.map((post, index) => (
                            <Card className="mt-6 md:w-72" key={post.id}>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-3">
                                        {post.title}
                                    </Typography>
                                    <Typography>
                                        <p className='text-[#000]'>{post.body.substring(0, 90) + '...'}</p>
                                    </Typography>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </>
            )}
            <div className='flex justify-center gap-4 mt-4'>
                <button onClick={handlePrev} className='bg-black py-2 text-white px-5' disabled={currentPage === 1}>Prev</button>
                <button onClick={handleNext} className='bg-black py-2 text-white px-5'>Next</button>
            </div>
        </>
    );
}

export default ReactApp;