import { User } from '@ovh-ux/manager-config';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { TRANSLATE_NAMESPACE } from '../constants';

import {OsdsText} from '@ovhcloud/ods-components/react'
import { ODS_TEXT_LEVEL, ODS_TEXT_SIZE } from '@ovhcloud/ods-components';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
type Props = {
  cssBaseClassName?: string;
  user?: User;
};

const UserDetails = ({
  cssBaseClassName = '',
  user = {} as User,
}: Props): JSX.Element => {
  const { t } = useTranslation(TRANSLATE_NAMESPACE);
  const { organisation, email, nichandle, auth } = user;

  return (
    <p>
      {
        <>
          {organisation && (

            <OsdsText color={ODS_THEME_COLOR_INTENT.text}
            level={ODS_TEXT_LEVEL.body}
            size={ODS_TEXT_SIZE._400} className='block'>{organisation}</OsdsText>
          )}
          <OsdsText color={ODS_THEME_COLOR_INTENT.text}
            level={ODS_TEXT_LEVEL.body}
            size={ODS_TEXT_SIZE._400} className='block'>
            <Trans
              t={t}
              i18nKey="user_account_menu_notification_email"
              values={{ email }}
            ></Trans>
          </OsdsText>
        </>
      }

      {email !== nichandle && (
       <OsdsText color={ODS_THEME_COLOR_INTENT.text}
       level={ODS_TEXT_LEVEL.body}
       size={ODS_TEXT_SIZE._400} className='block'>
          {nichandle}
          </OsdsText>
      )}
    </p>
  );
};

export default UserDetails;
