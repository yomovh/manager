import {
  ODS_THEME_COLOR_INTENT,
  ODS_THEME_TYPOGRAPHY_LEVEL,
  ODS_THEME_TYPOGRAPHY_SIZE,
} from '@ovhcloud/ods-common-theming';
import { OsdsText } from '@ovhcloud/ods-components/react';
import { Role } from '@/interface';

export default function Roles({ roles }: { roles: Role[] }) {
  return (
    <>
      {roles.map((role, idx) => (
        <OsdsText
          level={ODS_THEME_TYPOGRAPHY_LEVEL.body}
          size={ODS_THEME_TYPOGRAPHY_SIZE._400}
          color={ODS_THEME_COLOR_INTENT.text}
          key={idx}
          className={'block'}
        >
          {role.description || role.name}
        </OsdsText>
      ))}
    </>
  );
}
