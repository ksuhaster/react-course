import { root } from './config.js';

export const api = Object.freeze({
    people: {
        fetch: () => {
            return fetch(`${root}/people/`, {
                method: 'GET'
            })
        }
    },

});