export const API_PATH =
    process.env.NODE_ENV === 'development_original'
        ? process.env.API_PATH
        : 'http://localhost:5000/api'