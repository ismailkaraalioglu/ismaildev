import Link from "next/link";
import { SOCIALS } from "@/lib/constants";

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
          {SOCIALS.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              className="group flex flex-row items-center gap-1.5"
              target="_blank"
            >
              <social.icon
                stroke={1}
                size={20}
                className="text-muted-foreground group-hover:text-primary transition"
              />
              <span className="text-muted-foreground group-hover:text-primary text-sm transition">
                {social.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-muted p-2">
        <div className="bg-background flex flex-col rounded-2xl p-6 outline">
          <h2 className="text-3xl">Experience</h2>
          {/* <p className="text-muted-foreground">
            I have <span className="font-semibold">5+ years of experience</span>{" "}
            in software development.
          </p> */}
          <div className="group relative py-4">
            <div className="text-muted-foreground flex items-center justify-between text-xs">
              <span>İstanbul, Türkiye</span> <span>2021 — Present</span>
            </div>
            <div className="mb-1 flex flex-col items-start justify-between gap-2 text-lg text-balance sm:flex-row sm:items-center">
              <div className="font-medium">
                Frontend Developer{" "}
                <span className="text-muted-foreground">at</span> Godot Tech
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base">
              I worked as a Full Stack Developer at 90Pixel for two months,
              after which I accepted an offer from Defter and relocated to
              Montenegro.
            </div>
          </div>
          <div className="bg-muted h-px w-full" />
          <div className="group relative py-4">
            <div className="text-muted-foreground flex items-center justify-between text-xs">
              <span>İstanbul, Türkiye</span> <span>2021 — Present</span>
            </div>
            <div className="mb-1 flex flex-col items-start justify-between gap-2 text-lg text-balance sm:flex-row sm:items-center">
              <div className="font-medium">
                Frontend Developer{" "}
                <span className="text-muted-foreground">at</span> Godot Tech
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base">
              I worked as a Full Stack Developer at 90Pixel for two months,
              after which I accepted an offer from Defter and relocated to
              Montenegro.
            </div>
          </div>
          <div className="group relative py-4">
            <div className="text-muted-foreground flex items-center justify-between text-xs">
              <span>İstanbul, Türkiye</span> <span>2021 — Present</span>
            </div>
            <div className="mb-1 flex flex-col items-start justify-between gap-2 text-lg text-balance sm:flex-row sm:items-center">
              <div className="font-medium">
                Frontend Developer{" "}
                <span className="text-muted-foreground">at</span> Godot Tech
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base">
              I worked as a Full Stack Developer at 90Pixel for two months,
              after which I accepted an offer from Defter and relocated to
              Montenegro.
            </div>
          </div>
          <div className="group relative py-4">
            <div className="text-muted-foreground flex items-center justify-between text-xs">
              <span>İstanbul, Türkiye</span> <span>2021 — Present</span>
            </div>
            <div className="mb-1 flex flex-col items-start justify-between gap-2 text-lg text-balance sm:flex-row sm:items-center">
              <div className="font-medium">
                Frontend Developer{" "}
                <span className="text-muted-foreground">at</span> Godot Tech
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base">
              I worked as a Full Stack Developer at 90Pixel for two months,
              after which I accepted an offer from Defter and relocated to
              Montenegro.
            </div>
          </div>
          <div className="group relative py-4">
            <div className="text-muted-foreground flex items-center justify-between text-xs">
              <span>İstanbul, Türkiye</span> <span>2021 — Present</span>
            </div>
            <div className="mb-1 flex flex-col items-start justify-between gap-2 text-lg text-balance sm:flex-row sm:items-center">
              <div className="font-medium">
                Frontend Developer{" "}
                <span className="text-muted-foreground">at</span> Godot Tech
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base">
              I worked as a Full Stack Developer at 90Pixel for two months,
              after which I accepted an offer from Defter and relocated to
              Montenegro.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
