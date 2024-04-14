import Loader from "@/components/shared/Loader";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <ClerkLoading>
        <Loader />
      </ClerkLoading>

      <ClerkLoaded>
        <UserButton afterSignOutUrl="/" />
      </ClerkLoaded>
    </div>
  );
};
export default HomePage;
