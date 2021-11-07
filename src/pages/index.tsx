import React from "react"
import { Content } from "../components/Content"
import { SideBar } from "../components/SideBar"


export function IndexPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />
    </div>
  );
}