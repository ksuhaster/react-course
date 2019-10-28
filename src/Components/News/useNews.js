import { useEffect } from 'react';
import { api } from './api';
import { useLocalStorage } from './useLocalStorage';

export const useNews = () => {
    const [ posts, setPosts ] = useLocalStorage('postsCache', []);

    useEffect(() => {
        (async () => {
            const posts = await api.getPosts();
            console.log('сходили за posts');
            setPosts(posts);
        })();
    }, []);

    return { posts };
}
