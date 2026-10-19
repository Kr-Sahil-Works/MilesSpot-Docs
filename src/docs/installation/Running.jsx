import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";
import Badge from "../../components/common/Badge";
import CodeBlock from "../../components/common/CodeBlock";

const startCommand = `npx convex dev

npx expo start`;

const androidCommand = `npx expo run:android`;

const productionCommand = `eas build --platform android`;

export default function Running() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Running"
        title="Run MilesSpot"
        subtitle="Launch the development server, test on Android, and generate production builds."
      />

      <div className="space-y-8">

        {/* Development */}

        <GlassCard>

          <Badge>Step 3</Badge>

          <h3
            className="
            mt-5
            text-2xl
            font-bold
            "
          >
            Start Development Server
          </h3>

          <p
            className="
            mt-3
            leading-7
            text-zinc-400
            "
          >
            Start Convex first, then launch the Expo development server.
          </p>

          <div className="mt-6">

            <CodeBlock language="bash">
              {startCommand}
            </CodeBlock>

          </div>

        </GlassCard>

        {/* Android */}

        <GlassCard>

          <Badge>Step 4</Badge>

          <h3
            className="
            mt-5
            text-2xl
            font-bold
            "
          >
            Run on Android
          </h3>

          <p
            className="
            mt-3
            leading-7
            text-zinc-400
            "
          >
            Connect a physical Android device or start an Android Emulator
            before running this command.
          </p>

          <div className="mt-6">

            <CodeBlock language="bash">
              {androidCommand}
            </CodeBlock>

          </div>

        </GlassCard>

        {/* Production */}

        <GlassCard>

          <Badge>Step 5</Badge>

          <h3
            className="
            mt-5
            text-2xl
            font-bold
            "
          >
            Production Build
          </h3>

          <p
            className="
            mt-3
            leading-7
            text-zinc-400
            "
          >
            Build a production-ready Android application using Expo EAS.
          </p>

          <div className="mt-6">

            <CodeBlock language="bash">
              {productionCommand}
            </CodeBlock>

          </div>

        </GlassCard>

      </div>

    </section>
  );
}