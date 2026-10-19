import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

import reactLogo from "../../assets/images/reactlogo.png";
import expoLogo from "../../assets/images/expo.png";
import convexLogo from "../../assets/images/convex.png";
import clerkLogo from "../../assets/images/clerk.png";
import nodeLogo from "../../assets/images/Nodejs.png";
import gitLogo from "../../assets/images/git.png";
import androidLogo from "../../assets/images/androidstudio.png";
import vscodeLogo from "../../assets/images/vs.png";


const requirements = [
  {
    title: "React Native",
    logo: reactLogo,
    version: "0.74+",
  },
  {
    title: "Expo SDK",
    logo: expoLogo,
    version: "51",
  },
  {
    title: "Convex",
    logo: convexLogo,
    version: "Latest",
  },
  {
    title: "Clerk",
    logo: clerkLogo,
    version: "Latest",
  },
  {
    title: "Node.js",
    logo: nodeLogo,
    version: "20+",
  },
  {
    title: "Git",
    logo: gitLogo,
    version: "Latest",
  },
  {
    title: "Android Studio",
    logo: androidLogo,
    version: "Latest",
  },
  {
    title: "VS Code",
    logo: vscodeLogo,
    version: "Latest",
  },
];

export default function Requirements() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Installation"
        title="Before You Begin"
        subtitle="Install these tools before setting up MilesSpot. They are required for local development and production builds."
      />

      <div
        className="
        grid
        gap-6
        lg:grid-cols-2
        "
      >
        {requirements.map((item) => (
          <GlassCard
            key={item.title}
            className="
            flex
            items-start
            gap-5
            transition-all
            duration-300
            hover:-translate-y-1
            "
          >
            {typeof item.logo === "string" ? (
           <div
    className="
    flex
    h-16
    w-16
    shrink-0
    items-center
    justify-center
    rounded-2xl
    bg-white/4
    "
>
    <img
        src={item.logo}
        alt={item.title}
        className="h-10 w-10 object-contain"
    />
</div>
            ) : (
              <img
                src={item.logo}
                alt={item.title}
                className="
                h-14
                w-14
                object-contain
                "
              />
            )}

            <div className="min-w-0">

              <div
                className="
                flex
                flex-wrap
                items-center
                gap-3
                "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  {item.title}
                </h3>

                <span
                  className="
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/10
                  px-3
                  py-1
                  text-xs
                  text-emerald-300
                  "
                >
                  {item.version}
                </span>
              </div>

              <p
                className="
                mt-3
                leading-7
                text-zinc-400
                "
              >
                {item.description}
              </p>

            </div>

          </GlassCard>
        ))}
      </div>

    </section>
  );
}