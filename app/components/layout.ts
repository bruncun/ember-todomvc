import templateOnly from '@ember/component/template-only';

export interface LayoutSignature {
  // The arguments accepted by the component
  Args: {
    isTodosEmpty: boolean;
  };
  // Any blocks yielded by the component
  Blocks: {
    header: [];
    main: [];
    footer: [];
    info: [];
  };
}

const Layout = templateOnly<LayoutSignature>();
export default Layout;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Layout: typeof Layout;
  }
}
