import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "light" ? "bg-gray-50" : "bg-slate-800"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.backend && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Backend:</h2>
                        <ul className="list-disc">
                          {resume.backend.map((value, index) => (
                              <span key={index} className="ml-4 py-2">
                                {value}
                              </span>
                          ))}
                        </ul>
                      </div>
                  )}

                  {resume.frontend && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">FrontEnd:</h2>
                        <ul className="list-disc">
                          {resume.frontend.map((value, index) => (
                          <span key={index} className="ml-4 py-2">
                            {value}
                          </span>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.cicd && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">CI/CD:</h2>
                      <ul className="list-disc">
                        {resume.cicd.map((value, index) => (
                          <span key={index} className="ml-4 py-2">
                            {value}
                          </span>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.dbmsAndDataPipelines && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">DBMS and Data Pipelines:</h2>
                        <ul className="list-disc">
                          {resume.cicd.map((value, index) => (
                              <span key={index} className="ml-4 py-2">
                            {value}
                          </span>
                          ))}
                        </ul>
                      </div>
                  )}

                  {resume.testingFrameWorks && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Testing Frameworks:</h2>
                        <ul className="list-disc">
                          {resume.testingFrameWorks.map((value, index) => (
                              <span key={index} className="ml-4 py-2">
                            {value}
                          </span>
                          ))}
                        </ul>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
