@protocol: 'rest'
service opportunityService@(path : '/api/v1'){
       @open
    type object {};
    action calculateRevenue(entity :String,beforeImage:object,currentImage:object,context:object) returns object;
}


