import templateOnly from '@ember/component/template-only';
import type { Filter } from 'ember-todomvc/controllers';

export interface FiltersSignature {
  Args: {
    filter: Filter;
  };
}

const Filters = templateOnly<FiltersSignature>();
export default Filters;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Footer::Filters': typeof Filters;
  }
}
