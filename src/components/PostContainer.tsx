import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {
        data: posts,
        isLoading,
        error,
        refetch,
    } = postAPI.useFetchAllPostsQuery(limit)
    const [
        createPost,
        {
            error: createError,
            isLoading: isCreateLoading
        }] = postAPI.useCreatePostMutation()

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, []);

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                <button onClick={() => refetch()}>REFETCH</button>
                {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>Произошла ошибка...</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;