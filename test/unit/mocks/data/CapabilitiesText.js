const wmtsCapabilitiesText =
  '<?xml version="1.0" encoding="UTF-8"?><Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://192.168.11.94:8090/iserver/services/map-china400/wmts-china/wmts,1.0,wmtsGetCapabilities_response.xsd"><ows:ServiceIdentification><ows:Title>示例 WMTS 服务</ows:Title><ows:Abstract>SuperMap iServer 基于示范数据发布的 WMTS 服务</ows:Abstract><ows:Keywords><ows:Keyword>iServer</ows:Keyword><ows:Keyword>Sample Data</ows:Keyword></ows:Keywords><ows:ServiceType>OGC WMTS</ows:ServiceType><ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion><ows:Fees>none</ows:Fees><ows:AccessConstraints>none</ows:AccessConstraints></ows:ServiceIdentification><ows:ServiceProvider><ows:ProviderName>北京超图软件股份有限公司</ows:ProviderName><ows:ProviderSite xlink:href="http://www.supermap.com.cn"/><ows:ServiceContact><ows:IndividualName>联系人姓名</ows:IndividualName><ows:PositionName>联系人职位</ows:PositionName><ows:ContactInfo><ows:Phone><ows:Voice>+86-10-59896655</ows:Voice><ows:Facsimile>+86-10-59896666</ows:Facsimile></ows:Phone><ows:Address><ows:DeliveryPoint>北京市朝阳区酒仙桥北路甲10号院电子城IT产业园107号楼6层北京超图软件股份有限公司</ows:DeliveryPoint><ows:City>北京</ows:City><ows:AdministrativeArea>北京</ows:AdministrativeArea><ows:PostalCode>100015</ows:PostalCode><ows:Country>中国</ows:Country><ows:ElectronicMailAddress>support@supermap.com</ows:ElectronicMailAddress></ows:Address></ows:ContactInfo></ows:ServiceContact></ows:ServiceProvider><ows:OperationsMetadata><ows:Operation name="GetTile"><ows:DCP><ows:HTTP><ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-china400/wmts-china?"><ows:Constraint name="GetEncoding"><ows:AllowedValues><ows:Value>RESTFUL</ows:Value></ows:AllowedValues></ows:Constraint></ows:Get><ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-china400/wmts-china?"><ows:Constraint name="GetEncoding"><ows:AllowedValues><ows:Value>KVP</ows:Value></ows:AllowedValues></ows:Constraint></ows:Get></ows:HTTP></ows:DCP><ows:Parameter name="AcceptFormats"><ows:AllowedValues><ows:Value>application/xml</ows:Value></ows:AllowedValues></ows:Parameter></ows:Operation></ows:OperationsMetadata><Contents><Layer><ows:Title>ChinaDark</ows:Title><ows:Identifier>ChinaDark</ows:Identifier><ows:WGS84BoundingBox crs="urn:ogc:def:crs:OGC:2:84"><ows:LowerCorner>-180.00000000000006 -85.05112877980652</ows:LowerCorner><ows:UpperCorner>180.00000000000003 85.05112877980648</ows:UpperCorner></ows:WGS84BoundingBox><Style isDefault="true"><ows:Identifier>default</ows:Identifier></Style><Format>image/png</Format><InfoFormat>application/xml</InfoFormat><TileMatrixSetLink><TileMatrixSet>ChinaPublicServices_ChinaDark</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>ChinaPublicServices:19</TileMatrix><MinTileRow>14414</MinTileRow><MaxTileRow>509873</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1048575</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink><ResourceURL format="image/png" resourceType="tile" template="http://192.168.11.94:8090/iserver/services/map-china400/wmts-china/ChinaDark/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png"/><ResourceURL format="application/xml" resourceType="FeatureInfo" template="http://192.168.11.94:8090/iserver/services/map-china400/wmts-china/ChinaDark/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}/{J}/{I}.xml"/></Layer> <Layer><ows:Title>ChinaDark</ows:Title><ows:Identifier>ChinaDark</ows:Identifier><ows:WGS84BoundingBox crs="urn:ogc:def:crs:OGC:2:84"><ows:LowerCorner>-180.00000000000006 -85.05112877980652</ows:LowerCorner><ows:UpperCorner>180.00000000000003 85.05112877980648</ows:UpperCorner></ows:WGS84BoundingBox><Style isDefault="true"><ows:Identifier>default</ows:Identifier></Style><Format>image/png</Format><InfoFormat>application/xml</InfoFormat><TileMatrixSetLink><TileMatrixSet>ChinaPublicServices_ChinaDark</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>ChinaPublicServices:19</TileMatrix><MinTileRow>14414</MinTileRow><MaxTileRow>509873</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1048575</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink><ResourceURL format="image/png" resourceType="tile" template="http://192.168.11.94:8090/iserver/services/map-china400/wmts-china/ChinaDark/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png"/><ResourceURL format="application/xml" resourceType="FeatureInfo" template="http://192.168.11.94:8090/iserver/services/map-china400/wmts-china/ChinaDark/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}/{J}/{I}.xml"/></Layer><TileMatrixSet><ows:Identifier>ChinaPublicServices_China</ows:Identifier><ows:SupportedCRS>urn:ogc:def:crs:EPSG::4326</ows:SupportedCRS><WellKnownScaleSet>ChinaPublicServices</WellKnownScaleSet><TileMatrix><ows:Identifier>19</ows:Identifier><ScaleDenominator>564.2497166633606</ScaleDenominator><!-- <Resolution>1.341104507446289E-6</Resolution> --><TopLeftCorner>90.0 -180.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>1048576</MatrixWidth><MatrixHeight>524288</MatrixHeight></TileMatrix></TileMatrixSet></Contents><ServiceMetadataURL xlink:href="http://192.168.11.94:8090/iserver/services/map-china400/wmts-china/1.0.0/WMTSCapabilities.xml"/></Capabilities>';

