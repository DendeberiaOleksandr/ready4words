"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import React from "react";
import bg from "@/app/img/loginBg.png"
import Link from "next/link";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function SignUpPage() {
  return (
    <div style={{
      backgroundImage: `url(${bg.src})`,
    }}
    className="w-full h-screen bg-light-green flex justify-center items-center">
      <SignUp.Root>
        <SignUp.Step name="start" className="max-w-[280px] flex flex-1 flex-col items-center">

          <IoPersonCircleSharp color="#083441" size={42}/>

          <h1 className="text-dark-green font-semibold text-[28px] mt-2">Sign Up</h1>

          <Clerk.Field name="emailAddress" className="mt-4 w-full flex flex-col">
            <Clerk.Input placeholder="Email" className="rounded-md px-4 py-2 shadow text-dark-green"/>
            <Clerk.FieldError className="text-red-500 mt-2 text-[14px]" />
          </Clerk.Field>

          <Clerk.Field name="password" className="mt-4 flex flex-col w-full">
            <Clerk.Input placeholder="Password" type="password" className="text-dark-green rounded-md px-4 py-2 shadow text-dark-gray"/>
            <Clerk.FieldError className="text-red-500 mt-2 text-[14px]"/>
          </Clerk.Field>

          <SignUp.Captcha />

          <SignUp.Action className="w-full text-light-green mt-4 bg-dark-green px-4 py-2 rounded" submit>Sign up</SignUp.Action>

          <div className="text-gray-500 text-[14px] mt-4">
            Already have an account? <Link href={'/sign-in'} className="text-dark-green font-semibold">Sign In</Link>
          </div>

          <Clerk.Connection
            name="google"
            className="mt-4 text-dark-green bg-light-green flex items-center text-[15px] font-semibold px-4 py-2 rounded-full shadow"
          >
            <Clerk.Icon className="size-4 mr-2" />
            Sign Up With Google
          </Clerk.Connection>

          <p className="text-center text-dark-green text-[14px] mt-14">By signing up on the website, you agree to the service <span className="font-bold">Terms And Conditions</span></p>
        </SignUp.Step>

        <SignUp.Step name="verifications">

          <SignUp.Strategy name="email_code">
            <div className="flex flex-col items-center max-w-[260px] flex-1 text-center">
              <IoIosMail color="#083441" size={42}/>

              <h2 className="text-dark-green font-semibold text-[24px] mt-2">Verify Your Email</h2>

              <p className="text-[16px] text-dark-green mt-2">We have sent a verification code to Your email to verify Your identity. Please provide it below.</p>

              <Clerk.Field name="code" className="flex flex-col items-center w-full max-w-[220px]">
                <Clerk.Input required placeholder="Code" className="rounded-lg shadow px-4 py-2 w-full mt-4"/>
                <Clerk.FieldError className="text-[14px] text-red-500 mt-2"/>
              </Clerk.Field>

              <SignUp.Action submit className="px-4 py-2 rounded-lg text-light-green bg-dark-green shadow mt-2 max-w-[220px] w-full">Verify</SignUp.Action>
            </div>

          </SignUp.Strategy>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}

export default SignUpPage;
