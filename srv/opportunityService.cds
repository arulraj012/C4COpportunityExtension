@protocol: 'rest'
service opportunityService@(path : '/api/v1'){
       @open
    type object {};
    type InputPayload {
  
        entity :String;
        beforeImage:object;
        currentImage:object;
        context:object
    };


    action calculateRevenue(entity :String,beforeImage:object,currentImage:object,context:object) returns object;
}


