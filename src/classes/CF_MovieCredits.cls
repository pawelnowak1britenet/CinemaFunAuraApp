public with sharing class CF_MovieCredits {
    private final static String API_KEY = '8ca5f309e22323994439de7dfac4a86a';
    private final static String BASE_URL_FOR_Search_Movie_Credits = 'https://api.themoviedb.org/3/movie/';
    //example for MOVIE credits --->>> 'https://api.themoviedb.org/3/movie/808/credits?api_key=8ca5f309e22323994439de7dfac4a86a';

    @AuraEnabled
    public static List<CF_MovieCredits_DTO> getMovieCredits(String movieId) {
        CF_MovieCredits_DTO[] movieCastActorsList = new CF_MovieCredits_DTO[]{};
        Http httpMovieCredits = new Http();
        HttpRequest request = new HttpRequest();
        String url = BASE_URL_FOR_Search_Movie_Credits + movieId + '/credits?api_key=' + API_KEY ;
        System.debug(url);
        request.setEndpoint(url);
        request.setMethod('GET');
        HttpResponse response;
        try {
            response = httpMovieCredits.send(request);
        } catch (Exception e) {
            System.debug('error > ' + e);
            throw e;
        }
        System.debug('response.getStatusCode() > ' + response.getStatusCode());
        if (response.getStatusCode() == 200) {
            String properResponse = response.getBody().replace('cast', 'movieCast');
            CF_PageResults_MovieCredits res = (CF_PageResults_MovieCredits) System.JSON.deserialize(properResponse , CF_PageResults_MovieCredits.class);
            movieCastActorsList = res.movieCast;
            System.debug('res > ' + res);
        }
        return movieCastActorsList;
    }

    @AuraEnabled
    public static String addClickedMovieToFavourities(String movieId, String movieTitle, String img_path, Decimal popularity, Decimal vote_average){
        CF_FavouritiesAndBanHelper.addMovieToFavourities(movieId, movieTitle, img_path, popularity, vote_average);
    return null;
    }

    @AuraEnabled
    public static void removeClickedMovieFromFavourities(String movieId){
        CF_FavouritiesAndBanHelper.removeMovieFromFavourities(movieId);
    }

    @AuraEnabled
    public static String addClickedMovieToBlackList(String movieId, String movieTitle, String img_path, Decimal popularity, Decimal vote_average){
        CF_FavouritiesAndBanHelper.addMovieToBlackList(movieId, movieTitle, img_path, popularity, vote_average);
        return null;
    }

    @AuraEnabled
    public static void removeClickedMovieFromBlackList(String movieId){
        CF_FavouritiesAndBanHelper.removeMovieFromBlackList(movieId);
    }

}