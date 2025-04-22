class ClientModel {
    constructor(public id: number, public name: string, public email: string,
        public location: string, public status: boolean
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.location = location;
        this.status = status;
    }

    static fakedata: ClientModel[] = [
        {
            "id": 1,
            "name": "Mike Ehrmantraut",
            "email": "mikee@example.com",
            "location": "New York",
            "status": true
        },
        {
            "id": 2,
            "name": "Gale Boetticher",
            "email": "gale@example.com",
            "location": "Los Angeles",
            "status": false
        },
        {
            "id": 3,
            "name": "Charlie Weasley",
            "email": "charlie@example.com",
            "location": "Chicago",
            "status": true
        },
        {
            "id": 4,
            "name": "Dave Beloved",
            "email": "dave@example.com",
            "location": "Houston",
            "status": false
        },
        {
            "id": 5,
            "name": "Eve Atom",
            "email": "eve@example.com",
            "location": "Phoenix",
            "status": true
        },
        {
            "id": 6,
            "name": "Francis Clayton Gallagher",
            "email": "frank@example.com",
            "location": "Philadelphia",
            "status": true
        },
        {
            "id": 7,
            "name": "Hector Salamanca",
            "email": "grace@example.com",
            "location": "San Antonio",
            "status": false
        },
        {
            "id": 8,
            "name": "Hank Schrader",
            "email": "hank@example.com",
            "location": "San Diego",
            "status": true
        },
        {
            "id": 9,
            "name": "Walter Hartwell White",
            "email": "ivy@example.com",
            "location": "Dallas",
            "status": false
        },
        {
            "id": 10,
            "name": "Jesse Pinkman",
            "email": "jack@example.com",
            "location": "San Jose",
            "status": true
        },
        {
            "id": 11,
            "name": "Gus Fring",
            "email": "kate@example.com",
            "location": "Austin",
            "status": true
        },
        {
            "id": 12,
            "name": "Saul Goodman",
            "email": "leo@example.com",
            "location": "Jacksonville",
            "status": false
        },
        {
            "id": 13,
            "name": "Skyler White",
            "email": "mia@example.com",
            "location": "Fort Worth",
            "status": true
        },
        {
            "id": 14,
            "name": "Todd Alquist",
            "email": "nina@example.com",
            "location": "Columbus",
            "status": false
        },
        {
            "id": 15,
            "name": "Tuco Salamanca",
            "email": "oscar@example.com",
            "location": "Charlotte",
            "status": true
        },
        {
            "id": 16,
            "name": "Nam",
            "email": "nam@example.com",
            "location": "Vietnam",
            "status": true
        }
    ]
}

export default ClientModel;

