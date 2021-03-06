/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY,
  ESI_ORGANISATION_CHANNEL_FIELD_KEY,
} from '../../Constant/OrganisationChannelConstant';
import faker from 'faker';
class OrganisationChannelMockData {
  static mockOrganisationChannelItem() {
    const mockData = {
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.ID]: 21,
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL]: [20],
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.PROJECT]: [10],
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE]: '',
    };
    return mockData;
  }

  static mockOrganisationChannelTitle = () => faker.lorem.word(10);

  static mockOrganisationChannelList() {}

  static mockOrganisationChannelItemToCreate() {
    return {
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.TITLE]: faker.lorem.words(5),
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.CHANNEL]: [20],
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.PROJECT]: [10],
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.HANDLE]: faker.lorem.sentence(50),
    };
  }
  static mockOrganisationChannelItemToUpdate() {
    return {
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.TITLE]: faker.lorem.words(5),
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.CHANNEL]: [20],
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.PROJECT]: [10],
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.HANDLE]: faker.lorem.sentence(50),
    };
  }

  static mockOrganisationChannelItemToDelete() {}

  static mockOrganisationId() {
    return 1;
  }
}

export default OrganisationChannelMockData;
