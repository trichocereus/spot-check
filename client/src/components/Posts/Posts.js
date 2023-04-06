import React, { useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';
import useStyles from './styles';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './pagination.css';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const postsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    }

    const pageCount = Math.ceil(posts.length / postsPerPage);

    return (
        !posts.length ? <CircularProgress /> : (
            <div>
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {currentPosts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
                <div>
                    <ReactPaginate
                        activeClassName={'item active '}
                        breakClassName={'item break-me '}
                        breakLabel={'...'}
                        containerClassName={'pagination'}
                        disabledClassName={'disabled-page'}
                        marginPagesDisplayed={2}
                        nextClassName={"item next "}
                        nextLabel={<ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />}
                        onPageChange={handlePageChange}
                        pageCount={pageCount}
                        pageClassName={'item pagination-page '}
                        pageRangeDisplayed={2}
                        previousClassName={"item previous"}
                        previousLabel={<ArrowBackIosIcon style={{ fontSize: 18, width: 150 }} />}
                    />
                </div>
            </div>
        )
    );
}

export default Posts;