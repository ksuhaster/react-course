import { api } from './api';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { useState } from 'react';

export const useNews = () => {
    const [ posts, setPosts ] = useLocalStorage('postsCache', []);
    const [ postsTime, setPostsTime ] = useLocalStorage('postsTime', null);
    const [loading, setLoading] = useState(false);

    if (posts.length === 0 || postsTime === null ||
            (Date.now() - postsTime) > 10*60*1000) {
        (async () => {
            //setLoading(true);
            const posts = await api.getPosts();
            setPosts(posts);
            setPostsTime(Date.now());
            //setLoading(false);
        })();
    }

    return { posts };
}
