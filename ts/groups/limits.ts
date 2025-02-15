// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { isNumber } from 'lodash';
import { parseIntOrThrow } from '../util/parseIntOrThrow';
import { getValue, ConfigKeyType } from '../RemoteConfig';

function makeGetter(configKey: ConfigKeyType): (fallback?: number) => number {
  return fallback => {
    try {
      return parseIntOrThrow(
        getValue(configKey),
        `Failed to parse ${configKey} as an integer`
      );
    } catch (err) {
      if (isNumber(fallback)) {
        return fallback;
      }
      throw err;
    }
  };
}

export const getGroupSizeRecommendedLimit = makeGetter(
  'global.groupsv2.maxGroupSize'
);

export const getGroupSizeHardLimit = makeGetter(
  'global.groupsv2.groupSizeHardLimit'
);
