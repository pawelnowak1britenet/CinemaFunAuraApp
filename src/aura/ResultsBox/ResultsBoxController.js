({
    catchQueryAndReturnResultsFromApi : function (component, event, helper){
        component.set("v.searchMovies", event.getParam("searchMovies"));
        component.set("v.inputQuery", event.getParam("inputQuery"));
        component.set("v.typeOfResults", "Search");
        component.set("v.showApproved", false);
        helper.getSearchResultsToFront(component);
    },

    showSpecialList : function(component, event, helper) {
        component.set("v.searchMovies", "Movie");
        var showSpecialListParam = event.getParam('showSpecialListType');
        console.log(event.getParam('showSpecialListType'));
        if (event.getParam('showSpecialListType') == 'Favourite') {
            component.set("v.typeOfResults", "Favourite");
            component.set("v.showApproved", false);
            helper.getFavouriteList(component);
        }
        if (event.getParam("showSpecialListType") == 'BlackList') {
            component.set("v.typeOfResults", "BlackList");
            component.set("v.showApproved", false);
            helper.getBlackList(component);
        }
        if (event.getParam("showSpecialListType") == 'MyMovies') {
           component.set("v.typeOfResults", "MyMovies");
           component.set("v.showApproved", true);
           helper.getMyMovies(component);
        }
    },
    onRefresh: function(component, event, helper) {
        if (component.get("v.typeOfResults") == "Search"){
        helper.getSearchResultsToFront(component);
        }
        if (component.get("v.typeOfResults") == "Favourite"){
        helper.getFavouriteList(component);
        }
        if (component.get("v.typeOfResults") == "BlackList"){
        helper.getBlackList(component);
        }
        if (component.get("v.typeOfResults") == "MyMovies"){
        helper.getMyMovies(component);
        }
    },

    addMovieToDBOnlyTextualData : function (component, event, helper){
        var action = component.get("c.addMovieToSalesforceOnlyTextualData");

        action.setParams({
            "movieTitle": component.get("v.inputQuery"),
            "originalTitle": component.get("v.formOriginalTitle"),
            "movieLanguage": component.get("v.formMovieLanguage"),
            "adultMovie": component.get("v.formAdultMovie"),
        });

        action.setCallback(this, function(response) {
                  let state = response.getState();
                  let result = response.getReturnValue();
                  if(state === "SUCCESS") {
                      component.set("v.firstStep", false);
                      console.log('result >>>>> ' + result);
                      component.set("v.sObjectId", result);
                      //TOAST SUCCESS
                     var toastEvent = $A.get("e.force:showToast");
                     toastEvent.setParams({
                         "title": "Movie poster.",
                         "type": "info",
                         "message": "Add a movie poster if you can."
                     });
                     toastEvent.fire();
                  } else{
                      //TOAST ERROR
                      var toastEvent = $A.get("e.force:showToast");
                      toastEvent.setParams({
                          "title": "Error.",
                          "type": "error",
                          "message": "Movie has not been added successfully."
                      });
                      toastEvent.fire();
                  }
              });
        $A.enqueueAction(action);

        //TOAST
//        var showSuccessToast = component.get('c.showToast');
//        $A.enqueueAction(showSuccessToast);
    },

    showFavourities : function(component, event, helper){
        var cmpEvent = component.getEvent("toggleSpinner");
        cmpEvent.fire();
        var newEvent = $A.get("e.c:eventShowFavouriteList");
        newEvent.setParams(
          {
              "showFavourite" : true,
              "showBlackList" : false,
              "typeOfResults" : 'Favourite'
          }
        );
      newEvent.fire();
    },
    handleUploadFinished : function (component, event, helper) {
                helper.handleUploadFinished(component, event);
            },
    assignImageToMovie : function (component, event, helper) {
              helper.assignImageToMovie(component, event);
          }

})