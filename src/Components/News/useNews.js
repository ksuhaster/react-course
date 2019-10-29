//import { useEffect } from 'react';
import { api } from './api';
import { useLocalStorage } from './useLocalStorage';

export const useNews = () => {
    const [ posts, setPosts ] = useLocalStorage('postsCache', []);

    if (posts.length === 0) {
        console.log('go for the posts');
        (async () => {
            const posts = await api.getPosts();
            setPosts(posts);
        })();
    }

    return { posts };
}
