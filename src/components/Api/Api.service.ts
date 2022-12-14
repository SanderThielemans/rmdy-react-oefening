import axios from 'axios'

const ENDPOINT = 'https://randomuser.me/api?results=5'

export interface User {
    gender: string
    name: {
        title: string,
        first: string,
        last: string,
    },
    picture: {
        thumbnail: string,
    }
}

const GetRandomUser = async () => {
    try {
        const response = await axios.get(ENDPOINT);
        return response.data.results;
    } catch(error) {
        console.error(error);
    }
}


export default GetRandomUser;