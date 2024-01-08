import SignPage from "./pages/signPage";
import Loading from "./pages/loading"
import { Currency } from "./currency/page";

export default function home() {
  return (
    <div>
      <SignPage />
      <Loading/>
      <Currency/>
    </div>
  );
}
  