import {
  OsdsButton,
  OsdsIcon,
  OsdsMenu,
  OsdsMenuItem,
  OsdsText,
} from '@ovhcloud/ods-components/react';
import {
  ODS_BUTTON_SIZE,
  ODS_BUTTON_VARIANT,
  ODS_ICON_NAME,
  ODS_ICON_SIZE,
  ODS_TEXT_LEVEL,
} from '@ovhcloud/ods-components';
import {
  ODS_THEME_COLOR_INTENT,
  ODS_THEME_TYPOGRAPHY_SIZE,
} from '@ovhcloud/ods-common-theming';
import { useHref, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import { useEnvironment } from '@ovh-ux/manager-react-shell-client';
import { User } from '@/interface';
import { HORIZON_LINK, HORIZON_LINK_TRUSTED } from '@/constants';
import { useRegeneratePassword } from '@/hooks/useUser';
import useNotifications from '@/hooks/useNotifications';

export default function Actions({ user }: { user: User }) {
  const { t } = useTranslation('common');
  const hrefRemove = useHref(`./delete?userId=${user.id}`);
  const hrefRCloneDownload = useHref(`./rclone/download?userId=${user.id}`);
  const hrefOpenStackDownload = useHref(`./openrc/download?userId=${user.id}`);
  const hrefGenerateOpenStackToken = useHref(
    `./token/generate?userId=${user.id}`,
  );
  const horizonLink = (useEnvironment().getUser().isTrusted
    ? HORIZON_LINK_TRUSTED
    : HORIZON_LINK)[useEnvironment().getRegion()].replace(
    '{username}',
    user.username,
  );
  const { projectId } = useParams();
  const { addError, addSuccess, addInfo } = useNotifications();
  const navigate = useNavigate();
  const { regenerate } = useRegeneratePassword({
    projectId: `${projectId}`,
    userId: `${user.id}`,
    onError: (err: Error) => {
      addError(
        <>
          {t('pci_projects_project_users_password_message_error', {
            user: user.username,
            message: err && err.message,
          })}
        </>,
      );
    },
    onSuccess: (updatedUser: User) => {
      addInfo(
        <span
          dangerouslySetInnerHTML={{
            __html: t('pci_projects_project_users_password_message_infos', {
              user: updatedUser.username,
              password: updatedUser.password,
              interpolation: { escapeValue: false },
            }),
          }}
        ></span>,
      );
      addSuccess(
        <>
          {t('pci_projects_project_users_password_message_success', {
            user: updatedUser.username,
          })}
        </>,
      );
      navigate('.');
    },
  });
  return (
    <OsdsMenu>
      <OsdsButton
        slot={'menu-title'}
        circle
        color={ODS_THEME_COLOR_INTENT.primary}
        variant={ODS_BUTTON_VARIANT.stroked}
      >
        <OsdsIcon
          name={ODS_ICON_NAME.ELLIPSIS}
          color={ODS_THEME_COLOR_INTENT.primary}
          size={ODS_ICON_SIZE.xxs}
        ></OsdsIcon>
      </OsdsButton>
      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          href={horizonLink}
          color={ODS_THEME_COLOR_INTENT.primary}
          target={OdsHTMLAnchorElementTarget._blank}
        >
          <span slot={'start'}>
            <OsdsText
              size={ODS_THEME_TYPOGRAPHY_SIZE._500}
              color={ODS_THEME_COLOR_INTENT.primary}
            >
              {t('pci_projects_project_users_horizon_label')}
            </OsdsText>
            <OsdsIcon
              name={ODS_ICON_NAME.EXTERNAL_LINK}
              color={ODS_THEME_COLOR_INTENT.primary}
              size={ODS_ICON_SIZE.xxs}
              className={'ml-1'}
            ></OsdsIcon>
          </span>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          href={hrefOpenStackDownload}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_users_openrc_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          href={hrefRCloneDownload}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_users_rclone_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          href={hrefGenerateOpenStackToken}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_users_token_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          onClick={regenerate}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_users_password_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          href={hrefRemove}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_users_delete_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>
    </OsdsMenu>
  );
}
