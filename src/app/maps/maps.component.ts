import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  map!: Map;
  zoon:any;

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  zoomOut() {
    const view = this.map.getView();
    const zoom = view.getZoom();
    if (view && zoom !== undefined && zoom > 0)
    {
      view.setZoom(zoom - 1);
    }
  }

  zoomIn() {
    const view = this.map.getView();
    const zoom = view.getZoom();
    if (view && zoom !== undefined){
      view.setZoom(zoom + 1);
    }
    
  }

}
