import React from 'react';
import Select from 'react-select';

import {
  roles,
  accountStatuses,
  accountTypes,
  offices,
  titles,
} from '../../../lib/constants';
import { formatFilterSelect, formatFilterSelected } from '../../../lib/utils';
// import ErrorMessage from '../../utility/ErrorMessage';
// import Loading from '../../utility/Loading';

import './filters.module.scss';

const Filters = (props) => {
  return (
    <div className="filters">
      Roles
      <Select
        defaultValue={formatFilterSelected(props.activeFilters.role, roles)}
        placeholder="Select role"
        isMulti={true}
        options={formatFilterSelect(roles)}
        onChange={(e) => props.onFilterUpdate(e, 'role')}
      />
      Account Status
      <Select
        defaultValue={formatFilterSelected(
          props.activeFilters.accountStatus,
          accountStatuses,
        )}
        placeholder="Select account status"
        isMulti={true}
        options={formatFilterSelect(accountStatuses)}
        onChange={(e) => props.onFilterUpdate(e, 'accountStatus')}
      />
      Account Types
      <Select
        defaultValue={formatFilterSelected(
          props.activeFilters.accountType,
          accountTypes,
        )}
        placeholder="Select account type"
        isMulti={true}
        options={formatFilterSelect(accountTypes)}
        onChange={(e) => props.onFilterUpdate(e, 'accountType')}
      />
      Offices
      <Select
        defaultValue={formatFilterSelected(props.activeFilters.office, offices)}
        placeholder="Select office"
        isMulti={true}
        options={formatFilterSelect(offices)}
        onChange={(e) => props.onFilterUpdate(e, 'office')}
      />
      Titles
      <Select
        defaultValue={formatFilterSelected(props.activeFilters.title, titles)}
        placeholder="Select title"
        isMulti={true}
        options={formatFilterSelect(titles)}
        onChange={(e) => props.onFilterUpdate(e, 'title')}
      />
      {/* <fieldset>
        <div>
          <label htmlFor="">
            <input checked type="radio" name="filterInclusion" value="AND" />{' '}
            AND - Search will find instances that match all filters
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="radio" name="filterInclusion" value="OR" />{' '}
            OR - Search will find instances that match any filters
          </label>
        </div>
      </fieldset> */}
    </div>
  );
};

export default Filters;
