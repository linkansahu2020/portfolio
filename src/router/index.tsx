import type { LoaderFunction } from 'react-router-dom';

export interface IRouteObject {
  name: string;
  path?: string;
  element?: JSX.Element;
  errorElement?: JSX.Element;
  loader?: LoaderFunction;
  children?: IRouteObject[];
}

const NO_MATCH_ROUTE: IRouteObject = {
  name: '404 - Page Not Found',
  path: '*',
  element: <>hello</>,
};

const ALL_ROUTES: IRouteObject[] = [
  {
    name: 'All Routes Wrapper',
    children: [NO_MATCH_ROUTE],
  },
];

export { ALL_ROUTES };
