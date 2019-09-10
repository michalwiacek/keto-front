import {lightTheme} from "../common/src/theme/light";
import {ThemeProvider} from "styled-components";
import React, { Fragment } from "react";

export default () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Fragment>
        blog
      </Fragment>
    </ThemeProvider>
  )
}