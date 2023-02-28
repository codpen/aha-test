import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    navbar?: string;
    transparent?: string;
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
        light: "#21BEE2",
        dark: "#000000",
      },
      secondary: {
        main: "#FF9B33",
        light: "#FF5C01",
        dark: "#FFD25F",
      },
      background: {
        default: "#181818",
        navbar: "#1B1B1B",
        transparent: "transparent",
      },
      grey: {
        300: "#B2B2B2",
        400: "#929292",
        500: "rgba(255,255,255,0.5)",
        600: "#8A8A8F",
        700: "rgba(255,255,255,0.3)",
        800: "rgba(255,255,255,0.06)",
      },
      text: {
        primary: "#FFFFFF",
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
