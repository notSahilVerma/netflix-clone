import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
// import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth",
  //       permanent: false,
  //     }
  //   }
  // }

  return {
    props: {},
  }
}

const Profiles = () => {
  const router = useRouter();
  const { data} = useCurrentUser();
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex-flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who&apos;s Watching</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push('/')}>
            <div className="group flex flex-col w-44 mx-auto">
              <div className="
            w-44
            h-44
            rounded-md
            flex
            items-center
            border-2
            border-transparent
            group-hover:cursor-pointer
            group-hover:border-white

            ">
                <img src="/images/default-blue.png" alt="Profile" />
              </div>

              <div className="
              mt-4
              text-gray-400
              text-2xl
              text-center
              group-hover:text-white
              ">
                {data?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profiles;
