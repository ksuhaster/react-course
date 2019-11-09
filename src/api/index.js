import { root } from './config.js';

export const api = Object.freeze({
    people: {
        fetch: () => {
            return fetch(`${root}/people/`, {
                method: 'GET'
            })
        }
    },
    /*
    person: (id) => {
        fetch: () => {
            return fetch(`${root}/people/${id}/`, {
                method: 'GET'
            })
        }
    },
    */
});