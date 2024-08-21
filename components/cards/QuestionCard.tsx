import React from "react";

interface QuestionProps {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  views: number;
  upvotes: number;
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  answers: Array<object>;
  createdAt: Date;
}
const QuestionCard = ({
  _id,
  title,
  tags,
  views,
  upvotes,
  author,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className=" card-wrapper rounded-[9px] p-9 sm:px-11  ">Qestion</div>
  );
};

export default QuestionCard;
