import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showcount?: boolean;
}
const RenderTag = ({ _id, name, totalQuestions, showcount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        className="subtle-medium background-light800_dark400 text-light400_light500 rounded-md
      border-none  px-4 py-2 uppercase  "
      >
        {name}
      </Badge>
      {showcount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
