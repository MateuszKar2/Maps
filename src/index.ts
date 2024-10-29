// main.ts (lub inny odpowiedni plik)

import { User } from "./User";
import { Company } from './Company';
import { CustomMap } from "./CustomMap";

// Tworzenie nowych instancji User i Company
const user = new User();
const company = new Company();

// Tworzenie mapy, gdzie 'map' to id elementu w HTML
const customMap = new CustomMap('map');

// Dodawanie znaczników na mapie
customMap.addMarker(user);
customMap.addMarker(company);

//inny programista ma ograniczoną możliwość ingerencji w mój kod
//dodałem właściwość private do mapy
//zdefiniowałem interfejs dla rzeczy które chcą korzystać z mojej mapy => TS sprawdzał czy te rzeczy mają odpowiednie właściwości 
//interakcja między klasami i interfejsami => największy plus Type Script
//aby pomóc TS widzieć błądy możemy skorzystać z implementacji interfejsu :)