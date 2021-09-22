public with sharing class CF_SearchForMovieActor {

    @AuraEnabled
    public static List<CF_Movie_DTO> getMoviesList(String searchQuery){
        System.debug('To jest parametr przekazany z INPUT Search > ' + searchQuery);
        CF_MovieDbApiHandler apiHelper = new CF_MovieDbApiHandler();
        String variableToClearSpaces = searchQuery.replace(' ', '%20');
        List<CF_Movie_DTO> movieDTOList = apiHelper.getMovies(variableToClearSpaces, 1);
        List<MovieSpecial__c> specialMoviesList;
        Map<String, MovieSpecial__c> favouriteMoviesMap = new Map<String, MovieSpecial__c>();
        Map<String, MovieSpecial__c> bannedMoviesMap = new Map<String, MovieSpecial__c>();

        List<Movie__c> movies = Database.query('SELECT Id, Name, Adult__c, Title__c, Original_language__c, ' +
                'Original_title__c, Popularity__c, Release_date__c, Vote_average__c, ' +
                'Vote_count__c, PhotoId__c FROM Movie__c WHERE Name LIKE :searchQuery');

        for (Movie__c movie : movies){
            CF_Movie_DTO movieDTO = new CF_Movie_DTO(movie);
            movieDTO.isInternal = true;
            movieDTOList.add(movieDTO);
        }

        specialMoviesList = [SELECT MovieId__c, isFavourite__c, isBan__c, UserId__c FROM MovieSpecial__c WHERE UserId__c = :UserInfo.getUserId()];
        System.debug('ulubione filmy LISTA >> ' + specialMoviesList);

        for(MovieSpecial__c specialMovie : specialMoviesList){
            if(specialMovie.isFavourite__c == true){
                favouriteMoviesMap.put(specialMovie.MovieId__c, specialMovie);
            }
            if(specialMovie.isBan__c == true){
                bannedMoviesMap.put(specialMovie.MovieId__c, specialMovie);
            }
        }

        for(CF_Movie_DTO movie : movieDTOList) {
            if (favouriteMoviesMap.containsKey(movie.id)) {
                movie.isFavourite = true;
            }
            if (bannedMoviesMap.containsKey(movie.id)) {
                movie.isBanned = true;
            }
        }

        return movieDTOList;
    }

    @AuraEnabled
    public static List<CF_Actor_DTO> getActorsList(String searchQuery){
        CF_MovieDbApiHandler apiHelper = new CF_MovieDbApiHandler();
        String variableToClearSpaces = searchQuery.replace(' ', '%20');
        List<CF_Actor_DTO> actorsDTOList = apiHelper.getActors(variableToClearSpaces, 1);

        List<Actor__c> actors = Database.query('SELECT Id, Name, Adult__c, Gender__c, Popularity__c, Known_for_department__c FROM Actor__c WHERE Name LIKE :searchQuery');
        for (Actor__c actor : actors){
            CF_Actor_DTO actorDTO = new CF_Actor_DTO(actor);
            actorsDTOList.add(actorDTO);
        }
        return actorsDTOList;
    }

    @AuraEnabled
    public static List<CF_Movie_DTO> getFavouriteList(){
        List<MovieSpecial__c> moviesSpecialList = [SELECT Id, Name, MovieId__c, isBan__c, isFavourite__c, Img_path__c, Popularity__c, Vote_average__c, UserId__c FROM MovieSpecial__c WHERE isFavourite__c = true AND UserId__c = :Userinfo.getUserId()];
        List<CF_Movie_DTO> moviesSpecialToBeShown = new List<CF_Movie_DTO>();
        //soql -> tyylko najpierw trzeba dodać do movespecial__c info któe są używane na froncie (backdrop_path, description, taing itp)
        //pprzeiterować wszystkie movie scpecial któe mają favouirete = true -> przerobić na movie dto (potrzebny konstruktor moviedto (moviescpecial__c))
        for(MovieSpecial__c oneMovieSpecial : moviesSpecialList){
            CF_Movie_DTO movieToBeShown = new CF_Movie_DTO(oneMovieSpecial);
            moviesSpecialToBeShown.add(movieToBeShown);
        }
        return moviesSpecialToBeShown;
    }

    @AuraEnabled
    public static List<CF_Movie_DTO> getBlackList(){
        List<MovieSpecial__c> moviesSpecialList = [SELECT Id, Name, MovieId__c, isBan__c, isFavourite__c, Img_path__c, Popularity__c, Vote_average__c, UserId__c FROM MovieSpecial__c WHERE isBan__c = true AND UserId__c = :Userinfo.getUserId()];
        List<CF_Movie_DTO> moviesSpecialToBeShown = new List<CF_Movie_DTO>();
        for(MovieSpecial__c oneMovieSpecial : moviesSpecialList){
            CF_Movie_DTO movieToBeShown = new CF_Movie_DTO(oneMovieSpecial);
            moviesSpecialToBeShown.add(movieToBeShown);
        }
        return moviesSpecialToBeShown;
    }

    @AuraEnabled
    public static String addMovieToSalesforceOnlyTextualData(String movieTitle, String originalTitle, String movieLanguage, Boolean adultMovie) {
        Movie__c newMovie = new Movie__c();
        newMovie.Name = movieTitle;
        newMovie.Title__c = movieTitle;
        newMovie.Adult__c = adultMovie;
        newMovie.Original_title__c = originalTitle;
        newMovie.Original_language__c = movieLanguage;

//        if (String.isNotBlank(movieTitle)){
//        }
        upsert newMovie;
        return newMovie.id;
    }

    @AuraEnabled
    public static void updateImage(String movieId, String imageId) {
        Movie__c newMovie = new Movie__c();
        newMovie.Id = movieId;
        newMovie.PhotoId__c = 'https://britenet-9e-dev-ed--c.documentforce.com/servlet/servlet.FileDownload?file=' + imageId;
        update newMovie;
    }
}