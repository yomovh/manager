import { User } from '@ovh-ux/manager-config';
import React from 'react';

import { useTranslation } from 'react-i18next';

import { TRANSLATE_NAMESPACE } from '../constants';

import useUserInfos from './useUserInfos';

import {OsdsChip} from '@ovhcloud/ods-components/react'
import {ODS_CHIP_SIZE } from '@ovhcloud/ods-components';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


type Props = {
  translationBase?: string;
  user?: User;
};

const UserRole = ({
  translationBase = '',
  user = {} as User,
}: Props): JSX.Element => {
  const { t } = useTranslation(TRANSLATE_NAMESPACE);
  const role = useUserInfos(user).getUserRole();

  return (
    <div
      className="mb-2"
      data-navi-id="account-sidebar-block"
    >
      {role && (
        <div>
          <OsdsChip size={ODS_CHIP_SIZE.sm} color={ODS_THEME_COLOR_INTENT.warning} inline><span className='font-bold'>{t(`${translationBase}_role_${role}`)}</span></OsdsChip>
        </div>
      )}
    </div>
  );
};

export default UserRole;
