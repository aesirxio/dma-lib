/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import OrganisationChannelMockData from './__mock__/OrganisationChannel.mock';
import { requestANewAccessToken } from '../gateway/Instance';
import { strict as assert } from 'assert';

describe('Unit Testing - AesirX - Project Channel LinkedInService', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  const channelType = 'linkedin';
  const organisationId = OrganisationChannelMockData.mockOrganisationId();

  it('Unit Test API - Get login URL', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getLoginUrl(organisationId, channelType);

    assert.equal(
      true,
      response.result.loginUrl.includes('https://www.linkedin.com/oauth/v2/authorization')
    );
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Check connected channel', async () => {
    const service = new AesirxOrganisationChannelApiService();

    const response = await service.getCheckConnectStatusChannel(organisationId, channelType);

    assert.equal('1', response.result.connected);
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Post content', async () => {
    const service = new AesirxOrganisationChannelApiService();

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const fakePostContent = 'Posted by ReactLib at ' + timestamp;
    const response = await service.postToFanpage(organisationId, fakePostContent, channelType);

    assert.equal(true, response.result);
    expect(response.result).toBeTruthy();
  });
});
