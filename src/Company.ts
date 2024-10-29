import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

interface Location {
  lat: number;
  lng: number;
}

export class Company implements Mappable {
  companyName: string; 
  catchPhrase: string;
  location: Location;
  color: string = "red";

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.location.latitude()),
      lng: Number(faker.location.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase};</h3>
      </div>
    `;
  }
}