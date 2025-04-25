import React from "react";
import Link from "next/link";
import Image from "next/image";

const Avatar = () => {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/images/avatar.png"
        alt="Avatar"
        width={140}
        height={140}
        priority
        className="size-7"
      />
    </Link>
  );
};

export default Avatar;
