declare module '@faker-js/faker' {
  export const faker: {
    name: {
      firstName: () => string;
    };
    company: {
      companyName: () => string;
      catchPhrase: () => string;
    };
    location: {
      latitude: () => string;
      longitude: () => string;
    };
  };
}