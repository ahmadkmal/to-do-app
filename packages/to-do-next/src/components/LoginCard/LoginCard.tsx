/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IUser } from "@/types/user.type";
import { useLogInMutation } from "@/service/query/user";
import {  useRouter } from "next/navigation";

interface Props extends IUser {
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const LoginCard = ({
  id,
  name,
  username,
  avatar,
  isSelected,
  onSelect,
}: Props) => {
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const loginMutation = useLogInMutation();
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-3xl md:flex-row min-w-full gap-4">
        <div className="relative w-32 h-32 overflow-hidden   rounded-full ">
          <img className="w-32 h-32" src={avatar} alt={name} />
        </div>
        <div className="flex flex-col space-y-4 flex-1 w-full">
          <div className="flex flex-col items-center md:items-start gap-1">
            <h2 className="text-xl font-medium">{name}</h2>
            {/* error */}
            {error && <div className="text-red-500">{error}</div>}
            {isSelected && (
              <Input
                type="password"
                onChange={(e) => {
                  if (error) {
                    setError("");
                  }
                  setPassword(e.target.value);
                }}
              />
            )}
          </div>
          <div className="flex w-full justify-stretch gap-2">
            {isSelected ? (
              <>
                <Button onClick={() => onSelect("")} className="flex-1">
                  cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={() =>
                    loginMutation.mutate(
                      { username, password },
                      {
                        onSuccess: () => {
                          router.push("/");
                        },
                        onError: (err) => {
                          setError(err.message);
                        },
                      }
                    )
                  }
                >
                  Login
                </Button>
              </>
            ) : (
              <Button className="flex-1" onClick={() => onSelect(id)}>
                select
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
