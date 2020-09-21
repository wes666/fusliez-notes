import { JssProvider, ThemeProvider } from "react-jss";

import ControlsContent from "./ControlsContent";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import { useData } from "context";

export default function App(): JSX.Element {
  // eslint-disable-next-line
  const { theme } = useData()!;

  return (
    <React.Fragment>
      <JssProvider registry={jssSetUp(theme)}>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback="loading">
            <main>
              <MainContent />
              <ControlsContent />
              <MapsContent />
            </main>
            <footer>
              <small>
                fusliez notes{" "}
                <a href="https://github.com/Kedyn/fusliez-notes/releases/tag/v0.7.0">
                  v0.7.0
                </a>{" "}
                [9/15/2020] made with &#10084; by the{" "}
                <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
                  fuslie fam
                </a>
                .
              </small>
            </footer>
          </React.Suspense>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
