({
    catchQueryAndReturnResultsFromApi : function (component, event, helper){
        component.set("v.searchMovies", event.getParam("searchMovies"));
        component.set("v.inputQuery", event.getParam("inputQuery"));
       helper.getSearchResultsToFront(component);
    }
})