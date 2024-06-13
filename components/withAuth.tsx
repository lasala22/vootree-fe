import { useEffect } from "react";
import { useRouter } from "next/router";
import { getRoleFromToken } from "@/utils/isAuth";
import { redirect } from "next/navigation";

const withAuth = (WrappedComponent: any, requiredRole: any) => {
  const ComponentWithAuth = (props) => {
    useEffect(() => {
      const role = getRoleFromToken();

      if (role !== requiredRole) {
        redirect("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  // Thiết lập display name cho component
  ComponentWithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default withAuth;
