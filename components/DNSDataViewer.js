"use client";

import { useEffect, useState } from "react";

export default function DNSDataViewer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/vorticity.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="grid grid-cols-[repeat(64,4px)] gap-[1px]">
      {data.flat().map((v, i) => (
        <div
          key={i}
          style={{
            background: `rgb(0, ${Math.max(0, Math.min(255, v * 255))}, 255)`
          }}
          className="w-[4px] h-[4px]"
        />
      ))}
    </div>
  );
}
