import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import UserDefaultPaymentMethod from './DefaultPaymentMethod';
import style from './style.module.scss';

import { useShell } from '@/context';
import useProductNavReshuffle from '@/core/product-nav-reshuffle';

type Props = {
  defaultPaymentMethod?: unknown;
  isLoading?: boolean;
};

const UserAccountMenu = ({
  defaultPaymentMethod = {},
  isLoading = false,
}: Props): JSX.Element => {
  const { t } = useTranslation('user-account-menu');
  const shell = useShell();
  const trackingPlugin = shell.getPlugin('tracking');
  const environment = shell.getPlugin('environment').getEnvironment();
  const region = environment.getRegion();
  const { closeAccountSidebar } = useProductNavReshuffle();

  const user = shell
    .getPlugin('environment')
    .getEnvironment()
    .getUser();

  const isSubUser = ['provider', 'user'].includes(user.auth.method);

  const displayUserName = {
    userName: isSubUser ? user.auth.user : `${user.firstname} ${user.name}`,
    className: `oui-heading_4 mb-1 ${isSubUser && 'text-truncate'}`,
  };

  const onLougoutBtnClick = () => {
    trackingPlugin.trackClick({
      name: 'topnav::user_widget::logout',
      type: 'action',
    });
    shell.getPlugin('auth').logout();
  };

  const onMyAccountLinkClick = () => {
    closeAccountSidebar();
    trackingPlugin.trackClick({
      name: 'topnav::user_widget::go_to_profile',
      type: 'navigation',
    });
  };

  const getUrl = (key: string, hash: string) =>
    shell.getPlugin('navigation').getURL(key, hash);

  const myAccountLink = getUrl('dedicated', '#/useraccount/dashboard');
  const myInvoicesLink = getUrl('dedicated', '#/billing/history');
  const myCommunicationsLink = getUrl('dedicated', '#/useraccount/emails');
  const myContractsLink = getUrl('dedicated', '#/billing/autorenew');

  return (
    <div className={`${style.menuContent} oui-navbar-menu__wrapper`}>
      <div
        className="oui-navbar-menu oui-navbar-menu_fixed oui-navbar-menu_end p-4"
        data-navi-id="account-sidebar-block"
      >
        <div className="border-bottom pb-2 pt-2">
          <h1 className={displayUserName.className}>
            {displayUserName.userName}
          </h1>
          <a
            onClick={onMyAccountLinkClick}
            className="d-block my-3"
            aria-label={t('user_account_menu_profile')}
            title={t('user_account_menu_profile')}
            href={myAccountLink}
            target="_top"
            id="user-account-menu-profile"
            data-navi-id="profile"
          >
            {t('user_account_menu_profile')}
          </a>
          <p className="mb-0" data-navi-id="account-email">
            {user.email}
          </p>
          {user.email !== user.nichandle && (
            <p className="mb-0">
              <Trans
                t={t}
                i18nKey="user_account_menu_user_id"
                values={{ nichandle: user.nichandle }}
              ></Trans>
            </p>
          )}
        </div>
        <div className="border-bottom pb-2 pt-2">
          <div className="d-flex justify-content-between">
            <span>{t('user_account_menu_role_connexion')}</span>
            <p
              className={`ml-0 oui-chip oui-badge_warning mb-0`}
              data-navi-id="account-auth-method"
            >
              <strong>{t(`user_account_menu_role_${user.auth.method}`)}</strong>
            </p>
          </div>
          {!user.enterprise && (
            <UserDefaultPaymentMethod
              defaultPaymentMethod={defaultPaymentMethod}
              isLoading={isLoading}
            />
          )}
          <div className="d-flex mt-1 justify-content-between">
            <span>{t('user_account_menu_support')}</span>
            {['EU', 'CA'].includes(region) && (
              <p className="oui-chip oui-badge_info mb-0">
                {t(
                  `user_account_menu_support_level_${user.supportLevel.level}${
                    user.isTrusted ? '_trusted' : ''
                  }`,
                )}
              </p>
            )}
          </div>
        </div>
        <div className="border-bottom pb-2 pt-2">
          <a
            onClick={closeAccountSidebar}
            className="d-block"
            aria-label={t('user_account_menu_my_invoices')}
            title={t('user_account_menu_my_invoices')}
            href={myInvoicesLink}
            target="_top"
          >
            {t('user_account_menu_my_invoices')}
          </a>
          <a
            onClick={closeAccountSidebar}
            className="d-block"
            aria-label={t('user_account_menu_my_communication')}
            title={t('user_account_menu_my_communication')}
            href={myCommunicationsLink}
            target="_top"
          >
            {t('user_account_menu_my_communication')}
          </a>
          <a
            onClick={closeAccountSidebar}
            className="d-block"
            aria-label={t('user_account_menu_my_contracts')}
            title={t('user_account_menu_my_contracts')}
            href={myContractsLink}
            target="_top"
          >
            {t('user_account_menu_my_contracts')}
          </a>
        </div>
        <button
          type="button"
          role="button"
          className="w-100 oui-button oui-button_link mt-3 center"
          onClick={onLougoutBtnClick}
          aria-label={t('user_account_menu_logout')}
          title={t('user_account_menu_logout')}
          data-navi-id="logout"
        >
          {t('user_account_menu_logout')}
        </button>
      </div>
    </div>
  );
};

export default UserAccountMenu;
