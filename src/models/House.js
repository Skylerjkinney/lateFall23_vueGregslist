import { Profile } from "./Profile";

export class House {
    constructor(data) {
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.levels = data.levels
        this.price = data.price
        this.year = data.year
        this.creator = new Profile(data.creator)
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }
}


// bathrooms
// :
// 2
// bedrooms
// :
// 3
// createdAt
// :
// "2023-05-11T21:41:07.979Z"
// creator
// :
// {_id: "63f7d6202d1cf882287f12e2", name: "Charles Francis Xavier",…}
// creatorId
// :
// "63f7d6202d1cf882287f12e2"
// description
// :
// "Super sick house"
// id
// :
// "645d60f381faf24223ae886b"
// imgUrl
// :
// "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg"
// levels
// :
// 2
// price
// :
// 230000
// updatedAt
// :
// "2023-05-11T21:41:07.979Z"
// year
// :
// 2003
// __v
// :
// 0
// _id
// :
// "645d60