import PageWrapper from "../../components/layout/PageWrapper";

import Requirements from "./Requirements";
import Setup from "./Setup";
import Running from "./Running";
import Build from "./Build";

export default function Installation() {
  return (
    <PageWrapper>

      <Requirements />

      <Setup />

      <Running />

      <Build />

    </PageWrapper>
  );
}