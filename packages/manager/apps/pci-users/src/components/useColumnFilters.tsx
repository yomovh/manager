import { Filter, FilterComparator } from '@ovh-ux/manager-core-api';
import { useState } from 'react';

function filterEquals(a: Filter, b: Filter) {
  return (
    a.key === b.key && a.value === b.value && a.comparator === b.comparator
  );
}

export function getComparatorI18nKey(comp: FilterComparator) {
  switch (comp) {
    case FilterComparator.Includes:
      return 'common_criteria_adder_operator_string_contains';
    case FilterComparator.StartsWith:
      return 'common_criteria_adder_operator_string_startsWith';
    case FilterComparator.EndsWith:
      return 'common_criteria_adder_operator_string_endsWith';
    case FilterComparator.IsEqual:
      return 'common_criteria_adder_operator_string_is';
    case FilterComparator.IsDifferent:
      return 'common_criteria_adder_operator_string_isNot';
    case FilterComparator.IsLower:
      return 'common_criteria_adder_operator_number_smaller';
    case FilterComparator.IsHigher:
      return 'common_criteria_adder_operator_number_bigger';
    case FilterComparator.IsBefore:
      return 'common_criteria_adder_operator_date_isBefore';
    case FilterComparator.IsAfter:
      return 'common_criteria_adder_operator_date_isAfter';
    default:
      return '';
  }
}

export default function useColumnFilters() {
  const [filters, setFilters] = useState<Filter[]>([]);

  return {
    filters,
    addFilter: (filter: Filter) => {
      setFilters((others) => {
        // cannot have duplicate filters
        if (others.some((f) => filterEquals(f, filter))) {
          return others;
        }
        return [...others, filter];
      });
    },
    removeFilter: (filter: Filter) => {
      setFilters((others) => others.filter((f) => !filterEquals(f, filter)));
    },
  };
}
