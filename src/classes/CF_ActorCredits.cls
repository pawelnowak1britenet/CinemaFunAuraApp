public with sharing class CF_ActorCredits {
    private final static String API_KEY = '8ca5f309e22323994439de7dfac4a86a';
    private final static String BASE_URL_FOR_Search_Actor_Credits = 'https://api.themoviedb.org/3/person/';
//    example for MOVIE credits --->>> 'https://api.themoviedb.org/3/person/597/credits?api_key=8ca5f309e22323994439de7dfac4a86a';

    @AuraEnabled
    public static List<CF_MovieCredits_DTO> getActorCredits(String movieId) {
        CF_MovieCredits_DTO[] movieCastActorsList = new CF_MovieCredits_DTO[]{};

        Http httpActorCredits = new Http();
        HttpRequest request = new HttpRequest();
        String url = BASE_URL_FOR_Search_Actor_Credits + movieId + '/credits?api_key=' + API_KEY ;
        System.debug(url);
        request.setEndpoint(url);
        request.setMethod('GET');
        HttpResponse response;
        try {
            response = httpActorCredits.send(request);
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

        System.debug('movieCastActorsList > > > > > > > > > > ' + movieCastActorsList);

        return movieCastActorsList;
    }
}