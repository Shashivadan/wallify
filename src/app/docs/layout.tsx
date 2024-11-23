import { source } from "@/lib/source";
import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions, linkItems } from "@/app/layout.config";
import { Slot } from "@radix-ui/react-slot";
import DocNavBar from "@/components/doc-navbar";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [linkItems[linkItems.length - 1]],
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;
        return {
          ...option,
          icon: (
            <Slot
              className="bg-gradient-to-t from-fd-background/80 p-1 [&_svg]:size-5"
              style={{
                color: `hsl(var(--${meta.file.dirname}-color))`,
                backgroundColor: `hsl(var(--${meta.file.dirname}-color)/.3)`,
              }}
            >
              {node.icon}
            </Slot>
          ),
        };
      },
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 h-[64rem] max-h-screen"
          style={{
            backgroundImage:
              "radial-gradient(49.63% 57.02% at 58.99% -7.2%, hsl(var(--primary)/0.1) 39.4%, transparent 100%)",
          }}
        >
          <div className="relative w-full h-full">
            <svg
              width="790"
              height="640"
              viewBox="0 0 790 718"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 -translate-x-1/2 -top-16 pl-48"
              aria-hidden="true"
            >
              <mask
                id="mask-dark"
                style={{
                  maskType: "alpha",
                }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="-143"
                width="936"
                height="861"
              >
                <ellipse
                  cx="468.373"
                  cy="287.536"
                  rx="467.627"
                  ry="430.464"
                  fill="url(#radial-dark)"
                />
              </mask>
              <g mask="url(#mask-dark)" className="fill-primary">
                <path
                  d="M506.419 281.855L446.417 297.931V359.885L506.419 343.71V281.855Z"
                  fillOpacity="0.05"
                />
                {/* Rest of the paths remain the same */}
              </g>
              <defs>
                <radialGradient
                  id="radial-dark"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(468.373 287.536) rotate(90) scale(430.464 467.627)"
                >
                  <stop stopColor="#D9D9D9" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <DocNavBar />
        <DocsLayout {...docsOptions}>{children}</DocsLayout>
      </div>
    </main>
  );
}
