import { useState, useEffect } from 'react';
import { api } from './api';

export const useNews = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        (async () => {
            const posts = await api.getPosts();
            setPosts(posts);
        })();
    }, []);

    return { posts };
}
