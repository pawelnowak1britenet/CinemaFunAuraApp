({
    addToFavorites : function(component, event){
        var movieToAdd = component.get("c.addClickedMovieToFavourities");

        var callback = function(apexResponse, component){
             if(apexResponse.getState() == 'SUCCESS') {
                 component.set("v.ApiResults", apexResponse.getReturnValue());

                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "Add to favorites.",
                     "type": "info",
                     "message": "Movie added to favorites."
                 });
                 toastEvent.fire();
                 $A.enqueueAction( component.get('v.refresh'));
             }
        };

        movieToAdd.setParams({
            "movieId" : component.get("v.item.id"),
            "movieTitle" : component.get("v.item.title"),
            "img_path" : component.get("v.item.backdrop_path"),
            "popularity" : component.get("v.item.popularity"),
            "vote_average" : component.get("v.item.vote_average")
        });
          var cmpEvent = component.getEvent("toggleSpinner");
          cmpEvent.fire();
        movieToAdd.setCallback(this, callback);
        $A.enqueueAction(movieToAdd);
    },

    removeFromFavorites: function(component, event){
        var movieToRemove = component.get("c.removeClickedMovieFromFavourities");

        var callback = function(apexResponse, component){
             if(apexResponse.getState() == 'SUCCESS') {
                 component.set("v.ApiResults", apexResponse.getReturnValue());

                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "Remove from favorites.",
                     "type": "info",
                     "message": "Movie removed from favorites."
                 });
                 toastEvent.fire();
                 $A.enqueueAction( component.get('v.refresh'));
             }
        };

        movieToRemove.setParams({
           "movieId" : component.get("v.item.id"),
        });

          var cmpEvent = component.getEvent("toggleSpinner");
          cmpEvent.fire();
        movieToRemove.setCallback(this, callback);
        $A.enqueueAction(movieToRemove);
        },

//BLACK LISTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

    addToBlackList : function(component, event, helper){
            var movieToAdd = component.get("c.addClickedMovieToBlackList");
            var callback = function(apexResponse, component){
                 let state = apexResponse.getState();
                 let result = apexResponse.getReturnValue();

                 if(state == 'SUCCESS') {
                     component.set("v.ApiResults", result);

                     var toastEvent = $A.get("e.force:showToast");
                     toastEvent.setParams({
                         "title": "Add to black list.",
                         "type": "info",
                         "message": "Movie added to black list."
                     });
                     toastEvent.fire();
                     $A.enqueueAction( component.get('v.refresh'));
                 }
            };
            movieToAdd.setParams({
                "movieId" : component.get("v.item.id"),
                "movieTitle" : component.get("v.item.title"),
                "img_path" : component.get("v.item.backdrop_path"),
                "popularity" : component.get("v.item.popularity"),
                "vote_average" : component.get("v.item.vote_average")
            });
            movieToAdd.setCallback(this, callback);
              var cmpEvent = component.getEvent("toggleSpinner");
              cmpEvent.fire();
            $A.enqueueAction(movieToAdd);
        },


    removeFromBlackList: function(component, event){
        var movieToRemove = component.get("c.removeClickedMovieFromBlackList");
        var callback = function(apexResponse, component){
             if(apexResponse.getState() == 'SUCCESS') {
                 component.set("v.ApiResults", apexResponse.getReturnValue());

                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "Remove from black list.",
                     "type": "info",
                     "message": "Movie removed from black list."
                 });
                 toastEvent.fire();
                 $A.enqueueAction( component.get('v.refresh'));
             }
        };
        movieToRemove.setParams({
           "movieId" : component.get("v.item.id"),
        });
          var cmpEvent = component.getEvent("toggleSpinner");
          cmpEvent.fire();
        movieToRemove.setCallback(this, callback);
        $A.enqueueAction(movieToRemove);
        }

})