public with sharing class CF_Movie_DTO {
    //IMG URL example dla lord of the ring
    //https://www.themoviedb.org/t/p/w220_and_h330_face/kWYfW2Re0rUDE6IHhy4CRuKWeFr.jpg

    public CF_Movie_DTO(Movie__c movie) {
        this.adult = movie.Adult__c;
        this.original_language = movie.Original_language__c;
        this.original_title = movie.Original_title__c;
        this.popularity = movie.Popularity__c;
        this.release_date = movie.Release_date__c != null ? movie.Release_date__c.format() : null;
        this.title = movie.Title__c;
        this.vote_average = movie.Vote_average__c;
        this.vote_count = movie.Vote_count__c != null ? Integer.valueOf(movie.Vote_count__c) : null;
        this.id = movie.Id;
        this.backdrop_path = movie.PhotoId__c;
        this.isInternal = movie.isInternal__c;
        this.approved = movie.Approved__c;
    }

    public CF_Movie_DTO(MovieSpecial__c movieSpecial) {
        this.title = movieSpecial.Name;
        this.isFavourite = movieSpecial.isFavourite__c;
        this.isBanned = movieSpecial.isBan__c;
        this.backdrop_path = movieSpecial.Img_path__c;
        this.popularity = movieSpecial.Popularity__c;
        this.vote_average = movieSpecial.Vote_average__c;
        this.id = movieSpecial.MovieId__c;
    }

    @AuraEnabled public Boolean adult { get; set; }
    @AuraEnabled public String backdrop_path { get; set; }    ///6VmFqApQRyZZzmiGOQq2C92jyvH.jpg
    @AuraEnabled public Integer[] genre_ids { get; set; }
    @AuraEnabled public String id { get; set; }                 //597
    @AuraEnabled public String original_language { get; set; }    //en
    @AuraEnabled public String original_title { get; set; }    //Titanic
    @AuraEnabled public String overview { get; set; }        //101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.
    @AuraEnabled public Double popularity { get; set; }      //88.192
    @AuraEnabled public String poster_path { get; set; }    ///9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg
    @AuraEnabled public String release_date { get; set; }    //1997-11-18
    @AuraEnabled public String title { get; set; }           //Titanics
    @AuraEnabled public boolean video { get; set; }
    @AuraEnabled public Double vote_average { get; set; }    //7.9
    @AuraEnabled public Integer vote_count { get; set; }    //19732
    @AuraEnabled public String media_type { get; set; }    //na potrzeby relacji z aktorem np 'movie'
    @AuraEnabled public Boolean isFavourite { get; set; }    //na potrzeby relacji z aktorem np 'movie'
    @AuraEnabled public Boolean isBanned { get; set; }    //na potrzeby relacji z aktorem np 'movie'
    @AuraEnabled public Boolean isInternal { get; set; }    //na potrzeby relacji z aktorem np 'movie'
    @AuraEnabled public Boolean approved { get; set; }

    public static CF_Movie_DTO parse(String json) {
        return (CF_Movie_DTO) System.JSON.deserialize(json, CF_Movie_DTO.class);
    }
}