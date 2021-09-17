({
    doInit: function(component, event, helper) {

            // ustawia warunek SearchMovie. Movie/Actor, pobiera z komponentu, a nie z eventu ?
//            var searchMovies = component.get("v.searchMovies") == "true";
//            component.set("v.searchMovies", searchMovies);

            //pobranie current movieId
            let currentMovieId = component.get("v.recordId");
//            console.log('To jest przekazane jako movieId do APEXa ' + currentMovieId);
            //call to API with MovieId
            let movieCastActorsList = component.get("c.getMovieCredits");

            movieCastActorsList.setParams({
                "movieId" : currentMovieId
            });

            movieCastActorsList.setCallback(this, function(response) {
//                console.log('To jest response z OBSADĄ, HURA >>>>>>>>>>> ' + response);
                if (response.getState() === "SUCCESS") {
                    component.set("v.movieCast", response.getReturnValue());
                }
                else {
                    console.log("Failed with state: " + response.getState());
                }
            });

            $A.enqueueAction(movieCastActorsList);
        },

    addToFavorites : function(component, event, helper){
        component.set("v.isFavorite", true);
        component.set("v.isBlackList", false);
        helper.addToFavorites(component, event, helper);
    },
    deleteFavorite : function(component, event, helper){
         component.set("v.isFavorite", false);
         component.set("v.isBlackList", false);
         },

    addToBlackList : function(component, event, helper){
          component.set("v.isFavorite", false);
          component.set("v.isBlackList", true);
     },
    deleteBlackListElement : function(component, event, helper){
          component.set("v.isFavorite", false);
          component.set("v.isBlackList", false);
     }

})