import { useMemo, useState } from 'react';
import {
  OsdsButton,
  OsdsFormField,
  OsdsInput,
  OsdsSelect,
  OsdsSelectOption,
  OsdsText,
} from '@ovhcloud/ods-components/react';
import {
  ODS_BUTTON_SIZE,
  ODS_INPUT_TYPE,
  ODS_TEXT_LEVEL,
  OdsSelectValueChangeEventDetail,
  OsdsSelectCustomEvent,
} from '@ovhcloud/ods-components';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Filter, FilterComparator } from '@ovh-ux/manager-core-api';
import { useTranslation } from 'react-i18next';
import { getComparatorI18nKey } from '@/components/useColumnFilters';

interface ColumnFilter {
  id: string;
  label: string;
  comparators: FilterComparator[];
}

interface FilterAddProps {
  columns: ColumnFilter[];
  onAddFilter: (filter: Filter) => void;
}

export default function FilterAdd({ columns, onAddFilter }: FilterAddProps) {
  const { t } = useTranslation('filter');
  const [selectedId, setSelectedId] = useState(columns?.[0]?.id || '');
  const [selectedComparator, setSelectedComparator] = useState(
    columns?.[0]?.comparators?.[0] || FilterComparator.IsEqual,
  );
  const [value, setValue] = useState('');
  const selectedColumn = useMemo(
    () => columns.find(({ id }) => selectedId === id),
    [columns, selectedId],
  );
  return (
    <>
      <OsdsFormField>
        <div slot="label">
          <OsdsText
            level={ODS_TEXT_LEVEL.heading}
            color={ODS_THEME_COLOR_INTENT.text}
          >
            {t('common_criteria_adder_column_label')}
          </OsdsText>
        </div>
        <OsdsSelect
          value={selectedId}
          onOdsValueChange={(
            event: OsdsSelectCustomEvent<OdsSelectValueChangeEventDetail>,
          ) => {
            setSelectedId(event.detail.value as string);
          }}
        >
          {columns.map(({ id, label }) => (
            <OsdsSelectOption key={id} value={id}>
              {label}
            </OsdsSelectOption>
          ))}
        </OsdsSelect>
      </OsdsFormField>
      <OsdsFormField className="mt-2">
        <div slot="label">
          <OsdsText
            level={ODS_TEXT_LEVEL.heading}
            color={ODS_THEME_COLOR_INTENT.text}
          >
            {t('common_criteria_adder_operator_label')}
          </OsdsText>
        </div>
        <OsdsSelect
          value={selectedComparator}
          onOdsValueChange={(
            event: OsdsSelectCustomEvent<OdsSelectValueChangeEventDetail>,
          ) => {
            setSelectedComparator(event.detail.value as FilterComparator);
          }}
        >
          {selectedColumn?.comparators?.map((comp) => (
            <OsdsSelectOption key={comp} value={comp}>
              {t(getComparatorI18nKey(comp))}
            </OsdsSelectOption>
          ))}
        </OsdsSelect>
      </OsdsFormField>
      <OsdsFormField className="mt-2">
        <div slot="label">
          <OsdsText
            level={ODS_TEXT_LEVEL.heading}
            color={ODS_THEME_COLOR_INTENT.text}
          >
            {t('common_criteria_adder_value_label')}
          </OsdsText>
        </div>
        <OsdsInput
          type={ODS_INPUT_TYPE.text}
          color={ODS_THEME_COLOR_INTENT.primary}
          value={value}
          onOdsValueChange={(e) => setValue(e.detail.value as string)}
          className="border"
        />
      </OsdsFormField>
      <OsdsButton
        className="mt-4"
        color={ODS_THEME_COLOR_INTENT.primary}
        size={ODS_BUTTON_SIZE.sm}
        disabled={value ? undefined : true}
        onClick={() => {
          onAddFilter({
            key: selectedId,
            comparator: selectedComparator,
            value,
          });
          setValue('');
        }}
      >
        {t('common_criteria_adder_submit_label')}
      </OsdsButton>
    </>
  );
}
