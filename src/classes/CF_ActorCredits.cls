public with sharing class CF_ActorCredits {
    private final static String API_KEY = '8ca5f309e22323994439de7dfac4a86a';
    private final static String BASE_URL_FOR_Search_Actor_Credits = 'https://api.themoviedb.org/3/person/';
//    example for MOVIE credits --->>> 'https://api.themoviedb.org/3/person/597/credits?api_key=8ca5f309e22323994439de7dfac4a86a';

    @AuraEnabled
    public static List<CF_Actor_KnownFor_DTO> getActorDetails(String actorId) {
        CF_Actor_KnownFor_DTO[] actorOtherMoviesList = new CF_Actor_KnownFor_DTO[]{};

        Http httpActorCredits = new Http();
        HttpRequest request = new HttpRequest();
        String url = BASE_URL_FOR_Search_Actor_Credits + actorId + '/credits?api_key=' + API_KEY ;
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
            CF_PageResults_ActorCredits res = (CF_PageResults_ActorCredits) System.JSON.deserialize(properResponse , CF_PageResults_ActorCredits.class);
            actorOtherMoviesList = res.movieCast;
            System.debug('res > ' + res);
        }

        System.debug('actorOtherMoviesList > > > > > > > > > > ' + actorOtherMoviesList);

        return actorOtherMoviesList;
    }
}