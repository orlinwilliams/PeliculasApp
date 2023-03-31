import axios  from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'f66b93364466dc5720141ebb3fcabcbb',
        language:'es-ES'
    }

});

export default movieDB;