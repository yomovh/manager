import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { OsdsLink } from '@ovhcloud/ods-components/react';
import { OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import { ODS_TEXT_COLOR_INTENT } from '@ovhcloud/ods-components';
import useNotifications from '@/hooks/useNotifications';
import OpenStackDownloadModal from '@/components/users/OpenStackDownloadModal';
import { DOWNLOAD_FILENAME } from '@/download-openrc.constants';

export default function OpenStackDownloadPage() {
  const { projectId } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation('common');
  const { addError, addSuccess } = useNotifications();
  const navigate = useNavigate();
  const onClose = () => {
    navigate('..');
  };
  const userId = searchParams.get('userId');
  return (
    <>
      <OpenStackDownloadModal
        projectId={`${projectId}`}
        userId={`${userId}`}
        onClose={() => onClose()}
        onSuccess={(content: string) => {
          addSuccess(
            <>
              {t('pci_projects_project_users_download-openrc_success_message')}
              <OsdsLink
                href={content}
                className={'ml-1'}
                color={ODS_TEXT_COLOR_INTENT.primary}
                download={DOWNLOAD_FILENAME}
                target={OdsHTMLAnchorElementTarget._top}
              >
                {t(
                  'pci_projects_project_users_download-openrc_success_message_link',
                )}
              </OsdsLink>
            </>,
          );
        }}
        onError={(error: Error) => {
          addError(
            <>
              {t('pci_projects_project_users_download-openrc_error_openrc', {
                message: error && error.message,
              })}
            </>,
          );
        }}
      />
    </>
  );
}
