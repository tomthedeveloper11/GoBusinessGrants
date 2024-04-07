"use client";

import Image from "next/image";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { rawData } from "./data";
import Navbar from "@/components/navbar/index";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [data, setData] = useState(rawData);
  const [companyStage, setCompanyStage] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [businessNeed, setBusinessNeed] = useState("all");
  const [initialRender, setInitialRender] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const input = formData.get("input");
    console.log("clicked");

    await fetch("http://127.0.0.1:8000/search", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input,
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

    console.log("done");
  }

  useEffect(() => {
    if (!initialRender) {
      setData(
        rawData.filter((currentData) => {
          const filterByCompanyStage =
            companyStage === "all" || currentData.stage.includes(companyStage);
          const filterByIndustry =
            industry === "all" || currentData.industry.includes(industry);
          const filterByBusinessNeed =
            businessNeed === "all" ||
            currentData.businessNeeds === businessNeed;

          return (
            filterByCompanyStage && filterByIndustry && filterByBusinessNeed
          );
        })
      );
      console.log(companyStage, industry, businessNeed);
    } else {
      // If it's the initial render, update initialRender state
      setInitialRender(false);
    }
  }, [companyStage, industry, businessNeed]); // Add companyType as a dependency to useEffect

  return (
    <main className="flex min-h-screen w-screen flex-col items-center py-8 max-w-[120rem]">
      <Navbar />
      <div className="w-full bg-[#047E8A] px-24 py-12">
        <sub className="text-white font-medium">
          HOME / RUN AND GROW / GOVERNMENT ASSISTANCE / GRANTS
        </sub>
        <h1 className="text-4xl mt-7 font-bold text-white">Grants</h1>
      </div>
      <div className="w-full flex flex-col gap-y-2 px-24 mt-12">
        <Image
          src="/pic.jpeg"
          alt="picture"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <h1 className="mt-8 text-3xl font-semibold text-[#047E8A]">
          See what grants can help your business
        </h1>
        <h2 className="text-base">
          Simply fill in the below about your business to see what grants are
          available for your needs
        </h2>
      </div>
      <div className="w-full mx-auto mt-10 px-24">
        <Tabs defaultValue="filter">
          <TabsList className="mb-4">
            <TabsTrigger value="filter">Search by guide</TabsTrigger>
            <TabsTrigger value="input">Search by text</TabsTrigger>
          </TabsList>
          <TabsContent value="filter">
            <div className="flex gap-x-4 mb-10">
              <p>My business is a </p>
              <select
                name="stages"
                onChange={(e) => setCompanyStage(e.target.value)}
                className="border border-zinc-400 rounded-md px-1 opacity-60"
              >
                <option value="all" disabled>
                  Select stage
                </option>
                <option value="Startup">Startup</option>
                <option value="SME">SME</option>
                <option value="LLE">LLE</option>
              </select>

              <p>in the industry of</p>

              <select
                name="industry"
                onChange={(e) => setIndustry(e.target.value)}
                className="border border-zinc-400 rounded-md px-1 opacity-60"
              >
                <option value="all">Select industry</option>
                <option value="Non-specific">Non-specific</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Career Services">Career Services</option>
                <option value="Environment">Environment</option>
              </select>

              <p>looking to</p>
              <select
                name="businessNeed"
                onChange={(e) => setBusinessNeed(e.target.value)}
                className="border border-zinc-400 rounded-md px-1 opacity-60"
              >
                <option value="all">Select business need</option>
                <option value="Digitise with Technology">
                  Digitise with Technology
                </option>
                <option value="Expand Overseas, Develop Brand Awareness">
                  Expand Overseas, Develop Brand Awareness
                </option>
                <option value="Expand Overseas">Expand Overseas</option>
                <option value="Conduct R&D">Conduct R&D</option>
                <option value="Develop Brand Awareness">
                  Develop Brand Awareness
                </option>
                <option value="Sustain Through COVID-19">
                  Sustain Through COVID-19
                </option>
              </select>
            </div>
          </TabsContent>
          <TabsContent value="input">
            <form
              action="POST"
              onSubmit={handleSubmit}
              className="flex gap-x-3 mb-8"
            >
              <Textarea
                placeholder="I am a SME business owner looking to expand overseas."
                name="input"
              />
              <Button type="submit">Submit</Button>
            </form>
          </TabsContent>
        </Tabs>

        <Separator />

        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
