import { create } from "gretchen";

const baseDomain = import.meta.env.VITE_API_DOMAIN;
const baseApiVersion = import.meta.env.VITE_API_VERSION;
const baseURL = `${baseDomain}/rest/${baseApiVersion}/neo/`;

const gretchenInstance = create({
	baseURL,
});

export default gretchenInstance;
