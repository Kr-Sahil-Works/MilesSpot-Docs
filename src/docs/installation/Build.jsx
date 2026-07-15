import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";
import Callout from "../../components/common/Callout";

const issues = [
  "Metro bundler won't start",
  "Convex connection failed",
  "Clerk authentication error",
  "Android build failed",
  "EAS build unsuccessful",
];

export default function Build() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Troubleshooting"
        title="Build & Common Issues"
        subtitle="If something doesn't work, these are the most common problems developers encounter while setting up Spotlight."
      />

      <GlassCard>

        <div className="space-y-5">

          {issues.map((issue) => (
            <div
              key={issue}
              className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/5
              bg-white/3
              px-5
              py-4
              "
            >
              <AlertTriangle
                size={20}
                className="text-yellow-400"
              />

              <span className="text-zinc-300">
                {issue}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-8">

          <Callout>

            If you're still having issues, ensure you're using the
            recommended Node.js version, Expo SDK and have configured
            Clerk and Convex correctly before running the project.

          </Callout>

        </div>

      </GlassCard>

      {/* Continue */}

      <GlassCard className="mt-10">

        <div
          className="
          flex
          flex-col
          items-start
          justify-between
          gap-6
          md:flex-row
          md:items-center
          "
        >

          <div>

            <div className="flex items-center gap-3">

              <Sparkles
                size={20}
                className="text-emerald-400"
              />

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                Continue to Features
              </h3>

            </div>

            <p
              className="
              mt-3
              max-w-xl
              leading-7
              text-zinc-400
              "
            >
              Explore Spotlight's messaging system,
              offline support, themes, posts,
              notifications and every major feature.
            </p>

          </div>

          <Link
            to="/features"
            className="
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-emerald-500
            px-6
            py-3
            font-semibold
            text-black
            transition
            hover:bg-emerald-400
            "
          >
            Explore Features

            <ArrowRight size={18} />

          </Link>

        </div>

      </GlassCard>

    </section>
  );
}