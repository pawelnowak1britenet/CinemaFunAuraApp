public class CF_MovieDbApiHandler {
    private String API_KEY = '8ca5f309e22323994439de7dfac4a86a';
    private final static String BASE_URL_FOR_Search = 'https://api.themoviedb.org/3/search/';
//    example for MOVIE --->>> 'https://api.themoviedb.org/3/search/movie?api_key=8ca5f309e22323994439de7dfac4a86a&query=titanic&page=1';

    //REFACTOR, jedna metoda do budowania URLa, na search na movie detail itd.
    public String buildUrl(String typeOfObjectToSearch, String movieName, Integer page) {
        String url;
        url = BASE_URL_FOR_Search + typeOfObjectToSearch + '?api_key=' + API_KEY + '&query=' + movieName + '&page=' + page;
        System.debug(url);
        return url;
    }

    public List<CF_Movie_DTO> getMovies(String movieName, Integer page) {
        CF_Movie_DTO[] moviesList = new CF_Movie_DTO[]{};

        Http httpMovieDb = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(this.buildUrl('movie', movieName, page));
        request.setMethod('GET');
        HttpResponse response;
        try {
            response = httpMovieDb.send(request);
        } catch (Exception e) {
            System.debug('error > ' + e);
            throw e;
        }
        System.debug('response > ' + response);
        System.debug('response.getBody() > ' + response.getBody());

        if (response.getStatusCode() == 200) {
            CF_PageResults_Movie res = (CF_PageResults_Movie) System.JSON.deserialize(response.getBody() , CF_PageResults_Movie.class);
            moviesList = res.results;
        }
        for(CF_Movie_DTO move: moviesList) {
            move.backdrop_path = move.backdrop_path == null? null : 'https://www.themoviedb.org/t/p/w220_and_h330_face' + move.backdrop_path;
        }
        return moviesList;
    }

    public List<CF_Actor_DTO> getActors(String actorName, Integer page) {
        CF_Actor_DTO[] actorsList = new CF_Actor_DTO[]{};

        Http httpActorDb = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(this.buildUrl('person', actorName, page));
        System.debug('url >' + this.buildUrl('person', actorName, page));
        request.setMethod('GET');
        HttpResponse response;
        try {
            response = httpActorDb.send(request);
        } catch (Exception e) {
            System.debug('error > ' + e);
            throw e;
        }
        System.debug('response > ' + response);
        System.debug('response.getBody() > ' + response.getBody());

        if (response.getStatusCode() == 200) {
            CF_PageResults_Actor res = (CF_PageResults_Actor) System.JSON.deserialize(response.getBody() , CF_PageResults_Actor.class);
            System.debug(res.results);
            actorsList = res.results;
        }
        return actorsList;
    }
}