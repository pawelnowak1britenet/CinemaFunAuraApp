public with sharing class CF_SearchForMovieActor {

    @AuraEnabled
    public static List<CF_Movie_DTO> getMoviesList(String searchQuery){
        System.debug('To jest parametr przekazany z INPUT Search > ' + searchQuery);
        CF_MovieDbApiHandler apiHelper = new CF_MovieDbApiHandler();
        List<CF_Movie_DTO> movieDTOList = apiHelper.getMovies(searchQuery, 1);
//        System.debug('movieDTOList > ' + movieDTOList);

        searchQuery += '%';
        List<Movie__c> movies = Database.query('SELECT Id, Name, Adult__c, Title__c, Original_language__c, ' +
                'Original_title__c, Popularity__c, Release_date__c, Vote_average__c, ' +
                'Vote_count__c FROM Movie__c WHERE Name LIKE :searchQuery');

        for (Movie__c movie : movies){
            CF_Movie_DTO movieDTO = new CF_Movie_DTO(movie);
            movieDTOList.add(movieDTO);
        }
        return movieDTOList;
    }

    @AuraEnabled
    public static List<CF_Actor_DTO> getActorsList(String searchQuery){
        CF_MovieDbApiHandler apiHelper = new CF_MovieDbApiHandler();
        List<CF_Actor_DTO> actorsDTOList = apiHelper.getActors(searchQuery, 1);

        searchQuery += '%';
        List<Actor__c> actors = Database.query('SELECT Id, Name, Adult__c, Gender__c, Popularity__c, Known_for_department__c FROM Actor__c WHERE Name LIKE :searchQuery');
        for (Actor__c actor : actors){
            CF_Actor_DTO actorDTO = new CF_Actor_DTO(actor);
            actorsDTOList.add(actorDTO);
        }
        return actorsDTOList;
    }

}