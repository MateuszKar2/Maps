

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {

    const mapElement = document.getElementById(divId);//
    if (!mapElement) {//
        throw new Error(`Element with id ${divId} not found`);//
    }

    // this.googleMap = new google.maps.Map(document.getElementById(divId) {

      this.googleMap = new google.maps.Map(mapElement, {//
        zoom: 1,
        center: {
        lat: 0,
        lng: 0
      }
    });
  }

addMarker(mappable: Mappable ): void {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: {
      lat: mappable.location.lat,
      lng: mappable.location.lng
    }
  });
  marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!'
      });

      infoWindow.open(this.googleMap, marker)
  })
}
};

