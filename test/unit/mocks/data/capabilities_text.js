const wmtsCapabilitiesText = `<?xml version="1.0" encoding="UTF-8"?><Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100/wmts,1.0,wmtsGetCapabilities_response.xsd">
<ows:ServiceIdentification><ows:Title>示例 WMTS 服务</ows:Title><ows:Abstract>SuperMap iServer 基于示范数据发布的 WMTS 服务</ows:Abstract><ows:Keywords><ows:Keyword>iServer</ows:Keyword><ows:Keyword>Sample Data</ows:Keyword></ows:Keywords><ows:ServiceType>OGC WMTS</ows:ServiceType><ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion><ows:Fees>none</ows:Fees><ows:AccessConstraints>none</ows:AccessConstraints></ows:ServiceIdentification><ows:ServiceProvider><ows:ProviderName>北京超图软件股份有限公司</ows:ProviderName><ows:ProviderSite xlink:href="http://www.supermap.com.cn"/><ows:ServiceContact><ows:IndividualName>联系人姓名</ows:IndividualName><ows:PositionName>联系人职位</ows:PositionName><ows:ContactInfo><ows:Phone><ows:Voice>+86-10-59896655</ows:Voice><ows:Facsimile>+86-10-59896666</ows:Facsimile></ows:Phone><ows:Address><ows:DeliveryPoint>北京市朝阳区酒仙桥北路甲10号院电子城IT产业园107号楼6层北京超图软件股份有限公司</ows:DeliveryPoint><ows:City>北京</ows:City><ows:AdministrativeArea>北京</ows:AdministrativeArea><ows:PostalCode>100015</ows:PostalCode><ows:Country>中国</ows:Country><ows:ElectronicMailAddress>support@supermap.com</ows:ElectronicMailAddress></ows:Address></ows:ContactInfo></ows:ServiceContact></ows:ServiceProvider><ows:OperationsMetadata>
  <ows:Operation name="GetCapabilities">
    <ows:DCP>
      <ows:HTTP>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>RESTFUL</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>KVP</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
      </ows:HTTP>
    </ows:DCP>
    <ows:Parameter name="AcceptFormats">
      <ows:AllowedValues>
        <ows:Value>application/xml</ows:Value>
      </ows:AllowedValues>
    </ows:Parameter>
  </ows:Operation>
  <ows:Operation name="GetTile">
    <ows:DCP>
      <ows:HTTP>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>RESTFUL</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>KVP</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
      </ows:HTTP>
    </ows:DCP>
  </ows:Operation>
  <ows:Operation name="GetFeatureInfo">
    <ows:DCP>
      <ows:HTTP>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>RESTFUL</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>KVP</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
      </ows:HTTP>
    </ows:DCP>
  </ows:Operation>
</ows:OperationsMetadata>
<Contents>
  <Layer>
    <ows:Title>京津地区地图</ows:Title>
    <ows:Identifier>京津地区地图</ows:Identifier>
    <ows:WGS84BoundingBox crs="urn:ogc:def:crs:OGC:2:84">
      <ows:LowerCorner>114.58902605452259 37.76434929128856</ows:LowerCorner>
      <ows:UpperCorner>119.51371730073062 42.31307532235788</ows:UpperCorner>
    </ows:WGS84BoundingBox>
    <ows:BoundingBox crs="urn:ogc:def:crs:EPSG::3857">
      <ows:LowerCorner>1.2755992030886613E7 4546189.548536971</ows:LowerCorner>
      <ows:UpperCorner>1.3304206152728582E7 5207992.590260374</ows:UpperCorner>
    </ows:BoundingBox>
    <Style isDefault="true">
    <ows:Identifier>default</ows:Identifier>
    </Style>
    <Format>image/png</Format>
    <InfoFormat>application/xml</InfoFormat>
    <TileMatrixSetLink>
    <TileMatrixSet>Custom_京津地区地图</TileMatrixSet>
    </TileMatrixSetLink>
    <TileMatrixSetLink>
    <TileMatrixSet>GlobalCRS84Scale_京津地区地图</TileMatrixSet>
      <TileMatrixSetLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:0</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>0</MaxTileRow>
    <MinTileCol>0</MinTileCol>
    <MaxTileCol>0</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:1</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>0</MaxTileRow>
    <MinTileCol>1</MinTileCol>
    <MaxTileCol>1</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:2</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>0</MaxTileRow>
    <MinTileCol>4</MinTileCol>
    <MaxTileCol>4</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:3</TileMatrix>
    <MinTileRow>1</MinTileRow>
    <MaxTileRow>1</MaxTileRow>
    <MinTileCol>9</MinTileCol>
    <MaxTileCol>9</MaxTileCol>
    </TileMatrixLimits>
      </TileMatrixSetLimits>
    </TileMatrixSetLink>
    <ResourceURL format="image/png" resourceType="tile" template="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100/%E4%BA%AC%E6%B4%A5%E5%9C%B0%E5%8C%BA%E5%9C%B0%E5%9B%BE/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png"/>
    <ResourceURL format="application/xml" resourceType="FeatureInfo" template="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100/%E4%BA%AC%E6%B4%A5%E5%9C%B0%E5%8C%BA%E5%9C%B0%E5%9B%BE/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}/{J}/{I}.xml"/>
  </Layer>
  <TileMatrixSet>
  <ows:Identifier>Custom_京津地区地图</ows:Identifier>
  <ows:SupportedCRS>urn:ogc:def:crs:EPSG::4326</ows:SupportedCRS>
  <WellKnownScaleSet>Custom</WellKnownScaleSet>
<!--The dpi of current tile matrix set is 90.7142857142857,the following scales has calculated based on it.-->    <TileMatrix>
  <ows:Identifier>0</ows:Identifier>
  <ScaleDenominator>7648076.476589981</ScaleDenominator>
<!--<Resolution>0.019237075180500118</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1</MatrixWidth>
  <MatrixHeight>1</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>1</ows:Identifier>
  <ScaleDenominator>3824038.2382949903</ScaleDenominator>
<!--<Resolution>0.009618537590250059</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2</MatrixWidth>
  <MatrixHeight>2</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>2</ows:Identifier>
  <ScaleDenominator>1912019.1191474951</ScaleDenominator>
<!--<Resolution>0.004809268795125029</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>4</MatrixWidth>
  <MatrixHeight>4</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>3</ows:Identifier>
  <ScaleDenominator>956009.5595737476</ScaleDenominator>
<!--<Resolution>0.0024046343975625147</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>8</MatrixWidth>
  <MatrixHeight>8</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>4</ows:Identifier>
  <ScaleDenominator>478004.7797868738</ScaleDenominator>
<!--<Resolution>0.0012023171987812574</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>16</MatrixWidth>
  <MatrixHeight>15</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>5</ows:Identifier>
  <ScaleDenominator>239002.3898934369</ScaleDenominator>
<!--<Resolution>6.011585993906287E-4</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>32</MatrixWidth>
  <MatrixHeight>30</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>6</ows:Identifier>
  <ScaleDenominator>119501.19494671845</ScaleDenominator>
<!--<Resolution>3.0057929969531434E-4</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>64</MatrixWidth>
  <MatrixHeight>60</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>7</ows:Identifier>
  <ScaleDenominator>59750.59747335922</ScaleDenominator>
<!--<Resolution>1.5028964984765717E-4</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>128</MatrixWidth>
  <MatrixHeight>119</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>8</ows:Identifier>
  <ScaleDenominator>29875.29873667961</ScaleDenominator>
<!--<Resolution>7.514482492382858E-5</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>256</MatrixWidth>
  <MatrixHeight>237</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>9</ows:Identifier>
  <ScaleDenominator>14937.649368339806</ScaleDenominator>
<!--<Resolution>3.757241246191429E-5</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>512</MatrixWidth>
  <MatrixHeight>473</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>10</ows:Identifier>
  <ScaleDenominator>7468.824684169903</ScaleDenominator>
<!--<Resolution>1.8786206230957146E-5</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1024</MatrixWidth>
  <MatrixHeight>946</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>11</ows:Identifier>
  <ScaleDenominator>3734.4123420849514</ScaleDenominator>
<!--<Resolution>9.393103115478573E-6</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2048</MatrixWidth>
  <MatrixHeight>1892</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>12</ows:Identifier>
  <ScaleDenominator>1867.2061710424757</ScaleDenominator>
<!--<Resolution>4.6965515577392865E-6</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>4096</MatrixWidth>
  <MatrixHeight>3784</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>13</ows:Identifier>
  <ScaleDenominator>933.6030855212379</ScaleDenominator>
<!--<Resolution>2.3482757788696433E-6</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>8192</MatrixWidth>
  <MatrixHeight>7567</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>14</ows:Identifier>
  <ScaleDenominator>466.80154276061893</ScaleDenominator>
<!--<Resolution>1.1741378894348216E-6</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>16384</MatrixWidth>
  <MatrixHeight>15134</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>15</ows:Identifier>
  <ScaleDenominator>233.40077138030946</ScaleDenominator>
<!--<Resolution>5.870689447174108E-7</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>32768</MatrixWidth>
  <MatrixHeight>30267</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>16</ows:Identifier>
  <ScaleDenominator>116.70038569015473</ScaleDenominator>
<!--<Resolution>2.935344723587054E-7</Resolution>-->  <TopLeftCorner>42.31307532235788 114.58902605452259</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>65536</MatrixWidth>
  <MatrixHeight>60533</MatrixHeight>
    </TileMatrix>
  </TileMatrixSet>
  <TileMatrixSet>
  <ows:Identifier>GlobalCRS84Scale_京津地区地图</ows:Identifier>
  <ows:SupportedCRS>urn:ogc:def:crs:EPSG::4326</ows:SupportedCRS>
  <WellKnownScaleSet>GlobalCRS84Scale</WellKnownScaleSet>
<!--The dpi of current tile matrix set assumes 0.28mm as the physical distance of a pixel,which defined by OGC specification.-->    <TileMatrix>
  <ows:Identifier>0</ows:Identifier>
  <ScaleDenominator>5.0E8</ScaleDenominator>
<!--<Resolution>1.25764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2</MatrixWidth>
  <MatrixHeight>1</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>1</ows:Identifier>
  <ScaleDenominator>2.5E8</ScaleDenominator>
<!--<Resolution>0.628820698883665</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>3</MatrixWidth>
  <MatrixHeight>2</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>2</ows:Identifier>
  <ScaleDenominator>1.0E8</ScaleDenominator>
<!--<Resolution>0.251528279553466</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>6</MatrixWidth>
  <MatrixHeight>3</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>3</ows:Identifier>
  <ScaleDenominator>5.0E7</ScaleDenominator>
<!--<Resolution>0.125764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>12</MatrixWidth>
  <MatrixHeight>6</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>4</ows:Identifier>
  <ScaleDenominator>2.5E7</ScaleDenominator>
<!--<Resolution>0.0628820698883665</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>23</MatrixWidth>
  <MatrixHeight>12</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>5</ows:Identifier>
  <ScaleDenominator>1.0E7</ScaleDenominator>
<!--<Resolution>0.0251528279553466</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>56</MatrixWidth>
  <MatrixHeight>28</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>6</ows:Identifier>
  <ScaleDenominator>5000000.0</ScaleDenominator>
<!--<Resolution>0.0125764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>112</MatrixWidth>
  <MatrixHeight>56</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>7</ows:Identifier>
  <ScaleDenominator>2500000.0</ScaleDenominator>
<!--<Resolution>0.00628820698883665</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>224</MatrixWidth>
  <MatrixHeight>112</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>8</ows:Identifier>
  <ScaleDenominator>1000000.0</ScaleDenominator>
<!--<Resolution>0.00251528279553466</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>560</MatrixWidth>
  <MatrixHeight>280</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>9</ows:Identifier>
  <ScaleDenominator>500000.0</ScaleDenominator>
<!--<Resolution>0.00125764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1119</MatrixWidth>
  <MatrixHeight>560</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>10</ows:Identifier>
  <ScaleDenominator>250000.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-4</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2237</MatrixWidth>
  <MatrixHeight>1119</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>11</ows:Identifier>
  <ScaleDenominator>100000.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-4</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>5591</MatrixWidth>
  <MatrixHeight>2796</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>12</ows:Identifier>
  <ScaleDenominator>50000.0</ScaleDenominator>
<!--<Resolution>1.25764139776733E-4</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>11182</MatrixWidth>
  <MatrixHeight>5591</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>13</ows:Identifier>
  <ScaleDenominator>25000.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-5</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>22364</MatrixWidth>
  <MatrixHeight>11182</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>14</ows:Identifier>
  <ScaleDenominator>10000.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-5</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>55909</MatrixWidth>
  <MatrixHeight>27955</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>15</ows:Identifier>
  <ScaleDenominator>5000.0</ScaleDenominator>
<!--<Resolution>1.25764139776733E-5</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>111817</MatrixWidth>
  <MatrixHeight>55909</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>16</ows:Identifier>
  <ScaleDenominator>2500.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-6</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>223633</MatrixWidth>
  <MatrixHeight>111817</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>17</ows:Identifier>
  <ScaleDenominator>1000.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-6</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>559083</MatrixWidth>
  <MatrixHeight>279542</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>18</ows:Identifier>
  <ScaleDenominator>500.0</ScaleDenominator>
<!--<Resolution>1.25764139776733E-6</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1118165</MatrixWidth>
  <MatrixHeight>559083</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>19</ows:Identifier>
  <ScaleDenominator>250.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-7</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2236330</MatrixWidth>
  <MatrixHeight>1118165</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>20</ows:Identifier>
  <ScaleDenominator>100.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-7</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>5590823</MatrixWidth>
  <MatrixHeight>2795412</MatrixHeight>
    </TileMatrix>
  </TileMatrixSet>
</Contents>
<ServiceMetadataURL xlink:href="http://192.168.11.94:8090/iserver/services/map-jingjin/wmts100/1.0.0/WMTSCapabilities.xml"/>
</Capabilities>`;

