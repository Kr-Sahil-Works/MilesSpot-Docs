import { MessageCircle } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import SectionTitle from "../../components/common/SectionTitle";

import chat from "../../assets/screenshots/feed.png";

const features = [
  "Realtime messaging",
  "Typing indicator",
  "Delivered & Seen status",
  "Reply to messages",
  "Emoji reactions",
  "Edit & Delete",
  "Online presence",
  "Premium animations",
];

export default function Chat() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Messaging"
        title="Modern Chat Experience"
        subtitle="Spotlight delivers a fast, reliable and premium messaging experience inspired by today's leading social platforms."
      />

      <GlassCard
        className="
        overflow-hidden
        p-8
        md:p-12
        "
      >

        <div
          className="
          grid
          items-center
          gap-14
          lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <div>

            <Badge>

              <MessageCircle
                size={14}
              />

              Chat

            </Badge>

            <h3
              className="
              mt-6
              text-4xl
              font-black
              leading-tight
              "
            >
              Built for everyday conversations.
            </h3>

            <p
              className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
              "
            >
              From personal chats to group conversations,
              Spotlight focuses on responsiveness,
              clean design and smooth interactions.
            </p>

            <div
              className="
              mt-10
              grid
              gap-4
              sm:grid-cols-2
              "
            >

              {features.map((feature) => (

                <div
                  key={feature}
                  className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/3
                  px-4
                  py-3
                  "
                >

                  <div
                    className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-400
                    "
                  />

                  <span
                    className="
                    text-sm
                    text-zinc-300
                    "
                  >
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
            flex
            justify-center
            "
          >

            <div
              className="
              relative
              "
            >

              <div
                className="
                absolute
                inset-0
                rounded-full
                bg-emerald-500/15
                blur-[90px]
                "
              />

              <img
                src={chat}
                alt="Spotlight Chat"
                className="
                relative
                w-[280px]
                rounded-[36px]
                border
                border-white/10
                shadow-2xl
                "
              />

            </div>

          </div>

        </div>

      </GlassCard>

    </section>
  );
}