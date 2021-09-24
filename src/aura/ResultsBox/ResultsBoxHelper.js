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
                 if (result.length == 0){
                     component.set("v.showSBCWindow", true);
                 } else {
                     component.set("v.showSBCWindow", false);
                 }
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
    },

    getFavouriteList: function (component) {
        var getResultsAction = component.get("c.getFavouriteList");
        var callback = function(apexResponse, component){
             let state = apexResponse.getState();
             let result = apexResponse.getReturnValue();
             //console.log(JSON.stringify(apexResponse.getReturnValue()));
             if(state == 'SUCCESS') {
                 component.set("v.ApiResults", result);
                 if (result.length == 0){
                     component.set("v.showSBCWindow", true);
                 } else {
                     component.set("v.showSBCWindow", false);
                 }
                 var cmpEvent = component.getEvent("toggleSpinner");
                     cmpEvent.fire();
             }
        };
        getResultsAction.setCallback(this, callback);
        $A.enqueueAction(getResultsAction);
    },
    getBlackList: function (component) {
        var getResultsAction = component.get("c.getBlackList");
        var callback = function(apexResponse, component){
             let state = apexResponse.getState();
             let result = apexResponse.getReturnValue();
             //console.log(JSON.stringify(apexResponse.getReturnValue()));
             if(state == 'SUCCESS') {
                 component.set("v.ApiResults", result);
                 if (result.length == 0){
                     component.set("v.showSBCWindow", true);
                 } else {
                     component.set("v.showSBCWindow", false);
                 }
                 var cmpEvent = component.getEvent("toggleSpinner");
                     cmpEvent.fire();
             }
        };
        getResultsAction.setCallback(this, callback);
        $A.enqueueAction(getResultsAction);
    },

        getMyMovies: function (component) {
            var getResultsAction = component.get("c.getMyMovies");
            var callback = function(apexResponse, component){
                 let state = apexResponse.getState();
                 let result = apexResponse.getReturnValue();
                 //console.log(JSON.stringify(apexResponse.getReturnValue()));
                 if(state == 'SUCCESS') {
                     component.set("v.ApiResults", result);
                     if (result.length == 0){
                         component.set("v.showSBCWindow", true);
                     } else {
                         component.set("v.showSBCWindow", false);
                     }
                     var cmpEvent = component.getEvent("toggleSpinner");
                         cmpEvent.fire();
                 }
            };
            getResultsAction.setCallback(this, callback);
            $A.enqueueAction(getResultsAction);
        },

    //////////////////////////////////////////////////////////////
    readFile: function (component, helper, file) {
            if (!file) return;
            if (!file.type.match(/(image.)/)) {
                return alert('Image file not supported');
            }
            var reader = new FileReader();
            reader.onloadend = function () {
                var dataURL = reader.result;
                console.log(dataURL);
                component.set("v.pictureSrc", dataURL);
                helper.upload(component, file, dataURL.replace("data:", "").replace(/^.+,/, ""));
            };
            reader.readAsDataURL(file);
        },

    upload: function (component, file, base64Data) {
        console.log('uploading photo');
//        component.set("v.spinner", true);
            var action = component.get("c.saveAttachment");
            action.setParams({
                fileName: file.name,
                base64Data: base64Data,
                contentType: file.type
            });
            console.log("Params set");
            action.setCallback(this, function (response) {
                console.log('attachemant id >>>>>>>>>>>>>>>>>>>' + response.getReturnValue());
//                component.set("v.responeId", response.getReturnValue());
//                component.set("v.spinner", false);
            });
            $A.enqueueAction(action);
            console.log("Enqueued");
        },
        handleUploadFinished : function(component, event) {
            var uploadedFileArr = [];
            var sObjectAttachedFiles = component.get("v.sObjectAttachedFiles");
            var sObjectAttachedFilesArr = [];
            if(sObjectAttachedFiles != null && sObjectAttachedFiles != undefined && sObjectAttachedFiles.length > 0){
                [].forEach.call(sObjectAttachedFiles, function(file) {
                    sObjectAttachedFilesArr.push({'Id' : file.Id,
                                                  'Title': file.Title});
                });
            }
            var uploadedFiles = event.getParam("files");
            [].forEach.call(uploadedFiles, function(file) {
                uploadedFileArr.push({'Id' : file.documentId,
                                      'Name': file.name});
                sObjectAttachedFilesArr.push({'Id' : file.documentId,
                                              'Title': file.name});
            });
            for(let index = 0; index < sObjectAttachedFilesArr.length; index++) {
                if(sObjectAttachedFilesArr[index].Id==component.get("v.mainImage")) {
                    sObjectAttachedFilesArr[index].selected = !sObjectAttachedFilesArr[index].selected;
                }
            }
            component.set("v.sObjectAttachedFiles", sObjectAttachedFilesArr);
            var filesUploadedPreviously = component.get('v.uploadedFiles');
            if(filesUploadedPreviously != null && filesUploadedPreviously != undefined && filesUploadedPreviously.length > 0){
                [].forEach.call(filesUploadedPreviously, function(file) {
                    uploadedFileArr.push({'Id' : file.Id,
                                          'Name': file.Name});
                });
            }
            console.log(uploadedFileArr);
            component.set("v.uploadedFiles",uploadedFileArr);
        },

          assignImageToMovie : function (component, event, helper){
            var action = component.get("c.updateImage");
            console.log(component.get("v.uploadedFiles[0].Id"));

            action.setParams({
                "movieId": component.get("v.sObjectId"),
                "imageId": component.get("v.uploadedFiles[0].Id")
            });

            action.setCallback(this, function(response) {
                let state = response.getState();
                let result = response.getReturnValue();
                if(state === "SUCCESS") {
                    console.log('metoda assignImageToMovie');
                    //toast success
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Movie is added.",
                        "type": "success",
                        "message": "Movie has been added successfully."
                    });
                    toastEvent.fire();

                    $A.get('e.force:refreshView').fire();
                } else{
                    //toast error
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
            }
})