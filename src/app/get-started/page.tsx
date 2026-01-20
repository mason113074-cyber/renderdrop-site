import { redirect } from "next/navigation";

export default function GetStarted() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://renderdrop-app.vercel.app";
  redirect(appUrl);
}
