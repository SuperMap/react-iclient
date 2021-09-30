import EchartsDataService from '../EchartsDataService';
import { echartiPortalDataset, echartRestDataset, echartBarDatasetOptions, echartGaugeDatasetOptions } from '@test/unit/mocks/services';

describe('echarts data service test', () => {
  let echartDataService, echartOptions;

  beforeAll(() => {
    echartDataService = null;
    echartOptions = null;
  });

  it('fetch iPortal data and generate echart options', async () => {
    echartDataService = new EchartsDataService(echartiPortalDataset, echartBarDatasetOptions);
    expect(echartDataService).not.toBeNull();
    expect(echartDataService.dataset).not.toBeNull();
    echartOptions = await echartDataService.getDataOption(echartDataService.dataset);
    expect(echartOptions).not.toBeNull();
    expect(echartOptions.series).not.toBeNull();
    expect(echartOptions.series.length).toEqual(2);
    expect(echartOptions.xAxis.length).toEqual(1);
    expect(echartOptions.series[0]).not.toBeNull();
    expect(echartOptions.series[0].type).toEqual(echartBarDatasetOptions[0].seriesType);
  });

  it('fetch rest data and generate echart options', async () => {
    echartDataService = new EchartsDataService(echartRestDataset, echartGaugeDatasetOptions);
    expect(echartDataService).not.toBeNull();
    expect(echartDataService.dataset).not.toBeNull();
    echartOptions = await echartDataService.getDataOption(echartDataService.dataset);
    expect(echartOptions).not.toBeNull();
    expect(echartOptions.series).not.toBeNull();
    expect(echartOptions.series.length).toEqual(1);
    expect(echartOptions.series[0]).not.toBeNull();
    expect(echartOptions.series[0].type).toEqual(echartGaugeDatasetOptions[0].seriesType);
  });

  it('fetch failed', async () => {
    echartDataService = new EchartsDataService(echartRestDataset, echartGaugeDatasetOptions);
    expect(echartDataService).not.toBeNull();
    try {
      await echartDataService.getDataOption({ type: 'rest', url: 'http://error/address'});
    } catch (error) {
      expect(error).not.toBeNull();
      expect(error.error).toMatch('未匹配到');
    }
  });

  afterAll(() => {
    echartDataService = null;
    echartOptions = null;
  });
});
