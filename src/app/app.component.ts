import { Component } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, Map, MapOptions, tileLayer, TileLayer } from 'leaflet';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { ElementInfo } from './models/ElementInfo';
import { ElementService } from './services/element.service';
import ExportingModule from 'highcharts/modules/exporting';
import * as Highcharts from "highcharts";


// The modules will work for all charts.

ExportingModule(Highcharts);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  

  public element_info$: BehaviorSubject<ElementInfo>;

  public map: Map;

  private last_clicked_layer: any = null;


  public mapOptions: MapOptions = {
    zoom: 17,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public baseLayer: TileLayer;

  public mapFitBounds: LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor(
    private router: Router,
    private _element_service: ElementService,

  ) {

    this.baseLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: 'anonymous',
      className: 'OSM',
      maxNativeZoom: 19,
      maxZoom: 22,
      minZoom: 5
    });

  }

  public onMapReady(map: Map): void {
    this.map = map;
    this.addLuminairesLayer();

  }


  private async addLuminairesLayer(): Promise<void> {

    let highlight_color = 'red';
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();

    let that = this;
    const options: GeoJSONOptions = {

      pointToLayer: (feature: GeoJSON.Feature, latLng: LatLng) => {
        const layer = circleMarker(latLng);
        layer.on('click', (l) => {

          this._element_service.update_element_info_data(l.target.feature.properties);

        })

        return layer;
      }, onEachFeature(feature, layer) {
        layer.on('click', (l) => {
          const ly = l.target;

          console.log(ly)

          that.map.flyTo(l.latlng, 19, { duration: 0.5 })
          if (that.last_clicked_layer) {
            that.last_clicked_layer.setStyle({ color: '#333',fillColor:'#FFFA4D' });
            that.last_clicked_layer = ly;

            if (ly.options.color == highlight_color) {
              ly.setStyle({ color: '#333',fillColor:'#FFFA4D' });
            } else {
              ly.setStyle({ color: 'rgb(52,149,104)',fillColor:'rgb(52,149,104)' });
            }


          } else {
            that.last_clicked_layer = ly;
            if (ly.options.color == highlight_color) {
              ly.setStyle({ color: '#333',fillColor:'#FFFA4D' });
            } else {
              ly.setStyle({ color: 'rgb(52,149,104)',fillColor:'rgb(52,149,104)' });
            }


          }





        })
      },
      style: feature => ({
        radius: 8,
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      })
    };

    geoJSON(luminaires, options).addTo(this.map);
  }




}
