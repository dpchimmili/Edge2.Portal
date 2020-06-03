import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/Movies/";
http.setJwt('');

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint+'GetAll');
}

export function getMovie(movieId) {
    return http.get(apiEndpoint + 'GetSingle/'+movieId);
}

export function saveMovie(movie) {
    if (movie._id) {
        debugger;
    const body = { ...movie };
    
      return http.put(apiEndpoint + 'UpdateMovie', body);
  }

    return http.post(apiEndpoint + 'AddMovie', movie);
}

export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + 'DeleteMovie/' + movieId);
}
