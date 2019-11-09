const url = 'https://api.backendless.com/520C1D14-9413-E1AA-FF78-6A4DB0E26E00/9C9A66AC-959A-D6F4-FFAB-BD991AA34A00';

export const api = {
    async getPosts() {
        const response = await fetch(`${url}/data/news`);

        return await response.json();
    }
}
