

import SignPage from "./pages/signPage";
import Loading from "./pages/loading";
import Finish from "./gotodashboard/page";

export default function home() {
  return (
    <div>
      <SignPage />
      <Loading />
      <Finish/>
    </div>
  );
}
  