const wmsCapabilitiesTextWith130 =
  '<?xml version="1.0" encoding="UTF-8"?><WMS_Capabilities version="1.3.0" xmlns="http://www.opengis.net/wms" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wms http://support.supermap.com.cn:8090/iserver/services/map-world/wms130/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day?request=getdtd&amp;file=wms,1.3.0,capabilities_1_3_0.xsd"><Service><Name>WMS</Name><Title>世界地图_Day_wms130</Title><Abstract>北京超图软件股份有限公司提供的 WMS 服务. 联系方式: support@supermap.com</Abstract><KeywordList><Keyword>iServer</Keyword></KeywordList><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://support.supermap.com.cn:8090/iserver/services/map-world/wms130/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day?MAP=%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day&amp;" xlink:type="simple" /><ContactInformation><ContactPersonPrimary><ContactPerson>联系人姓名</ContactPerson><ContactOrganization>北京超图软件股份有限公司</ContactOrganization></ContactPersonPrimary><ContactPosition /><ContactAddress><AddressType>postal</AddressType><Address>北京市朝阳区酒仙桥北路甲10号院电子城IT产业园107号楼6层</Address><City>北京</City><StateOrProvince>北京</StateOrProvince><PostCode>100015</PostCode><Country>中国</Country></ContactAddress><ContactVoiceTelephone>+86-10-59896655</ContactVoiceTelephone><ContactFacsimileTelephone>+86-10-59896666</ContactFacsimileTelephone><ContactElectronicMailAddress>support@supermap.com</ContactElectronicMailAddress></ContactInformation><Fees>none</Fees><AccessConstraints>none</AccessConstraints></Service><Capability><Request><GetCapabilities><Format>application/vnd.ogc.wms_xml</Format><Format>text/xml</Format><Format>text/html</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://support.supermap.com.cn:8090/iserver/services/map-world/wms130/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day?MAP=%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day&amp;" xlink:type="simple" /></Get><Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://support.supermap.com.cn:8090/iserver/services/map-world/wms130/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day?MAP=%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day&amp;" xlink:type="simple" /></Post></HTTP></DCPType></GetCapabilities><GetMap><Format>image/png</Format><Format>image/bmp</Format><Format>image/jpeg</Format><Format>image/gif</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://support.supermap.com.cn:8090/iserver/services/map-world/wms130/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day?MAP=%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day&amp;" xlink:type="simple" /></Get></HTTP></DCPType></GetMap><GetFeatureInfo><Format>application/vnd.ogc.wms_xml</Format><Format>text/xml</Format><Format>text/html</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://support.supermap.com.cn:8090/iserver/services/map-world/wms130/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day?MAP=%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day&amp;" xlink:type="simple" /></Get></HTTP></DCPType></GetFeatureInfo></Request><Exception><Format>application/vnd.ogc.se_xml</Format><Format>XML</Format></Exception><Layer queryable="0"><Title>世界地图_Day</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>90.0</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="90.0" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.003750834279726E7" maxy="2.0037508342789244E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><Layer><Name>0</Name><Title>世界地图_Day</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>90.0</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="90.0" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.003750834279726E7" maxy="2.0037508342789244E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><Layer queryable="1"><Name>0.0</Name><Title>continent_T@World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-150.51082428252954</westBoundLongitude><eastBoundLongitude>154.27853258850513</eastBoundLongitude><southBoundLatitude>-84.34257921576281</southBoundLatitude><northBoundLatitude>65.22103117946571</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-84.34257921576281" miny="-150.51082428252954" maxx="65.22103117946571" maxy="154.27853258850513" /><BoundingBox CRS="EPSG:3857" minx="-1.6754788318007063E7" miny="-1.9182840901210833E7" maxx="1.7174207688085854E7" maxy="9666834.394533642" /><BoundingBox CRS="CRS:84" minx="-150.51082428252954" miny="-84.34257921576281" maxx="154.27853258850513" maxy="65.22103117946571" /></Layer><Layer queryable="1"><Name>0.1</Name><Title>OceanLabel@World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-43.933541720776994</westBoundLongitude><eastBoundLongitude>162.36857106201822</eastBoundLongitude><southBoundLatitude>-18.918670817396443</southBoundLatitude><northBoundLatitude>83.43048504744075</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-18.918670817396443" miny="-43.933541720776994" maxx="83.43048504744075" maxy="162.36857106201822" /><BoundingBox CRS="EPSG:3857" minx="-4890659.493101935" miny="-2145363.0577281676" maxx="1.8074786651455324E7" maxy="1.8227680582016524E7" /><BoundingBox CRS="CRS:84" minx="-43.933541720776994" miny="-18.918670817396443" maxx="162.36857106201822" maxy="83.43048504744075" /></Layer><Layer queryable="1"><Name>0.2</Name><Title>World#2</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>83.62359619140626</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="83.62359619140626" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="1.8418382328923147E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="83.62359619140626" /></Layer><Layer queryable="1"><Name>0.3</Name><Title>World#1</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>83.62359619140626</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="83.62359619140626" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="1.8418382328923147E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="83.62359619140626" /></Layer><Layer queryable="1"><Name>0.4</Name><Title>Capital</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-175.24565064968198</westBoundLongitude><eastBoundLongitude>179.22188736363634</eastBoundLongitude><southBoundLatitude>-41.33484005165742</southBoundLatitude><northBoundLatitude>64.13499891788544</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-41.33484005165742" miny="-175.24565064968198" maxx="64.13499891788544" maxy="179.22188736363634" /><BoundingBox CRS="EPSG:3857" minx="-1.950825659405851E7" miny="-5061856.656164677" maxx="1.9950889240329426E7" maxy="9384128.756427718" /><BoundingBox CRS="CRS:84" minx="-175.24565064968198" miny="-41.33484005165742" maxx="179.22188736363634" maxy="64.13499891788544" /></Layer><Layer queryable="1"><Name>0.5</Name><Title>Capital</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-175.24565064968198</westBoundLongitude><eastBoundLongitude>179.22188736363634</eastBoundLongitude><southBoundLatitude>-41.33484005165742</southBoundLatitude><northBoundLatitude>64.13499891788544</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-41.33484005165742" miny="-175.24565064968198" maxx="64.13499891788544" maxy="179.22188736363634" /><BoundingBox CRS="EPSG:3857" minx="-1.950825659405851E7" miny="-5061856.656164677" maxx="1.9950889240329426E7" maxy="9384128.756427718" /><BoundingBox CRS="CRS:84" minx="-175.24565064968198" miny="-41.33484005165742" maxx="179.22188736363634" maxy="64.13499891788544" /></Layer><Layer queryable="1"><Name>0.6</Name><Title>China_Boundary_nanhai@World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>108.20117</westBoundLongitude><eastBoundLongitude>122.79297</eastBoundLongitude><southBoundLatitude>3.408849999999999</southBoundLatitude><northBoundLatitude>24.571609999999986</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="3.408849999999999" miny="108.20117" maxx="24.571609999999986" maxy="122.79297" /><BoundingBox CRS="EPSG:3857" minx="1.2044899147636428E7" miny="379695.5157792855" maxx="1.3669250893393718E7" maxy="2823217.590863006" /><BoundingBox CRS="CRS:84" minx="108.20117" miny="3.408849999999999" maxx="122.79297" maxy="24.571609999999986" /></Layer><Layer queryable="1"><Name>0.7</Name><Title>China_Boundary_1@World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>73.80218519999998</westBoundLongitude><eastBoundLongitude>75.1874846</eastBoundLongitude><southBoundLatitude>37.2373277</southBoundLatitude><northBoundLatitude>38.6768074</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="37.2373277" miny="73.80218519999998" maxx="38.6768074" maxy="75.1874846" /><BoundingBox CRS="EPSG:3857" minx="8215621.6758948695" miny="4472239.038188149" maxx="8369832.499699099" maxy="4675482.173129839" /><BoundingBox CRS="CRS:84" minx="73.80218519999998" miny="37.2373277" maxx="75.1874846" maxy="38.6768074" /></Layer><Layer queryable="1"><Name>0.8</Name><Title>Country_Label</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-141.0029906</westBoundLongitude><eastBoundLongitude>141.007019</eastBoundLongitude><southBoundLatitude>-54.7883376</southBoundLatitude><northBoundLatitude>70.08860780000002</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-54.7883376" miny="-141.0029906" maxx="70.08860780000002" maxy="141.007019" /><BoundingBox CRS="EPSG:3857" minx="-1.569638111392074E7" miny="-7320894.649367543" maxx="1.5696829553357454E7" maxy="1.109761686389419E7" /><BoundingBox CRS="CRS:84" minx="-141.0029906" miny="-54.7883376" maxx="141.007019" maxy="70.08860780000002" /></Layer><Layer queryable="1"><Name>0.9</Name><Title>Grids</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>90.0</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="90.0" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /></Layer><Layer queryable="1"><Name>0.10</Name><Title>China_island_part@World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>109.44177</westBoundLongitude><eastBoundLongitude>124.59860999999998</eastBoundLongitude><southBoundLatitude>3.833919999999994</southBoundLatitude><northBoundLatitude>26.69475</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="3.833919999999994" miny="109.44177" maxx="26.69475" maxy="124.59860999999998" /><BoundingBox CRS="EPSG:3857" minx="1.2183002107914563E7" miny="427108.8750192945" maxx="1.387025381874968E7" maxy="3085386.2845751727" /><BoundingBox CRS="CRS:84" minx="109.44177" miny="3.833919999999994" maxx="124.59860999999998" maxy="26.69475" /></Layer><Layer queryable="1"><Name>0.11</Name><Title>World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>83.62359619140626</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="83.62359619140626" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="1.8418382328923147E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="83.62359619140626" /></Layer><Layer queryable="1"><Name>0.12</Name><Title>worldimage@World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>90.0</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="90.0" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.003750834279726E7" maxy="2.0037508342789244E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /></Layer><Layer queryable="1"><Name>0.13</Name><Title>Countries@World</Title><CRS>EPSG:4326</CRS><CRS>EPSG:3857</CRS><CRS>CRS:84</CRS><EX_GeographicBoundingBox><westBoundLongitude>-180.0</westBoundLongitude><eastBoundLongitude>180.0</eastBoundLongitude><southBoundLatitude>-90.0</southBoundLatitude><northBoundLatitude>83.62359619140626</northBoundLatitude></EX_GeographicBoundingBox><BoundingBox CRS="EPSG:4326" minx="-90.0" miny="-180.0" maxx="83.62359619140626" maxy="180.0" /><BoundingBox CRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="1.8418382328923147E7" /><BoundingBox CRS="CRS:84" minx="-180.0" miny="-90.0" maxx="180.0" maxy="83.62359619140626" /></Layer></Layer></Layer></Capability></WMS_Capabilities>';

