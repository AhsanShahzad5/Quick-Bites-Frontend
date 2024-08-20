//same as user schema. id taken as string not as mongoose schema

export type User = {
    _id : string;
    email : string ;
    name : string ;
    addressLine1 : string ;
    city : string ;
    country : string ;
}