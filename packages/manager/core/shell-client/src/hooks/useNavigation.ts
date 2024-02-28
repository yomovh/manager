import { useShell } from './useShell';

/**
 * @deprecated use ShellContext directly
 */
export const useNavigation = () => {
  const { shell } = useContext(ShellContext);

  return shell.navigation;
};

export default useNavigation;
