import { Filter } from '@ovh-ux/manager-core-api';
import { OsdsChip } from '@ovhcloud/ods-components/react';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { useTranslation } from 'react-i18next';
import { getComparatorI18nKey } from '@/components/useColumnFilters';

export interface FilterListProps {
  filters: Filter[];
  onRemoveFilter: (filter: Filter) => void;
}

export default function FilterList({
  filters,
  onRemoveFilter,
}: FilterListProps) {
  const { t } = useTranslation('filter');
  return (
    <>
      {filters?.map((filter, key) => (
        <OsdsChip
          color={ODS_THEME_COLOR_INTENT.primary}
          key={key}
          inline={true}
          removable={true}
          onOdsChipRemoval={() => {
            onRemoveFilter(filter);
          }}
        >
          {filter.key} {t(getComparatorI18nKey(filter.comparator))}{' '}
          {filter.value}
        </OsdsChip>
      ))}
    </>
  );
}
