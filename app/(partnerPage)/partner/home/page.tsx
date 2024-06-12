import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function homepage() {
  return (
    <div>
      Partner Homepage
      <Link href="/partner/hotel-create">
        <Button type="primary">Create Hotel</Button>
      </Link>
    </div>
  );
}
