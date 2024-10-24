import faker from 'faker';



export class Company {

  conpanyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  constructor() {
    this.conpanyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
};
