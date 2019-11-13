import { root } from './config.js';

export const api = Object.freeze({
    people: {
        fetch: () => {
            return fetch(`${root}/people/`, {
                method: 'GET'
            })
        }
    },
    person: {
        fetch: (id) => {
            console.log('api fetch id:', id);
            console.log(`${root}/people/${id}/`);
            return fetch(`${root}/people/${id}/`, {
                method: 'GET'
            })
            //return () => {return '{name: "bubu"}';}
        }
    },
});