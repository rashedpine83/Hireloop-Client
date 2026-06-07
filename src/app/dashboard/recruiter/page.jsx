"use client";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { useSession } from "@/lib/auth-client";
import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";

const RecruiterDashboardPage = () => {
  const { data: session, isLoading } = useSession();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: Briefcase },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  const user = session?.user;

  return (
    <div>
      <h2 className="text-2xl font-semibold">Welcome back, {user?.name}</h2>
      <DashboardStats statsData={recruiterStats} />
    </div>
  );
};

export default RecruiterDashboardPage;
