import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import React from "react";

const Header = () => {
 

  return (
    <div className="bg-gray-600 text-neutral-100">
      <div className="container flex justify-evenly">
        <Link href="/">Home</Link>
        <div className="gap-5 flex justify-center text-center">
          <Link href="/sign-up">sign-up</Link>
          <Link href="/sign-in">sign-in</Link>
          <UserButton/>
        </div>
      </div>
    </div>
  );
};

export default Header;
