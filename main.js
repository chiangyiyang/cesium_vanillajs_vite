window.CESIUM_BASE_URL = '/cesium';

import * as Cesium from 'cesium';

import './style.css';

const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});    
