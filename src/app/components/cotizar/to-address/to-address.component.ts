import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectsService } from 'src/app/services/selects.service';
import { ServiceMainComponent } from '../service-main/service-main.component';

@Component({
  selector: 'app-to-address',
  templateUrl: './to-address.component.html',
  styleUrls: ['./to-address.component.scss']
})
export class ToAddressComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({});
  buildings: any = [];
  markers: google.maps.Marker[] = [];
  position = {
    lat: -33.4632207,
    lng: -70.6801927,
    zoom: 13,
    mapType:  "roadmap" 
  }
  constructor(
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    public main: ServiceMainComponent,
    public selectService: SelectsService
  ) { }

  ngOnInit(): void {
    this.main.destination.latitude = this.position.lat;
    this.main.destination.longitud = this.position.lng;
    this.form = this.formBuilder.group({
      city: [this.main.destination.city, [Validators.required]],
      comuna: [this.main.destination.comuna, [Validators.required]],
      building_id: [this.main.destination.building_id],
      address: [this.main.destination.address, [Validators.required]],
      condominium: [this.main.destination.condominium, [Validators.required]],
      house: [this.main.destination.condominium, [Validators.required]],
      latitude: [this.main.destination.latitude],
      longitud: [this.main.destination.longitud],
      parking_available: [this.main.destination.parking_available, [Validators.required]],
      elevator_available: [this.main.destination.elevator_available, [Validators.required]],
    });
    this.getBuildings();
    this.initAutocomplete();
  }

  changeParkingAvailable(){
    this.parking_available?.setValue(JSON.parse(this.parking_available?.value));    
  }

  changeElevatorAvailable(){
    if(this.building_id?.value == '1'){
      this.elevator_available?.setValue(false); 
     }  

    if(this.elevator_available?.value){
     this.elevator_available?.setValue(JSON.parse(this.elevator_available?.value)); 
    }    
       
  }

  next() {
    this.main.destination = this.form.value;
    this.main.step$.next(4);
  }

  back() {
    this.main.step$.next(2);
  }

  getBuildings() {
    this.selectService.getBuildings().subscribe((res: any) => {
      this.buildings = res.data;
    })
  }

  initAutocomplete() {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: this.position.lat, lng: this.position.lng },
        zoom: this.position.zoom,
        mapTypeId: this.position.mapType
      }
    );
    
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);
  
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    });
  
    //let markers: google.maps.Marker[] = [];
  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      
      this.getLocations(places[0].address_components);
      
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        let nombreMarcador: string=place.name;
        this.markers = [];
        this.markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: nombreMarcador,
            position: place.geometry.location,
          })
        );
        
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
        this.latitude?.setValue(place.geometry.location.lat());
        this.longitud?.setValue(place.geometry.location.lng());
        
      });
      console.log(`lat: ${this.markers[0].getPosition()?.lat()}`)
      console.log(`lng: ${this.markers[0].getPosition()?.lng()}`)
      map.fitBounds(bounds);
    });

  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: { lat: this.position.lat, lng: this.position.lng }
  });

  //infoWindow.open(map);

  // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      //infoWindow.close();

      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      
      console.log(mapsMouseEvent.latLng.toJSON())
      //infoWindow.open(map);
      
      for (let i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers=[];
      this.addMarker(mapsMouseEvent.latLng, map, '*');
      
    });   
    
  }

  addMarker(location: google.maps.LatLng | google.maps.LatLngLiteral, map: google.maps.Map, nombreMarcador: string) {
    const marker = new google.maps.Marker({
      position: location,
      map,
    });
    this.markers.push(marker);
  }

  getLocations(spans: any){    
    for(let local of spans)
    {      
      if (local.types[0]=='administrative_area_level_1')
        this.city?.setValue(local.long_name);
      if (local.types[0]=='locality')
        this.comuna?.setValue(local.long_name);
      if (local.types[0]=='route')
        this.comuna?.setValue(local.long_name);    
    }
  }

  get city() {
    return this.form.get('city');
  }
  get comuna() {
    return this.form.get('comuna');
  }
  get address() {
    return this.form.get('address');
  }
  get building_id() {
    return this.form.get('building_id');
  }
  get condominium() {
    return this.form.get('condominium');
  }
  get house() {
    return this.form.get('house');
  }
  get latitude() {
    return this.form.get('latitude');
  }
  get longitud() {
    return this.form.get('longitud');
  }
  get parking_available() {
    return this.form.get('parking_available');
  }
  get elevator_available() {
    return this.form.get('elevator_available');
  }
}
