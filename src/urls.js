import { API_KEY } from "./constants/constants"
export const Trending = `trending/all/day?api_key=${API_KEY}`
export const Action = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`