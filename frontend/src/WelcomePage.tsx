import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import {useNavigate} from "react-router";
import UpBar from "@/UpBar.tsx";

export function WelcomePage() {
  return (
      <>
        <UpBar/>
        <p>wassup</p>
      </>
  )
}

export default WelcomePage;
