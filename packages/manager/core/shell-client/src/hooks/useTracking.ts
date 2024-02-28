import { useShell } from './useShell';

/**
 * @deprecated use ShellContext directly
 */
export const useTracking = () => {
  const { shell } = useContext(ShellContext);

  return shell.tracking;
};

export default useTracking;
