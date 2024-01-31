import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-full items-center justify-center my-28">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
