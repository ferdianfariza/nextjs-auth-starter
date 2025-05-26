import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server'

export default async function User() {
   const user = await currentUser()
  return (
    <div >
      <SignedIn>
        <UserButton /> {user?.firstName}
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
