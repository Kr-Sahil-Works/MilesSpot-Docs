import PageWrapper from "../../components/layout/PageWrapper";

import Chat from "./Chat";
import Posts from "./Posts";
import Stories from "./Stories";
import Themes from "./Themes";
import Offline from "./Offline";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import Notes from "./Notes";
import Security from "./Security";

export default function Features() {
  return (
    <PageWrapper>

      <Chat />

      <Posts />

      <Stories />

      <Themes />

      <Offline />

      <Notifications />

      <Bookmarks />

      <Notes />

      <Security />

    </PageWrapper>
  );
}