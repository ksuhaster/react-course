//import { useEffect } from 'react';
import { api } from './api';
import { useLocalStorage } from './useLocalStorage';

export const useNews = () => {
    const [ posts, setPosts ] = useLocalStorage('postsCache', []);
    const [ postsTime, setPostsTime ] = useLocalStorage('postsTime', null);

    if (posts.length === 0 || postsTime === null ||
            (Date.now() - postsTime) > 10*60*1000) {
        console.log('go for the posts');
        (async () => {
            const posts = await api.getPosts();
            console.log('сходили за posts');
            setPosts(posts);
            setPostsTime(Date.now());
        })();
    }

    return { posts };
}
