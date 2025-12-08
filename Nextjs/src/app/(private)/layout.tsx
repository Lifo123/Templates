import type { Metadata } from "next";
import AuthGuard from "@Modules/auth/components/AuthGuard";

export const metadata: Metadata = {
  title: 'Template - private',
  description: 'description for template',
};

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard >
      <>
        {/* laoyout */}
        <main>
          {children}
        </main>
      </>
    </AuthGuard>
  );
}