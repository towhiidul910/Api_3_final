// client\src\store\store-provider.tsx
"use client";

import { store } from "@/REDUX/store/store";
// import { store } from "@/REDUX/features/store";
// import { store } from "./store";
import { Provider } from "react-redux";


export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
