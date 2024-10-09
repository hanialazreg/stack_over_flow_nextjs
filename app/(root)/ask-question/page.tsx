import Question from "@/components/forms/Question";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";

const AskQuestion = async () => {
  const { userId } = auth();

  console.log(userId);
  if (!userId) {
    redirect("/sign-in");
  }
  // const userId = "user_2mzXdqozt4Bhj5rrfMsqsPjchV4";

  const mongoUser = await getUserById({ userId });
  const mongoUserId = mongoUser?._id ? mongoUser._id.toString() : "";

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default AskQuestion;
