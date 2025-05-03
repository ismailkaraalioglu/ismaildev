import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6 p-8">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          İsmail Karaalioğlu
          <span className="text-muted-foreground block text-3xl font-extralight text-balance sm:text-4xl">
            Frontend & Mobile Developer
          </span>
        </h1>

        <p className="text-muted-foreground text-balance">
          I&apos;m a Frontend and Mobile Developer building modern,
          high-performance apps with React, Next.js, React Native, and SwiftUI.
          I transform complex ideas into seamless, scalable products— from
          e-commerce to mobile platforms.
        </p>

        <div className="flex flex-row items-center gap-6">
          <Link
            href="https://x.com/ismailldev"
            className="group flex flex-row items-center gap-1.5"
            target="_blank"
          >
            <IconBrandX
              stroke={1}
              size={20}
              className="text-muted-foreground group-hover:text-primary transition"
            />
            <span className="text-muted-foreground group-hover:text-primary text-sm transition">
              1.242 followers
            </span>
          </Link>

          <Link
            href="https://github.com/ismailkaraalioglu"
            className="group flex flex-row items-center gap-1.5"
            target="_blank"
          >
            <IconBrandGithub
              stroke={1}
              size={20}
              className="text-muted-foreground group-hover:text-primary transition"
            />
            <span className="text-muted-foreground group-hover:text-primary text-sm transition">
              175 followers
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-8">
        <h2 className="text-3xl">Career</h2>
        <p className="text-muted-foreground">
          I have <span className="font-semibold">5+ years of experience</span>{" "}
          in software development.
        </p>
      </div>
    </>
  );
}
