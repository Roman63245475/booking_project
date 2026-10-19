/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the WelcomePage component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WelcomePage } from "./WelcomePage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import SignIn from "@/SignIn.tsx";
import SignUp from "@/SignUp.tsx";

const elem = document.getElementById("root")!;
const app = (
  <RouterProvider router={createBrowserRouter([
      {
          path: "/",
          element: <WelcomePage/>
      },
      {
          path: "sign-in/",
          element: <SignIn/>
      },
      {
          path: 'sign-up',
          element: <SignUp/>
      }
    ]
  )}/>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
