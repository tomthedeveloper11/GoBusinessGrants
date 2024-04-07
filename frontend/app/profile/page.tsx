"use client";

import Navbar from "@/components/navbar/index";
import { useEffect, useState } from "react";

import EligibilityCard from "@/components/ui/EligibilityCard";

export default function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/recommendations", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stage: "Startups",
        eligibilities: [
          "Registered and operating in Singapore",
          "Registered with ACRA",
          ">=30% local shareholdings",
          "<=100 million annual sales turnover",
          "<=200 group employment size",
        ],
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center py-8 max-w-[120rem]">
      <Navbar />
      <div className="w-full bg-[#047E8A] px-24 py-12">
        <sub className="text-white font-medium"> PROFILE </sub>
        <h1 className="text-4xl mt-7 font-bold text-white">
          Best Company PTE LTD
        </h1>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="mt-8 text-3xl font-semibold">Eligibility Criterias</h1>
        </div>
        <div className="w-full flex flex-row flex-wrap space-x-3">
          <EligibilityCard>
            Registered and operating in Singapore
          </EligibilityCard>

          <EligibilityCard>Registered with ACRA</EligibilityCard>
          <EligibilityCard>&gt;=30% local shareholdings</EligibilityCard>
          <EligibilityCard>
            &lt;=100 million annual sales turnover
          </EligibilityCard>
          <EligibilityCard>&lt;=200 group employment size</EligibilityCard>
          <EligibilityCard>Registered with ACRA</EligibilityCard>
          <EligibilityCard>&gt;=30% local shareholdings</EligibilityCard>
          <EligibilityCard>
            &lt;=100 million annual sales turnover
          </EligibilityCard>
          <EligibilityCard>&lt;=200 group employment size</EligibilityCard>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2 px-24 mt-12">
        <h1 className="mt-8 text-3xl font-semibold text-[#047E8A]">
          Recommended Grants
        </h1>
        {data &&
          data.map((x: any, index) => {
            return <EligibilityCard key={index}>{x[0].name}</EligibilityCard>;
          })}
      </div>
    </main>
  );
}
