public with sharing class CF_Movie_DTO {

    public CF_Movie_DTO(Movie__c movie) {
        this.adult = movie.Adult__c;
        this.original_language = movie.Original_language__c;
        this.original_title = movie.Original_title__c;
        this.popularity = movie.Popularity__c;
        this.release_date = movie.Release_date__c.format();
        this.title = movie.Title__c;
        this.vote_average = movie.Vote_average__c;
        this.vote_count = Integer.valueOf(movie.Vote_count__c);

    }
    //IMG URL example dla lord of the ring
//https://www.themoviedb.org/t/p/w220_and_h330_face/kWYfW2Re0rUDE6IHhy4CRuKWeFr.jpg
    @AuraEnabled public Boolean adult { get; set; }
    @AuraEnabled public String backdrop_path { get; set; }    ///6VmFqApQRyZZzmiGOQq2C92jyvH.jpg
    @AuraEnabled public Integer[] genre_ids { get; set; }
    @AuraEnabled public Integer id { get; set; }                 //597
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

    public static CF_Movie_DTO parse(String json) {
        return (CF_Movie_DTO) System.JSON.deserialize(json, CF_Movie_DTO.class);
    }
}