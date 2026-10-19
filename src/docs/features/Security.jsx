import {
  Lock,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import SectionTitle from "../../components/common/SectionTitle";

import clerk from "../../assets/images/clerk.png";

export default function Security() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Security"
        title="Privacy & Authentication"
        subtitle="Secure authentication powered by Clerk with modern best practices."
      />

      <GlassCard className="overflow-hidden p-8 md:p-12">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <Badge>

              <Lock size={14} />

              Security

            </Badge>

            <h3 className="mt-6 text-4xl font-black">
              Your privacy comes first.
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              MilesSpot uses Clerk Authentication,
              secure sessions and protected routes
              to keep user accounts safe.
            </p>

          </div>

          <div className="flex justify-center">

            <img
              src={clerk}
              alt="Clerk"
              className="w-52"
            />

          </div>

        </div>

      </GlassCard>

      <GlassCard className="mt-10">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-2xl font-bold">
              Ready to manage your account?
            </h3>

            <p className="mt-3 text-zinc-400">
              Learn how to permanently delete your MilesSpot account.
            </p>

          </div>

          <Link
            to="/delete-account"
            className="
            inline-flex
            items-center
            gap-2
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
            Delete Account

            <ArrowRight size={18} />

          </Link>

        </div>

      </GlassCard>

    </section>
  );
}