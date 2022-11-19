import { createTheme, ThemeProvider } from "@mui/material"
import "./App.scss"
import { NavigationBar } from "./Components/Navigationbar/NavigationBar"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e94560"
      },
      secondary: {
        main: "#4999fa"
      }
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationBar />
      </ThemeProvider>
    </div>
  )
}

export default App
