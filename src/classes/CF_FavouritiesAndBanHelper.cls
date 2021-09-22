public with sharing class CF_FavouritiesAndBanHelper {

    public static String addMovieToFavourities(String movieId, String movieTitle, String img_path, Decimal popularity, Decimal vote_average){
        MovieSpecial__c movieSpecial = new MovieSpecial__c();
        movieSpecial.MovieId__c = movieId;
        movieSpecial.Name = movieTitle;
        movieSpecial.isFavourite__c = true;
        movieSpecial.Img_path__c = img_path;
        movieSpecial.Popularity__c = popularity;
        movieSpecial.Vote_average__c = vote_average;
        movieSpecial.UserId__c = UserInfo.getUserId();
        Database.upsert(movieSpecial);
        return null;
    }

    public static void removeMovieFromFavourities(String movieId){
        MovieSpecial__c movieSpecial = [SELECT Id, Name, MovieId__c, isFavourite__c, isBan__c FROM MovieSpecial__c WHERE MovieId__c = :movieId];
        Database.delete(movieSpecial);
    }

    //BLACK LISTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

    public static String addMovieToBlackList(String movieId, String movieTitle, String img_path, Decimal popularity, Decimal vote_average){
        MovieSpecial__c movieSpecial = new MovieSpecial__c();
        movieSpecial.MovieId__c = movieId;
        movieSpecial.Name = movieTitle;
        movieSpecial.isBan__c = true;
        movieSpecial.Img_path__c = img_path;
        movieSpecial.Popularity__c = popularity;
        movieSpecial.Vote_average__c = vote_average;
        movieSpecial.UserId__c = UserInfo.getUserId();
        System.debug('UserInfo.getUserId()' + UserInfo.getUserId());
        Database.upsert(movieSpecial);
        return null;
    }

    public static void removeMovieFromBlackList(String movieId){
        MovieSpecial__c movieSpecial = [SELECT Id, Name, MovieId__c, isFavourite__c, isBan__c FROM MovieSpecial__c WHERE MovieId__c = :movieId];
        Database.delete(movieSpecial);
    }

}