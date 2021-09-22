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
         var cmpEvent = component.getEvent("toggleSpinner");
         cmpEvent.fire();
         var newEvent = $A.get("e.c:eventShowFavouriteList");
         newEvent.setParams(
             {
                 "showBlackList" : false,
                 "showFavourite" : true,
             }
         );
         newEvent.fire();
    },

    showBlackList : function(component, event, helper){
         var cmpEvent = component.getEvent("toggleSpinner");
         cmpEvent.fire();
         var newEvent = $A.get("e.c:eventShowFavouriteList");
         newEvent.setParams(
             {
                 "showBlackList" : true,
                 "showFavourite" : false,
             }
         );
         newEvent.fire();
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