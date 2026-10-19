import {
  AlertTriangle,
  Clock3,
  Database,
  HelpCircle,
  Mail,
  ShieldAlert,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";
import Badge from "../../components/common/Badge";
import Button from "../../components/ui/Button";
import PageWrapper from "../../components/layout/PageWrapper";

const deletedData = [
  "Profile information",
  "Messages",
  "Posts & Stories",
  "Bookmarks",
  "Notes",
  "Notifications",
  "Uploaded media",
];

const faqs = [
  {
    q: "Can I recover my account?",
    a: "No. Once your deletion request is processed, your account and associated data cannot be recovered.",
  },
  {
    q: "How long does deletion take?",
    a: "Most requests are completed within 7 days, although they may finish sooner.",
  },
  {
    q: "Will my authentication account also be removed?",
    a: "Yes. Your Clerk authentication account is permanently deleted along with your MilesSpot account.",
  },
];


export default function DeleteAccount() {
  return (
    <PageWrapper>

      <section className="section">

        <SectionTitle
          eyebrow="Privacy"
          title="Delete Your Account"
          subtitle="You have complete control over your MilesSpot account and personal data."
        />

        {/* Warning */}

        <GlassCard>

          <Badge>

            <AlertTriangle size={14} />

            Permanent Action

          </Badge>

          <h2 className="mt-6 text-3xl font-black">

            Account deletion cannot be undone.

          </h2>

          <p className="mt-5 leading-8 text-zinc-400">

            Once your account is deleted,
            all personal data associated
            with MilesSpot will be permanently
            removed from our servers.

          </p>

        </GlassCard>

      </section>

      {/* Deleted */}

      <section className="section">

        <SectionTitle
          eyebrow="Data"
          title="What will be deleted?"
          subtitle="The following information will be permanently removed."
        />

        <GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">

            {deletedData.map((item) => (

              <div
                key={item}
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

                <Database
                  size={18}
                  className="text-emerald-400"
                />

                {item}

              </div>

            ))}

          </div>

        </GlassCard>

      </section>

      {/* Request */}

      <section className="section">

        <SectionTitle
          eyebrow="Request"
          title="How to request account deletion"
          subtitle="Deleting your account is simple."
        />

        <GlassCard>

          <div className="space-y-6">

            {[
              "Open MilesSpot.",
              "Go to Profile → Settings.",
              "Select Delete Account.",
              "Confirm your identity.",
              "Your deletion request will be processed.",
            ].map((step, index) => (

              <div
                key={step}
                className="
                flex
                gap-5
                "
              >

                <div
                  className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-500
                  font-bold
                  text-black
                  "
                >
                  {index + 1}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {step}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </GlassCard>

      </section>

      {/* FAQ */}

      <section className="section">

        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="space-y-6">

          {faqs.map((faq) => (

            <GlassCard key={faq.q}>

              <div className="flex gap-4">

                <HelpCircle
                  className="text-emerald-400"
                />

                <div>

                  <h3 className="font-semibold">
                    {faq.q}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {faq.a}
                  </p>

                </div>

              </div>

            </GlassCard>

          ))}

        </div>

      </section>

      {/* Contact */}

      <section className="section">

        <GlassCard>

          <div
            className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-center
            md:justify-between
            "
          >

            <div>

              <Badge>

                <Mail size={14} />

                Need Help?

              </Badge>

              <h2 className="mt-5 text-3xl font-black">

                Contact Support

              </h2>

              <p className="mt-4 leading-8 text-zinc-400">

                If you experience any issues deleting
                your account, contact our support team.

              </p>

            </div>

            <Button>

             spotlight.support44@gmail.com

            </Button>

          </div>

        </GlassCard>

      </section>

    </PageWrapper>
  );
}