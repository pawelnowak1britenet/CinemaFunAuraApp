
public with sharing class CF_MovieDetail {

    public boolean adult;
    public String backdrop_path;	///e9XRikkyth0GtG8RkU3XNm0oMsA.jpg
    public cls_belongs_to_collection belongs_to_collection;
    public Integer budget;	//0
    public cls_genres[] genres;
    public String homepage;	//
    public Integer id;	//44918
    public String imdb_id;	//tt1640571
    public String original_language;	//en
    public String original_title;	//Titanic II
    public String overview;	//On the 100th anniversary of the original voyage, a modern luxury liner christened "Titanic 2," follows the path of its namesake. But when a tsunami hurls an ice berg into the new ship's path, the passengers and crew must fight to avoid a similar fate.
    public Double popularity;	//37.382
    public String poster_path;	///3m12UeP1DMfhYZyvpLftaJGsyp3.jpg
    public cls_production_companies[] production_companies;
    public cls_production_countries[] production_countries;
    public String release_date;	//2010-08-07
    public Integer revenue;	//0
    public Integer runtime;	//90
    public cls_spoken_languages[] spoken_languages;
    public String status;	//Released
    public String tagline;	//100 years later, lightning strikes twice.
    public String title;	//Titanic II
    public boolean video;
    public Double vote_average;	//4.9
    public Integer vote_count;	//264
    class cls_belongs_to_collection {
    }
    class cls_genres {
        public Integer id;	//28
        public String name;	//Action
    }
    class cls_production_companies {
        public Integer id;	//1311
        public String logo_path;	///ic2bTizdzRLDVzAvN7MXdUg3WQV.png
        public String name;	//The Asylum
        public String origin_country;	//US
    }
    class cls_production_countries {
        public String iso_3166_1;	//US
        public String name;	//United States of America
    }
    class cls_spoken_languages {
        public String english_name;	//English
        public String iso_639_1;	//en
        public String name;	//English
    }
    public static fromJSON parse(String json){
        return (fromJSON) System.JSON.deserialize(json, fromJSON.class);
    }


}