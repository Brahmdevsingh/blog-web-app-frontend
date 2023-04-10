//API_NOTIFICATION_MESSAGES


export const API_NOTIFICATION_MESSAGES = {

    loading: {
        title: 'Loading...',
        message: 'Data is being loaded,please wait',
    },
    success: {
        title: 'Success...',
        message: 'Data successfully loaded',
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server.Please try again',
    },
    requestFailure: {
        title: 'Error',
        message: 'An error ocurred while parsing request data',
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server.Please check internet connectivity and try again later',
    }

}

//API SERVICE CALL
//SAMPLE REQUEST
//NEED SERVICE CALL 
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/login', method: 'POST' },
    uploadFile: { url: '/file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getPostById: { url: 'post', method: 'GET', query: true }
}