const wmsCapabilitiesText =
  '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE WMS_Capabilities SYSTEM "http://192.168.11.94:8090/iserver/services/map-world/wms111?request=getdtd&file=wms,1.1.1,capabilities_1_1_1.dtd"><WMS_Capabilities version="1.1.1"><Service><Name>OGC:WMS</Name><Title>map-world_wms111</Title><Abstract>北京超图软件股份有限公司提供的 WMS 服务. 联系方式: support@supermap.com</Abstract><KeywordList><Keyword>iServer</Keyword></KeywordList><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /><ContactInformation><ContactPersonPrimary><ContactPerson>联系人姓名</ContactPerson><ContactOrganization>北京超图软件股份有限公司</ContactOrganization></ContactPersonPrimary><ContactPosition /><ContactAddress><AddressType>postal</AddressType><Address>北京市朝阳区酒仙桥北路甲10号院电子城IT产业园107号楼6层</Address><City>北京</City><StateOrProvince>北京</StateOrProvince><PostCode>100015</PostCode><Country>中国</Country></ContactAddress><ContactVoiceTelephone>+86-10-59896655</ContactVoiceTelephone><ContactFacsimileTelephone>+86-10-59896666</ContactFacsimileTelephone><ContactElectronicMailAddress>support@supermap.com</ContactElectronicMailAddress></ContactInformation><Fees>none</Fees><AccessConstraints>none</AccessConstraints></Service><Capability><Request><GetCapabilities><Format>application/vnd.ogc.wms_xml</Format><Format>text/xml</Format><Format>text/html</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Get><Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Post></HTTP></DCPType></GetCapabilities><GetMap><Format>image/png</Format><Format>image/bmp</Format><Format>image/jpeg</Format><Format>image/gif</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Get></HTTP></DCPType></GetMap><GetFeatureInfo><Format>application/vnd.ogc.wms_xml</Format><Format>text/xml</Format><Format>text/html</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://192.168.11.94:8090/iserver/services/map-world/wms111?" xlink:type="simple" /></Get></HTTP></DCPType></GetFeatureInfo></Request><Exception><Format>application/vnd.ogc.se_xml</Format><Format>XML</Format></Exception><UserDefinedSymbolization SupportSLD="1" UserLayer="0" UserStyle="1" RemoteWFS="0" /><Layer queryable="0"><Title /><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.003750834279726E7" maxy="2.0037508342789244E7" /><Layer queryable="1"><Name>0</Name><Title>世界地图_Day</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.00000000003598" maxx="180.00000000007202" maxy="90.00000000000001" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.003750834279726E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>1</Name><Title>World</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>2</Name><Title>世界地图_Gray</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>3</Name><Title>世界地图</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>4</Name><Title>World Map</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>5</Name><Title>世界地图_Night</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="90.0" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /></Layer><Layer queryable="1"><Name>6</Name><Title>World_Common</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /><BoundingBox SRS="EPSG:4326" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /><BoundingBox SRS="EPSG:3857" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /><BoundingBox SRS="EPSG:0" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8625154.223060824" /></Layer><Layer queryable="1"><Name>7</Name><Title>World_Robinson</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /><BoundingBox SRS="EPSG:4326" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /><BoundingBox SRS="EPSG:3857" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /><BoundingBox SRS="EPSG:0" minx="-1.700583333052523E7" miny="-8625154.223060824" maxx="1.700583333052523E7" maxy="8691252.148623722" /></Layer><Layer queryable="1"><Name>8</Name><Title>World_VanderGrintenI</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /><BoundingBox SRS="EPSG:4326" minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /><BoundingBox SRS="EPSG:0" minx="-2.0037508342789244E7" miny="-2.003750834278924E7" maxx="2.0037508342789244E7" maxy="2.003750834278924E7" /></Layer><Layer queryable="1"><Name>9</Name><Title>World_AirLine_Part</Title><SRS>EPSG:4326</SRS><SRS>EPSG:3857</SRS><SRS>EPSG:0</SRS><LatLonBoundingBox minx="-180.0" miny="-90.0" maxx="180.0" maxy="85.88623405603997" /><BoundingBox SRS="EPSG:4326" minx="-180.0" miny="-90.0" maxx="180.0" maxy="85.88623405603997" /><BoundingBox SRS="EPSG:3857" minx="-2.0037508342789244E7" miny="-2.0037508342789236E7" maxx="2.0037508342789244E7" maxy="2.0037508342789244E7" /><BoundingBox SRS="EPSG:0" minx="-180.0" miny="-90.0" maxx="180.0" maxy="85.88623405603997" /></Layer></Layer></Capability></WMS_Capabilities>';

module.exports = { wmtsCapabilitiesText, wmsCapabilitiesText };
