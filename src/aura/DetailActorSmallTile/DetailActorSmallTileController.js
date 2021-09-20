({
    openActorDetail : function(component, event, helper){
        var appEvent = $A.get("e.c:passDataToResultDetail");
        appEvent.setParams({
            "searchType" : "Actor",
            "recordId" : component.get("v.actorTile.id"),
            "recordData" : component.get("v.actorTile")
            });
        appEvent.fire();
    }
})