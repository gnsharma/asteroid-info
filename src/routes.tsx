import { Route, createRoutesFromElements, Navigate } from "react-router-dom";

import { ErrorPage, RequireAuth } from "@components/molecules";

import Asteroid from "@pages/asteroid";
import App from "@pages/app.component";

const routes = createRoutesFromElements(
	<>
		<Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>
		<Route path="/:id" element={<Asteroid />}></Route>
	</>
);

export default routes;
