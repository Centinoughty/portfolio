import { useEffect, useState } from "react";
import NumberAnimation from "@/util/NumberAnimation";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CodeForcesSubmission {
  verdict: string;
}

export default function CodeForcesCard() {
  const [solvedCount, setSolvedCount] = useState(0);

  async function getData() {
    try {
      const response = await fetch(
        "https://codeforces.com/api/user.status?handle=Centinoughty"
      );
      const resData = await response.json();
      if (resData.status === "OK") {
        const submissions: CodeForcesSubmission[] = resData.result;
        const solvedProblems = submissions.filter(
          (submission) => submission.verdict === "OK"
        );
        setSolvedCount(solvedProblems.length - 1);
      }
    } catch (error) {
      setSolvedCount(27);
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
          <h2 className="text-yellow-500">CodeForces</h2>
          <a
            href="https://codeforces.com/profile/Centinoughty"
            target="_blank"
            className="my-auto"
          >
            <FaExternalLinkAlt fill="white" size={10} />
          </a>
        </div>
        <div className="flex justify-evenly text-center text-white">
          <div className="flex flex-col gap-1">
            <h4>Solved Problems</h4>
            <div>
              <NumberAnimation delay={200} n={solvedCount} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
