import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

interface Location {
  lat: number;
  lng: number;
}

export class User implements Mappable {
  name: string;
  location: Location;
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.location.latitude()), // Zmiana na Number
      lng: Number(faker.location.longitude())  // Zmiana na Number
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}