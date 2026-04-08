
import api from "@/lib/axios/api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function ensureAuth(router: AppRouterInstance) {
  // 1) try /user/me with current access token
  try {
    await api.get("/user/me"); // interceptor attaches Authorization
    return true;
  } catch (err) {
    console.log(err);
    // 2) try refresh (cookie will be sent automatically)

    try {
      const refreshResp = await api.post("/user/refresh");
      const newAccessToken = refreshResp.data.accessToken; //* it creating the access token by using the refreshController
      localStorage.setItem("accessToken", newAccessToken); // or store in-memory
      return true;
    } catch (err) {
      router.replace("/unauthorized");
      return false;
    }
  }
}
