import { Route, createRoutesFromElements } from "react-router-dom";

import { ErrorPage } from "@components/molecules";

import Asteroid from "@pages/asteroid";
import App from "@pages/app.component";

const routes = createRoutesFromElements(
	<>
		<Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>
		<Route path="/:id" element={<Asteroid />}></Route>
	</>
);

export default routes;