const wmsCapabilitiesText =
  '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE WMS_Capabilities SYSTEM "http://192.168.11.94:8090/iserver/services/map-world/wms111?request=getdtd&file=wms,1.1.1,capabilities_1_1_1.dtd"><WMS_Capabilities version="1.1.1"><Service><Name>OGC:WMS</Name><Title>map-world_wms111</Title><Abstract>北京超图软件股份有限公司提供的 WMS 服务. 联系方式: support@supermap.com</Abstract><KeywordList><Keyword>iServer</Keyword></KeywordList><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /><ContactInformation><ContactPersonPrimary><ContactPerson>联系人姓名</ContactPerson><ContactOrganization>北京超图软件股份有限公司</ContactOrganization></ContactPersonPrimary><ContactPosition /><ContactAddress><AddressType>postal</AddressType><Address>北京市朝阳区酒仙桥北路甲10号院电子城IT产业园107号楼6层</Address><City>北京</City><StateOrProvince>北京</StateOrProvince><PostCode>100015</PostCode><Country>中国</Country></ContactAddress><ContactVoiceTelephone>+86-10-59896655</ContactVoiceTelephone><ContactFacsimileTelephone>+86-10-59896666</ContactFacsimileTelephone><ContactElectronicMailAddress>support@supermap.com</ContactElectronicMailAddress></ContactInformation><Fees>none</Fees><AccessConstraints>none</AccessConstraints></Service><Capability><Request><GetCapabilities><Format>application/vnd.ogc.wms_xml</Format><Format>text/xml</Format><Format>text/html</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Get><Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Post></HTTP></DCPType></GetCapabilities><GetMap><Format>image/png</Format><Format>image/bmp</Format><Format>image/jpeg</Format><Format>image/gif</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Get></HTTP></DCPType></GetMap><GetFeatureInfo><Format>application/vnd.ogc.wms_xml</Format><Format>text/xml</Format><Format>text/html</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Get></HTTP></DCPType></GetFeatureInfo></Request><Exception><Format>application/vnd.ogc.se_xml</Format><Format>XML</Format></Exception><UserDefinedSymbolization SupportSLD="1" UserLayer="0" UserStyle="1" RemoteWFS="0" /><Layer queryable="0"><Title /><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.003750834279726E7" maxy="2.0037508342789244E7" /><Layer queryable="1"><Name>0</Name><Title>世界地图_Day</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.003750834279726E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>1</Name><Title>World</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>2</Name><Title>世界地图_Gray</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>3</Name><Title>世界地图</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>4</Name><Title>World Map</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>5</Name><Title>世界地图_Night</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>6</Name><Title>World_Common</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /><BoundingBox SRS="EPSG:4326" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /><BoundingBox SRS="EPSG:3857" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /><BoundingBox SRS="EPSG:0" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /></Layer><Layer queryable="1"><Name>7</Name><Title>World_Robinson</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /><BoundingBox SRS="EPSG:4326" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /><BoundingBox SRS="EPSG:3857" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /><BoundingBox SRS="EPSG:0" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /></Layer><Layer queryable="1"><Name>8</Name><Title>World_VanderGrintenI</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /><BoundingBox SRS="EPSG:4326" minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /><BoundingBox SRS="EPSG:0" minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /></Layer><Layer queryable="1"><Name>9</Name><Title>World_AirLine_Part</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="85.88623405603997" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="85.88623405603997" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /><BoundingBox SRS="EPSG:0" minx="-180.0" miny="-90.0" maxx="180.0" maxy="85.88623405603997" /></Layer></Layer></Capability></WMS_Capabilities>';

module.exports = { wmtsCapabilitiesText, wmsCapabilitiesText, wmsCapabilitiesTextWith130 };