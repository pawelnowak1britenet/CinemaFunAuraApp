({
    getSearchResultsToFront: function (component){
        //refaktor zamiast rozdzielać TUTAJ to if w Apexie,
        var getSearchResultsAction;
        var callback = function(apexResponse, component){
             let state = apexResponse.getState();
             let result = apexResponse.getReturnValue();
             //console.log(JSON.stringify(apexResponse.getReturnValue()));
             if(state == 'SUCCESS') {
                 component.set("v.ApiResults", result);
                 //if (result.length){
                 //    component.set("v.showSBCWindow", true);
                 //}
                 var cmpEvent = component.getEvent("toggleSpinner");
                     cmpEvent.fire();
             }
        };

        if (component.get("v.searchMovies") == "Movie"){
            getSearchResultsAction = component.get("c.getMoviesList");
        }
        if (component.get("v.searchMovies") == "Actor"){
            getSearchResultsAction = component.get("c.getActorsList");
        }
        getSearchResultsAction.setParams({
            "searchQuery": component.get("v.inputQuery")
        });
        getSearchResultsAction.setCallback(this, callback);

        $A.enqueueAction(getSearchResultsAction);
    }
})