import { useShell } from './useShell';

/**
 * @deprecated use ShellContext directly
 */
export const useRouting = () => {
  const { shell } = useContext(ShellContext);

  return shell.routing;
};

export default useRouting;
