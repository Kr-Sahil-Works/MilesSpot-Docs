import { Bookmark } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import SectionTitle from "../../components/common/SectionTitle";

export default function Bookmarks() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Bookmarks"
        title="Save What Matters"
        subtitle="Quickly bookmark posts and revisit them anytime."
      />

      <GlassCard>

        <Badge>

          <Bookmark size={14} />

          Bookmarks

        </Badge>

        <h3 className="mt-6 text-3xl font-bold">
          Organize your favourite content.
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          Spotlight lets users bookmark important posts
          and access them instantly, even when offline.
        </p>

      </GlassCard>

    </section>
  );
}