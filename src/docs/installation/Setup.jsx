import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";
import CodeBlock from "../../components/common/CodeBlock";
import Badge from "../../components/common/Badge";

const cloneCommand =
`git clone https://github.com/yourusername/spotlight.git

cd MilesSpot

npm install`;

const envCommand =
`EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key

EXPO_PUBLIC_CONVEX_URL=https://xxxx.convex.cloud`;

export default function Setup() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Setup"
        title="Install MilesSpot in under 5 minutes"
        subtitle="Clone the repository, install dependencies and configure your environment variables."
      />

      <div className="space-y-8">

        {/* Clone */}

        <GlassCard>

          <Badge>Step 1</Badge>

          <h3
            className="
            mt-5
            text-2xl
            font-bold
            "
          >
            Clone Repository
          </h3>

          <p
            className="
            mt-3
            leading-7
            text-zinc-400
            "
          >
            Clone the MilesSpot repository from GitHub and
            install all required packages.
          </p>

          <div className="mt-6">

          <CodeBlock language="bash">
  {cloneCommand}
</CodeBlock>

          </div>

        </GlassCard>

        {/* Environment */}

        <GlassCard>

          <Badge>Step 2</Badge>

          <h3
            className="
            mt-5
            text-2xl
            font-bold
            "
          >
            Configure Environment Variables
          </h3>

          <p
            className="
            mt-3
            leading-7
            text-zinc-400
            "
          >
            Create a <code>.env.local</code> file in the root
            directory and add your Clerk and Convex keys.
          </p>

          <div className="mt-6">

        <CodeBlock language="env">
  {envCommand}
</CodeBlock>

          </div>

        </GlassCard>

      </div>

    </section>
  );
}