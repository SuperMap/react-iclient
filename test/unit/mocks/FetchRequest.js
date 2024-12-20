function mockFetch(resource) {
  const FetchRequest = jest.spyOn(SuperMap.FetchRequest, 'get');
  FetchRequest.mockImplementation(url => {
    return new Promise((resolve, reject) => {
      if(url.indexOf('?REQUEST=GetCapabilities&SERVICE=WMS') > -1 ) {
        resolve(new Response(resource[url]));
      } else if(url.indexOf('http://support.supermap.com.cn:8090/iserver/services/map-china400/wmts100') > -1 ) {
        resolve(new Response(resource[url]));
      } else if(resource[url]){
        resolve(new Response(JSON.stringify(resource[url])));
      } else {
        reject('未匹配到' + url);
      }
    });
  });
}
export default mockFetch;
