import '@glint/environment-ember-loose';
import type focusOnEdit from 'ember-todomvc/modifiers/focus-when';
import type EmberTruthRegistry from 'ember-truth-helpers/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberTruthRegistry /* other addon registries */ {
    'focus-when': typeof focusOnEdit;
  }
}
