import { ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"
import { NavigationBar } from "../Components/Navigationbar/NavigationBar"
import { View } from "../Components/View/View"
import { store } from "../Store/Store"
import { theme } from "../Types/Theme/Theme"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <View />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
