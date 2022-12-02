import { useIsFocused } from "@react-navigation/core";
import { StatusBar } from "react-native";

const FocusedStatusBar = (props) => {
  const IsFocused = useIsFocused();
  return IsFocused ? <StatusBar {...props} /> : null;
};

export default FocusedStatusBar;
