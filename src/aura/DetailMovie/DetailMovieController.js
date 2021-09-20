({
    doInit: function(component, event, helper) {

            let movieCastActorsList = component.get("c.getMovieCredits");

            movieCastActorsList.setParams({
                "movieId" : component.get("v.recordId")
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
        helper.addToFavorites(component, event);
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