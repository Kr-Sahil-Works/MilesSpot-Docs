import { Images } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import SectionTitle from "../../components/common/SectionTitle";

import feed from "../../assets/screenshots/feed.png";

const items = [
  {
    title: "Photo Sharing",
    text: "Upload high-quality images with optimized storage.",
  },
  {
    title: "Collections",
    text: "Organize memorable posts into collections.",
  },
  {
    title: "Bookmarks",
    text: "Save content for quick access later.",
  },
  {
    title: "Offline Cache",
    text: "Recently viewed posts remain available offline.",
  },
];

export default function Posts() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Social"
        title="Share Moments"
        subtitle="Create, discover and revisit memories with a premium post experience."
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

          <div
            className="
            order-2
            lg:order-1
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
                src={feed}
                alt="Posts"
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

          {/* RIGHT */}

          <div
            className="
            order-1
            lg:order-2
            "
          >

            <Badge>

              <Images
                size={14}
              />

              Posts

            </Badge>

            <h3
              className="
              mt-6
              text-4xl
              font-black
              "
            >
              Express yourself beautifully.
            </h3>

            <p
              className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
              "
            >
              Spotlight combines modern social sharing,
              clean layouts and optimized media delivery
              for a premium experience.
            </p>

            <div
              className="
              mt-10
              grid
              gap-5
              "
            >

              {items.map((item) => (

                <div
                  key={item.title}
                  className="
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/3
                  p-5
                  "
                >

                  <h4
                    className="
                    font-semibold
                    text-white
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                    mt-2
                    text-zinc-400
                    "
                  >
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </GlassCard>

    </section>
  );
}