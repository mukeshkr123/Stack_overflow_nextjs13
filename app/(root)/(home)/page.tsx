import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading Delete in SQL",
    tags: [
      { _id: "1", title: "sql" },
      { _id: "2", title: "python" },
    ],
    author: {
      _id: "1",
      name: "Mukesh",
      picture: "mukesh.jpg",
    },
    upvotes: 50000,
    views: 10000002,
    answers: [{}],
    createdAt: new Date("2023-11-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Another Question",
    tags: [
      { _id: "3", title: "javascript" },
      { _id: "4", title: "typescript" },
    ],
    author: {
      _id: "2",
      name: "Alice",
      picture: "alice.jpg",
    },
    upvotes: 100005,
    views: 200000,
    answers: [],
    createdAt: new Date("2021-10-15T10:30:00.000Z"),
  },
  {
    _id: "3",
    title: "Web Development",
    tags: [
      { _id: "5", title: "html" },
      { _id: "6", title: "css" },
    ],
    author: {
      _id: "3",
      name: "Bob",
      picture: "bob.jpg",
    },
    upvotes: 5,
    views: 50,
    answers: [{}],
    createdAt: new Date("2021-11-20T08:45:00.000Z"),
  },
  {
    _id: "4",
    title: "Database Design",
    tags: [
      { _id: "7", title: "database" },
      { _id: "8", title: "design" },
    ],
    author: {
      _id: "4",
      name: "Carol",
      picture: "carol.jpg",
    },
    upvotes: 8,
    views: 80,
    answers: [{}],
    createdAt: new Date("2022-01-05T14:15:00.000Z"),
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

        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
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
