({
    getSearchResultsToFront: function (component, queryString, callback, searchMovies){
        let getSearchResultsAction;
        if (searchMovies){
            getSearchResultsAction = component.get("c.getMoviesList");
        } else {
            getSearchResultsAction = component.get("c.getActorsList");
        }
        getSearchResultsAction.setParams({
            "searchQuery": queryString
        });
        getSearchResultsAction.setCallback(this, callback);
        $A.enqueueAction(getSearchResultsAction);
    }
})