import { Fragment } from "react";
import Link from "next/link";
import { EXPERIENCES, SOCIALS } from "@/lib/constants";
import ExperienceCard from "@/components/experience-card";

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
                stroke={1.5}
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
          <p className="text-muted-foreground">
            I have <span className="font-semibold">5+ years of experience</span>{" "}
            building modern, user-focused web and mobile applications.
          </p>
          {EXPERIENCES.map((exp, index) => (
            <Fragment key={exp.id}>
              <ExperienceCard experience={exp} />
              {index !== EXPERIENCES.length - 1 && (
                <div className="bg-muted h-px w-full" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
