import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavItem = ({ title, apiParam }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Suspense>
      <Link
        href={`/?genre=${apiParam}`}
        className={`hover:text-amber-500 font-semibold ${
          genre === apiParam
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </Suspense>
  );
};

export default NavItem;
