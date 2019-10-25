export const mapProps = {
  serverUrl: 'http://support.supermap.com.cn:8092/',
  mapId: '',
  mapOptions: {
    container: 'map', // container id
    style: {
      version: 8,
      sources: {
        'raster-tiles': {
          type: 'raster',
          tiles: [
            'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
          ],
          tileSize: 256
        }
      },
      layers: [
        {
          id: 'simple-tiles',
          type: 'raster',
          source: 'raster-tiles',
          minzoom: 0,
          maxzoom: 22
        }
      ]
    },
    center: [120.143, 30.236], // starting position
    zoom: 3, // starting zoom
    crs: 'EPSG:3857'
  }
};

export const mapOptionsW = {
  center: [120.64318, 45.74141],
  zoom: 5,
  crs: 'EPSG:3857',
  style: {
    version: 8,
    sources: {
      baseLayer: {
        type: 'raster',
        tiles: [
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft0.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft1.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft2.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft3.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft4.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft5.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft6.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft7.tianditu.com%2Fvec_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}'
        ],
        tileSize: 256
      },
      labelLayer: {
        type: 'raster',
        tiles: [
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft0.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft1.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft2.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft3.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft4.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft5.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft6.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft7.tianditu.com%2Fcva_w%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dw%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}'
        ],
        tileSize: 256
      }
    },

    layers: [
      {
        id: 'baseLayer',
        type: 'raster',
        source: 'baseLayer',
        minzoom: 0,
        maxzoom: 18
      },
      {
        id: 'labelLayer',
        type: 'raster',
        source: 'labelLayer',
        minzoom: 0,
        maxzoom: 18
      }
    ]
  },
  renderWorldCopies: false
};

export const mapOptionsC = {
  center: [126.64318, 45.74141],
  zoom: 8,
  crs: 'EPSG:4326',
  style: {
    version: 8,
    sources: {
      baseLayer: {
        type: 'raster',
        tiles: [
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft0.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft1.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft2.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft3.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft4.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft5.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft6.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft7.tianditu.com%2Fvec_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dvec%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}'
        ],
        tileSize: 256
      },
      labelLayer: {
        type: 'raster',
        tiles: [
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft0.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft1.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft2.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft3.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft4.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft5.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft6.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}',
          'http://support.supermap.com.cn:8092/apps/viewer/getUrlResource.png?url=http%3A%2F%2Ft7.tianditu.com%2Fcva_c%2Fwmts%3Ftk%3D979370626f38396281484293eb175e2e%26service%3DWMTS%26request%3DGetTile%26version%3D1.0.0%26style%3Ddefault%26tilematrixSet%3Dc%26format%3Dtiles%26width%3D256%26height%3D256%26layer%3Dcva%26tilematrix%3D{z}%26tilerow%3D{y}%26tilecol%3D{x}'
        ],
        tileSize: 256
      }
    },

    layers: [
      {
        id: 'baseLayer',
        type: 'raster',
        source: 'baseLayer',
        minzoom: 0,
        maxzoom: 18
      },
      {
        id: 'labelLayer',
        type: 'raster',
        source: 'labelLayer',
        minzoom: 0,
        maxzoom: 18
      }
    ]
  },
  renderWorldCopies: false
};

export const rasteLayerOptions = {
  opacity: 0.8,
  visible: true,
  tiles: [
    'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
  ],
  mapUrl: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China'
};
