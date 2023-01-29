import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { EventProvider } from "react-native-outside-press";
import ReactQueryProvider from "@libs/react-query";
import StyledComponentsProvider from "@libs/styled-components";
import Routes from "./routes";

const App = () => {
  return (
    <ReactQueryProvider>
      <StyledComponentsProvider>
        <EventProvider className="flex-1">
          <GestureHandlerRootView className="flex-1">
            <SafeAreaProvider>
              <Routes />
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </EventProvider>
      </StyledComponentsProvider>
    </ReactQueryProvider>
  );
};

export default App;
