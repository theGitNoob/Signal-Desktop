// Copyright 2020-2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';

import { LocalizerType } from '../../types/Util';
import { ConversationType } from '../../state/ducks/conversations';
import { SystemMessage } from './SystemMessage';
import { Emojify } from './Emojify';
import {
  getStringForProfileChange,
  ProfileNameChangeType,
} from '../../util/getStringForProfileChange';

export type PropsType = {
  change: ProfileNameChangeType;
  changedContact: ConversationType;
  i18n: LocalizerType;
};

export function ProfileChangeNotification(props: PropsType): JSX.Element {
  const { change, changedContact, i18n } = props;
  const message = getStringForProfileChange(change, changedContact, i18n);

  return <SystemMessage icon="profile" contents={<Emojify text={message} />} />;
}
