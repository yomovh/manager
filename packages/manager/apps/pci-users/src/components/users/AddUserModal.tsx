import {
  OsdsButton,
  OsdsModal,
  OsdsInput,
  OsdsFormField,
  OsdsText,
  OsdsCheckbox,
  OsdsCheckboxButton,
} from '@ovhcloud/ods-components/react';
import { useTranslation } from 'react-i18next';
import {
  ODS_THEME_COLOR_INTENT,
  ODS_THEME_TYPOGRAPHY_LEVEL,
} from '@ovhcloud/ods-common-theming';
import {
  ODS_BUTTON_VARIANT,
  ODS_CHECKBOX_BUTTON_SIZE,
  ODS_INPUT_TYPE,
  OdsCheckboxCheckedChangeEventDetail,
  OsdsCheckboxCustomEvent,
} from '@ovhcloud/ods-components';
import { useEffect, useState } from 'react';
import { useAllRoles } from '@/hooks/useRole';

type RolesSelectorProps = {
  projectId: string;
  onInput: (selectedRoles: string[]) => void;
};
function RolesSelector({ projectId, onInput }: RolesSelectorProps) {
  const { data: projectRoles } = useAllRoles(`${projectId}`);
  const [userRoles, setUserRoles] = useState<string[]>([]);

  useEffect(() => {
    onInput(userRoles);
  }, [userRoles]);

  return (
    <>
      {projectRoles?.roles.map((role) => (
        <OsdsCheckbox
          key={role.id}
          value={role.id}
          checked={userRoles.includes(role.id)}
          onOdsCheckedChange={(
            event: OsdsCheckboxCustomEvent<OdsCheckboxCheckedChangeEventDetail>,
          ) => {
            if (event.detail.checked) {
              const userRolesSet = new Set(userRoles);
              userRolesSet.add(event.detail.value);
              setUserRoles(Array.from(userRolesSet));
            } else {
              const userRolesSet = new Set(userRoles);
              userRolesSet.delete(event.detail.value);
              setUserRoles(Array.from(userRolesSet));
              const indexRoleToRemove = userRoles.indexOf(event.detail.value);
              userRoles.splice(indexRoleToRemove, 1);
              setUserRoles([...userRoles]);
            }
          }}
        >
          <OsdsCheckboxButton
            color={ODS_THEME_COLOR_INTENT.primary}
            size={ODS_CHECKBOX_BUTTON_SIZE.sm}
            interactive={true}
            hasFocus={true}
          >
            <OsdsText
              color={ODS_THEME_COLOR_INTENT.text}
              slot={'end'}
              level={ODS_THEME_TYPOGRAPHY_LEVEL.body}
            >
              {role.description}
            </OsdsText>
          </OsdsCheckboxButton>
        </OsdsCheckbox>
      ))}
    </>
  );
}

/** ******************************* */
type Props = {
  projectId: string;
  onClose: () => void;
  onConfirm: () => void;
};
enum StepEnum {
  DESCRIPTION = 'DESCRIPTION',
  ROLES = 'ROLES',
}
type FormState = {
  description: string;
  roles: string[];
  touched: boolean;
  hasError: boolean;
  step: StepEnum;
};

export default function AddUserModal({ onConfirm, onClose, projectId }: Props) {
  // TODO translations
  const { t } = useTranslation('common');

  const [formState, setFormState] = useState<FormState>({
    description: '',
    roles: [],
    touched: false,
    hasError: false,
    step: StepEnum.DESCRIPTION,
  });

  useEffect(() => {
    formState.hasError = formState.touched && formState.description === '';
  }, [formState.touched, formState.description]);

  return (
    <>
      <OsdsModal
        headline={
          formState.step === StepEnum.DESCRIPTION ? 'Add user' : 'Edit roles'
        }
        onOdsModalClose={onClose}
      >
        <slot name="content">
          {formState.step === StepEnum.DESCRIPTION ? (
            <OsdsFormField
              color={
                !formState.hasError
                  ? ODS_THEME_COLOR_INTENT.primary
                  : ODS_THEME_COLOR_INTENT.error
              }
              error={formState.hasError ? 'Please fill in this field.' : ''}
            >
              <OsdsText slot="label">User description</OsdsText>
              <OsdsInput
                value={formState.description}
                onOdsInputBlur={() => {
                  console.log('blur');
                  setFormState({ ...formState, touched: true });
                }}
                onOdsInputFocus={() => {
                  console.log('focus');
                  setFormState({ ...formState, touched: true });
                }}
                onOdsValueChange={(e) =>
                  setFormState({
                    ...formState,
                    description: `${e.detail.value}`,
                    touched: true,
                  })
                }
                type={ODS_INPUT_TYPE.text}
                color={
                  !formState.hasError
                    ? ODS_THEME_COLOR_INTENT.primary
                    : ODS_THEME_COLOR_INTENT.error
                }
                error={formState.hasError}
                className={
                  !formState.hasError ? 'border' : 'border border-danger'
                }
              />
              <pre>{formState.hasError ? 'true' : 'false'}</pre>
            </OsdsFormField>
          ) : (
            <RolesSelector
              projectId={projectId}
              onInput={(newRoles) =>
                setFormState({ ...formState, roles: newRoles })
              }
            />
          )}
        </slot>
        <OsdsButton
          slot="actions"
          color={ODS_THEME_COLOR_INTENT.primary}
          variant={ODS_BUTTON_VARIANT.stroked}
          onClick={onClose}
        >
          {t('pci_projects_project_users_roles_cancel')}
        </OsdsButton>
        {formState.step === StepEnum.DESCRIPTION ? (
          <OsdsButton
            slot="actions"
            color={ODS_THEME_COLOR_INTENT.primary}
            onClick={() => setFormState({ ...formState, step: StepEnum.ROLES })}
            {...(formState.description === '' && { disabled: true })}
          >
            Next
          </OsdsButton>
        ) : (
          <OsdsButton
            slot="actions"
            color={ODS_THEME_COLOR_INTENT.primary}
            onClick={onConfirm}
          >
            Confirm
          </OsdsButton>
        )}
      </OsdsModal>
    </>
  );
}
