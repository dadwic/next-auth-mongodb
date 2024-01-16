import * as React from "react";
import Table from "@/components/Table";
import AppWrapper from "@/components/AppWrapper";

export const metadata = {
  title: "Table",
};

export default async function TablePage() {
  return (
    <AppWrapper>
      <Table />
    </AppWrapper>
  );
}
