import AesirxInvesterContactApiService from '../InvesterContact/InvesterContact';
import { requestANewAccessToken } from '../gateway/Instance';
import InvesterContactMockData from './__mock__/InvesterContact.mock';

describe('Unit Testing - AesirX - Invester Contact Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Create Invester Contact', async () => {
    const investerContactService = new AesirxInvesterContactApiService();

    const data = InvesterContactMockData.mockInvesterContactItemToCreate();
    console.log('Test - Create persona');

    const result = await investerContactService.createInvesterContact(data);

    expect(result).toBeTruthy();
  });
});
