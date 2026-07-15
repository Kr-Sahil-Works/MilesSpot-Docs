import { NotebookPen } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import SectionTitle from "../../components/common/SectionTitle";

export default function Notes() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Notes"
        title="Private Notes"
        subtitle="Capture ideas and keep them synced across your devices."
      />

      <GlassCard>

        <Badge>

          <NotebookPen size={14} />

          Notes

        </Badge>

        <h3 className="mt-6 text-3xl font-bold">
          Built-in personal notes.
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          Create quick notes, access them offline
          and keep everything organized in one place.
        </p>

      </GlassCard>

    </section>
  );
}