import { Palette } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import SectionTitle from "../../components/common/SectionTitle";

import themes from "../../assets/screenshots/themes.png";

const categories = [
  "AMOLED",
  "Nature",
  "Glass",
  "Gradient",
  "Minimal",
  "Material",
  "Neon",
  "Classic",
];

export default function Themes() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Customization"
        title="104 Beautiful Chat Themes"
        subtitle="Personalize every conversation with premium wallpapers and carefully crafted color palettes."
      />

      <GlassCard className="overflow-hidden p-8 md:p-12">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div className="order-2 lg:order-1 flex justify-center">

            <img
              src={themes}
              alt="Themes"
              className="
              w-[280px]
              rounded-[36px]
              border
              border-white/10
              shadow-2xl
              "
            />

          </div>

          {/* RIGHT */}

          <div className="order-1 lg:order-2">

            <Badge>

              <Palette size={14} />

              Themes

            </Badge>

            <h3 className="mt-6 text-4xl font-black">
              Make every chat your own.
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Choose from more than one hundred professionally designed
              themes ranging from AMOLED black to vibrant gradients.
            </p>

            <div
              className="
              mt-10
              grid
              grid-cols-2
              gap-3
              "
            >

              {categories.map((item) => (

                <div
                  key={item}
                  className="
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/3
                  px-4
                  py-3
                  text-center
                  "
                >
                  {item}
                </div>

              ))}

            </div>

            <div
              className="
              mt-8
              rounded-2xl
              bg-emerald-500/10
              border
              border-emerald-500/20
              p-5
              "
            >

              <h4 className="font-semibold text-emerald-300">
                104 Premium Themes
              </h4>

              <p className="mt-2 text-zinc-400">
                Optimized WEBP wallpapers with AMOLED support and smooth
                performance on all devices.
              </p>

            </div>

          </div>

        </div>

      </GlassCard>

    </section>
  );
}