import Header from "../components/common/Header";
import ProfilePage from "../components/ProfilePage/page";


export default function Profile() {
  return (

    <div className="flex w-full flex-col items-center justify-between   dark:bg-black mx-auto">
      <Header />
      <ProfilePage />
    </div>
  );
}
