//import { useEffect } from 'react';
import { api } from './api';
import { useLocalStorage } from './useLocalStorage';

export const useNews = () => {
    const [ posts, setPosts ] = useLocalStorage('postsCache', []);
    const [ postsTime, setPostsTime ] = useLocalStorage('postsTime', null);

    if (posts.length === 0 || postsTime === null ||
            (Date.now() - postsTime) > 10*60*1000) {
        (async () => {
            const posts = await api.getPosts();
            setPosts(posts);
            setPostsTime(Date.now());
        })();
    }

    return { posts };
}
