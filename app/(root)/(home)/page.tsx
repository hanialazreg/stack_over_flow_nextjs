import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import LocalSearch from "@/components/shared/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import { getQuestion } from "@/lib/actions/question.action";

export default async function Home() {
  const result = await getQuestion({});

  // const questions = [
  //   {
  //     _id: "1",
  //     title: "Cascading delete in SQLAlchemy?",
  //     tags: [
  //       { _id: "1", name: "Python" },
  //       { _id: "2", name: "React" },
  //     ],
  //     author: {
  //       _id: "1",
  //       name: "Joe Dow",
  //       picture: "https://example.com/picture1.jpg",
  //     },
  //     upvotes: 20,
  //     views: 100,
  //     answers: [],
  //     createdAt: new Date("2021-07-11T12:00:00.000Z"),
  //   },
  //   {
  //     _id: "2",
  //     title: "How to center a div?",
  //     tags: [
  //       { _id: "1", name: "Python" },
  //       { _id: "2", name: "React" },
  //     ],
  //     author: {
  //       _id: "1",
  //       name: "Joe Dow",
  //       picture: "https://example.com/picture1.jpg",
  //     },
  //     upvotes: 20,
  //     views: 100,
  //     answers: [],
  //     createdAt: new Date("2021-07-11T12:00:00.000Z"),
  //   },
  // ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row ">
        <h1>ALL Questions</h1>

        <Link href="/ask-question">
          <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            As a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconposition="left"
          imgsrc="/assets/icons/search.svg"
          placholder="searh for Questions "
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] "
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              upvotes={question.upvotes}
              author={question.author}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="there is no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion .our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
