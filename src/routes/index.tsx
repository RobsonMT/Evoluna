import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { StepOne } from "../pages/StepOne";
import { StepTwo } from "../pages/StepTwo";
import { StepThree } from "../pages/StepThree";

export const Routes = () => (
  <AnimatePresence>
    <Switch>
      <Route exact path="/" component={StepOne} />
      <Route path="/step2" component={StepTwo} />
      <Route path="/step3" component={StepThree} />
    </Switch>
  </AnimatePresence>
);
