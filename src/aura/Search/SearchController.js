({
     onSearchClick : function(component, event, helper){
         var cmpEvent = component.getEvent("toggleSpinner");
         cmpEvent.fire();

         var newEvent = $A.get("e.c:eventPassQueryStringAndSearchType");
                                     newEvent.setParams(
             {
                 "inputQuery" : component.get("v.queryString"),
                 "searchMovies" : component.get("v.searchMovies"),
                 "typeOfResults" : 'Search'
             }
         );
         newEvent.fire();
     },

    showFavourities : function(component, event, helper){

         var newEvent = $A.get("e.c:eventShowSpecialMovieList");
         newEvent.setParams(
             {
                 "showSpecialListType" : 'Favourite'
             }
         );
         newEvent.fire();
         var cmpEvent = component.getEvent("toggleSpinner");
         cmpEvent.fire();
    },

    showBlackList : function(component, event, helper){
         var newEvent = $A.get("e.c:eventShowSpecialMovieList");
         newEvent.setParams(
             {
                 "showSpecialListType" : 'BlackList'
             }
         );
         newEvent.fire();
         var cmpEvent = component.getEvent("toggleSpinner");
         cmpEvent.fire();
    },
        showMyMovies : function(component, event, helper){
             var newEvent = $A.get("e.c:eventShowSpecialMovieList");
             newEvent.setParams({
                 "showSpecialListType" : 'MyMovies'
                 }
             );
             newEvent.fire();
             var cmpEvent = component.getEvent("toggleSpinner");
             cmpEvent.fire();
        },

     showToast : function(component, event, helper) {
         var toastEvent = $A.get("e.force:showToast");
         toastEvent.setParams({
             "title": "Success!",
             "type": "success",
             "message": "Movie has been added successfully."
         });
         toastEvent.fire();
     }

})