import { useRouter } from "next/router";

const Question = () => {
  const router = useRouter();
  return <div>Question: {router.query.slug}</div>;
};

export default Question;
