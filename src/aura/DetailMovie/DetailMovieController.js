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
        component.set("v.item.isFavourite", true);
        component.set("v.item.isBanned", false);
        helper.addToFavorites(component, event);
    },
    deleteFavorite : function(component, event, helper){
         component.set("v.item.isFavourite", false);
         component.set("v.item.isBanned", false);
         helper.removeFromFavorites(component, event);
         },

    addToBlackList : function(component, event, helper){
          component.set("v.item.isFavourite", false);
          component.set("v.item.isBanned", true);
          helper.addToBlackList(component, event);
     },
    removeFromBlackList : function(component, event, helper){
          component.set("v.item.isFavourite", false);
          component.set("v.item.isBanned", false);
          helper.removeFromBlackList(component, event);
     }

})