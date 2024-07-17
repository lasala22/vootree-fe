import { useEffect } from "react";
import { useRouter } from "next/router";
import { getRoleFromToken } from "@/utils/isAuth";
import { redirect } from "next/navigation";
import { message } from "antd";

const withAuth = (WrappedComponent: any, requiredRole: any) => {
  const ComponentWithAuth = (props) => {
    useEffect(() => {
      const role = getRoleFromToken();
      if (role !== requiredRole) {
        message.error("Vui lòng đăng nhập để tiếp tục");
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
