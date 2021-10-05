import "./App.css";
import {AppRoutes} from "./Routing/AppRoutes"
import { Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return <>
            <Switch>
            {AppRoutes.map((route) => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={route.key}
              />
            ))}
        </Switch>
  </>;
}

export default App;
