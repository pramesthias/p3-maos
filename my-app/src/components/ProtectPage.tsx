import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ProtectedProps = {
  children: React.ReactNode;
};

const ProtectPage = ({ children }: ProtectedProps) => {
  const cookieStore = cookies();

  const token = cookieStore.get("Authorization");

  if (!token) {
    redirect("login");
  }

  return <>{children}</>;
};

export default ProtectPage;

// => export, pakein layout.tsx juga lbh baik / masukin ke page.tsx untuk wishlist
// export default function WishLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <ProtectPage>{children}</ProtectPage>
//     </>
//   );
// }
