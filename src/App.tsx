import { ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"
import "./App.scss"
import { NavigationBar } from "./Components/Navigationbar/NavigationBar"
import { store } from "./Store/Store"
import { theme } from "./Types/Theme/Theme"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationBar />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
