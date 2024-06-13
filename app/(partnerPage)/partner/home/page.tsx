"use client";

import withAuth from "@/components/withAuth";
import { Button } from "antd";
import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      Partner Homepage
      <Link href="/partner/hotel-create">
        <Button type="primary">Create Hotel</Button>
      </Link>
    </div>
  );
};

Homepage.displayName = "PartnerPage";

export default withAuth(Homepage, "PARTNER");
