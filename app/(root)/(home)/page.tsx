import HomeFilter from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "Cascadibg Delete in Sql",
    tags: [
      { _id: 1, title: "sql" },
      { _id: 2, title: "python" },
    ],
    author: "Mukesh",
    upvotes: 10,
    viewsL: 100,
    anwers: 2,
    createAt: "2021-09-01T12:00:00.000Z",
  },
  {
    _id: 2,
    title: "Cascadibg Delete in Sql",
    tags: [
      { _id: 1, title: "sql" },
      { _id: 2, title: "python" },
    ],
    author: "Mukesh",
    upvotes: 10,
    viewsL: 100,
    anwers: 2,
    createAt: "2021-09-01T12:00:00.000Z",
  },
  {
    _id: 3,
    title: "Cascadibg Delete in Sql",
    tags: [
      { _id: 1, title: "sql" },
      { _id: 2, title: "python" },
    ],
    author: "Mukesh",
    upvotes: 10,
    viewsL: 100,
    anwers: 2,
    createAt: "2021-09-01T12:00:00.000Z",
  },
  {
    _id: 4,
    title: "Cascadibg Delete in Sql",
    tags: [
      { _id: 1, title: "sql" },
      { _id: 2, title: "python" },
    ],
    author: "Mukesh",
    upvotes: 10,
    viewsL: 100,
    anwers: 2,
    createAt: "2021-09-01T12:00:00.000Z",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
          placeholder="Search for questions.."
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* looping through questions  */}

        {questions.length > 10 ? (
          questions.map((question) => "QuestionCard")
        ) : (
          <NoResult
            title=" There's no question to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle=" Ask a Question"
          />
        )}
      </div>
    </>
  );
}
