import { modifier } from 'ember-modifier';

interface FocusOnEditSignature {
  Element: HTMLInputElement;
  Args: {
    Positional: [shouldFocus?: true];
  };
}

export default modifier<FocusOnEditSignature>(function focusOnEdit(
  element,
  [shouldFocus],
) {
  if (shouldFocus) {
    element.focus();
  }
});
