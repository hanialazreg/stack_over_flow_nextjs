import LocalSearch from "@/components/shared/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
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
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearch
          route="/"
          iconposition="left"
          imgsrc="/assets/icons/search.svg"
          placholder="searh for Questions "
          otherClasses="flex-1"
        />
        Filters
      </div>
    </>
  );
}
