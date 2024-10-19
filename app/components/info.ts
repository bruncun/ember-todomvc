import templateOnly from '@ember/component/template-only';

const Info = templateOnly();
export default Info;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Info: typeof Info;
  }
}
