public with sharing class CF_AddToSpecialList {

    @AuraEnabled
    public static void addMovieToSpecialList(String movieId){
        System.debug('jestem w metodzie CF_AddToSpecialList');
        System.debug('movieId : ' + movieId);

        SpecialList__c newMovieOnSpecialList = new SpecialList__c();
        newMovieOnSpecialList.TaggedMovieId__c = movieId;

        upsert newMovieOnSpecialList;

    }

}