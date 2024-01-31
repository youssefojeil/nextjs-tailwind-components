import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex h-full items-center justify-center my-28">
      <SignUp signInUrl="/sign-in" />{" "}
    </div>
  );
}
