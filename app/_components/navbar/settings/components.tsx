import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { DesktopWrap, HelpIcon, Moon, Sun } from "./styled";
import useToggleMode from "@/app/_utils/hooks/useToggleMode";
import { map } from "@/app/_utils/helpers";
import { ToggleProps } from "./types";
import { User } from "./user";

export const Help = () => {
  return (
    <Button onClick={() => null} variant={"ghost"} size="icon">
      <HelpIcon />
    </Button>
  );
};

export const ToggleMode = ({ checked, toggleMode }: ToggleProps) => {
  const IconOptions = useCallback(() => {
    const icons = map(<Sun />, <Moon />);
    return <>{icons.get(checked)}</>;
  }, [checked]);

  return (
    <Button size="icon" variant="ghost" onClick={toggleMode}>
      <IconOptions />
    </Button>
  );
};

export const Desktop = () => {
  const toggleProps = useToggleMode();
  return (
    <DesktopWrap>
      <Help />
      <ToggleMode {...toggleProps} />
      <User />
    </DesktopWrap>
  );
};
