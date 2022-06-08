import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Personnel from "./pages/Personnel";
import Talk from "./pages/Talk";
import TimeTable from "./pages/TimeTable";

export default function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 새빈 로고 눌렀을 때 */}
        <Route path="/talk" element={<Talk />} /> {/* 갤러리 소개 눌렀을 때 */}
        {/* 전시 소개 눌렀을 때 */}
        <Route path="/introduction" element={<Introduction />} />
        {/* VIP 경매 안내 눌렀을 때 */}
        <Route path="/timetable" element={<TimeTable />} />
        {/* 구성원 소개 눌렀을 때 */}
        <Route path="/personnel" element={<Personnel />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
