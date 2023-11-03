'use client'
import { useGetUser } from "@/service/query/user";
import React from "react";

type Props = {};

const UserCard = (props: Props) => {
  const user = useGetUser();
  return (
    <div className="flex items-center space-x-4">
      <img className="w-10 h-10 rounded-full" src={user.avatar} alt="" />
      <div className="font-medium dark:text-white">
        <p>{user.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
