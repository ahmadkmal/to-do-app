import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import React, { Suspense } from "react";
import Header from "@/components/Header/Header";
import { headers } from 'next/headers'
import ClientOnly from "@/components/ClientOnly/ClientOnly";
// import { setUserToken } from "@/utils/userToken";
const inter = Inter({ subsets: ["latin"] });
export const runtime = 'edge' 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  



  return (

        <div className="h-screen flex flex-col">
          <Header/>
          <div className="flex w-full justify-center py-10 items-center bg-white">
<ClientOnly>
            {children}
</ClientOnly>


          </div>
        </div>
  );
}
