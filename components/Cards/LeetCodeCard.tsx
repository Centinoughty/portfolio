import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import NumberAnimation from '@/util/NumberAnimation'

interface LeetCodeCardData {
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

export default function LeetCodeCard() {
  const [data, setData] = useState<LeetCodeCardData>({
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });

  async function getData() {
    try {
      const response = await fetch(
        "https://leetcode-stats-api.herokuapp.com/Centinoughty"
      );
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="px-2 py-1 w-[250px] font-mont flex flex-col gap-2 bg-black rounded-md">
        <div className="flex justify-between">
          <div></div>
          <h2 className="text-yellow-500">LeetCode</h2>
          <a href="https://leetcode.com/Centinoughty" target="_blank" className="my-auto"><FaExternalLinkAlt fill="white" size={10} /></a>
        </div>

        <div className="flex justify-evenly text-center text-white">
          <div className="flex flex-col gap-1">
            <h4>Easy</h4>
            <div><NumberAnimation delay={200} n={data.easySolved} /></div>
          </div>
          <div className="flex flex-col gap-1">
            <h4>Medium</h4>
            <div><NumberAnimation delay={200} n={data.mediumSolved} /></div>
          </div>
          <div className="flex flex-col gap-1">
            <h4>Hard</h4>
            <div><NumberAnimation delay={200} n={data.hardSolved} /></div>
          </div>
        </div>
      </div>
    </>
  );
}
