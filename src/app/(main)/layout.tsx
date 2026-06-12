import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Martin International School — School Management Portal",
  description: "Access your school portal — attendance, fees, exams, timetables, and more.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
