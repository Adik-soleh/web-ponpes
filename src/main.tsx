import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import 'swiper/swiper-bundle.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Provider >
        <App />
      </Provider>
  </StrictMode>
);
