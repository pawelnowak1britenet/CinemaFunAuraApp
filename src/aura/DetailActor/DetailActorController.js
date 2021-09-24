({

    doInit: function(component, event, helper) {
        let actorOtherMoviesList = component.get("c.getActorDetails");
        actorOtherMoviesList.setParams({
            "actorId" : component.get("v.recordId")
        });

        actorOtherMoviesList.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                console.log(component.get("v.item").name);
                console.log(component.get("v.item").biography);
                console.log(component.get("v.item").birthday);
                component.set("v.otherActorMoviesList", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + response.getState());
            }
        });

        $A.enqueueAction(actorOtherMoviesList);
    }

})