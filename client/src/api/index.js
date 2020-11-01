import axios from 'axios';

const url = 'http://localhost:5000/posts';

function getQueryParams (post) {
    const params = {};
    if(post.searchKey && String(post.searchKey) != ""){
        params['searchKey'] = post.searchKey;
    }
    if(post.price != null && String(post.price) != ""){
        params['value'] = post.price
    }
    return params;
};

export const fetchPosts = (post) => { 
    return axios.get(url, { 
        params: getQueryParams(post)
    });
};