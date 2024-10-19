import templateOnly from '@ember/component/template-only';

const Header = templateOnly();
export default Header;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Header: typeof Header;
  }
}
