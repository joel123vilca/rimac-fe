import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Plans from "./pages/Plans";
import Resumen from "./pages/Resumen";
import Layout from "./shared/Layout";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/plans"
            element={
              <Layout>
                <Plans />
              </Layout>
            }
          />
          <Route
            path="/resumen"
            element={
              <Layout>
                <Resumen />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
