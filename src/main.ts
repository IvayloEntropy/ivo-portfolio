import { createApp } from "vue"
import App from "./App.vue"
import "./index.scss"
import "./firebase"
// import 'aos/dist/aos.css';
import "./css/style.css"
import { router } from "./router/router"




const app = createApp(App)
app.use(router)
app.mount("#app")
