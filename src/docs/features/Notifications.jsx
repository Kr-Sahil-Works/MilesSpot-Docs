import { Bell } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import SectionTitle from "../../components/common/SectionTitle";

import notification from "../../assets/screenshots/notification.png";

export default function Notifications() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Notifications"
        title="Realtime Notifications"
        subtitle="Never miss an important conversation or activity."
      />

      <GlassCard className="overflow-hidden p-8 md:p-12">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div className="order-2 lg:order-1 flex justify-center">

            <img
              src={notification}
              alt="Notifications"
              className="w-[280px] rounded-[36px]"
            />

          </div>

          <div className="order-1 lg:order-2">

            <Badge>

              <Bell size={14} />

              Notifications

            </Badge>

            <h3 className="mt-6 text-4xl font-black">
              Instant updates.
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Push notifications powered by Expo keep users informed
              about new messages and interactions.
            </p>

          </div>

        </div>

      </GlassCard>

    </section>
  );
}