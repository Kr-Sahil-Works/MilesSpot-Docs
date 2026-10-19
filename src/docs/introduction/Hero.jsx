import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import Button from "../../components/ui/Button";
import Logo from "../../components/common/Logo";
import PlayStoreButton from "../../components/ui/PlayStoreButton";

import { hero, techStack } from "../../content/introduction";

import feed from "../../assets/screenshots/feed.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
          absolute
          -left-36
          top-0
          h-105
          w-105
          rounded-full
          bg-emerald-500/12
          blur-[170px]
          "
        />

        <div
          className="
          absolute
          -right-30
          top-28
          h-85
          w-85
          rounded-full
          bg-green-400/10
          blur-[170px]
          "
        />

      </div>

      <GlassCard
        className="
        relative
        overflow-hidden
        px-7
        py-10
        md:px-12
        md:py-14
        "
      >

        {/* Glass Reflection */}

        <div
          className="
          pointer-events-none
          absolute
          inset-0
          bg-linear-to-br
          from-white/4.5
          via-transparent
          to-transparent
          "
        />

        <div
          className="
          grid
          items-center
          gap-16
          lg:grid-cols-[1.2fr_.8fr]
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .45,
            }}
          >

            <Logo showText />

            <div className="mt-10">

              <Badge>
                🚀 {hero.badge}
              </Badge>

            </div>

            <h1
              className="
              mt-6
             max-w-full
     
              font-black
              leading-[1.05]
              tracking-tight
             text-4xl
sm:text-5xl
lg:text-6xl
2xl:text-7xl
              "
            >
              {hero.title}
            </h1>

            <p
              className="
              mt-8
              max-w-2xl
              text-base
sm:text-lg
              leading-8
              text-zinc-400
              "
            >
              {hero.subtitle}
            </p>

            {/* CTA */}

            <div
              className="
              mt-10
              flex
              flex-wrap
              gap-4
              "
            >

              <Link to="/installation">

              </Link>

              <Link to="/features">

                <Button
                  variant="secondary"
                  className="m"
                >
                  Explore Features
                </Button>

                <PlayStoreButton />

              </Link>

            </div>

            {/* Tech Stack */}

            <div
              className="
              mt-12
              flex
              flex-wrap
              gap-3
              "
            >

              {techStack.map((item) => (

               <Badge
  key={item}
  className="
  border-emerald-500/20
  bg-emerald-500/10
  text-emerald-300
  hover:bg-emerald-500/15
  transition-colors
  duration-200
  "
>
  {item}
</Badge>

              ))}

            </div>

          </motion.div>

                 {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .6,
              delay: .15,
            }}
            className="
            relative
            mx-auto
            flex
            w-full
            justify-center
            "
          >

            {/* Glow */}

            <div
              className="
              absolute
              top-1/2
              h-95
              w-95
              -translate-y-1/2
              rounded-full
              bg-emerald-500/15
              blur-[120px]
              "
            />

            {/* Floating Phone */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -.6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <div
                className="
                absolute
                inset-0
                rounded-[42px]
                bg-white/10
                blur-2xl
                "
              />

              <div
                className="
                glass
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-white/10
                p-3
                shadow-[0_35px_70px_rgba(0,0,0,.45)]
                "
              >

                <img
                  src={feed}
                  alt="MilesSpot Feed"
                className="
w-64
sm:w-72
lg:w-64
xl:w-72
2xl:w-80
rounded-[30px]
object-cover
"
                />

                {/* Reflection */}

                <div
                  className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-br
                  from-white/20
                  via-transparent
                  to-transparent
                  "
                />

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Stats */}

        <div
          className="
          mt-16
          grid
gap-8
2xl:grid-cols-2
          border-t
          border-white/6
          pt-10
          md:grid-cols-4
          "
        >

          {[
            {
              value: "40+",
              label: "Major Features",
            },
            {
              value: "104",
              label: "Chat Themes",
            },
            {
              value: "Offline",
              label: "MMKV Cache",
            },
            {
              value: "Expo",
              label: "SDK 51",
            },
          ].map((item) => (
            <div key={item.label}>

              <h3
                className="
                text-3xl
                font-black
                text-white
                "
              >
                {item.value}
              </h3>

              <p
                className="
                mt-2
                text-sm
                text-zinc-500
                "
              >
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </GlassCard>

    </section>
  );
}   