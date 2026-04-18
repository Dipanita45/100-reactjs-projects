import { DashboardHeader } from "@/components/dashboard/header";
import { StatCard } from "@/components/dashboard/stat-card";
import { ActivityList } from "@/components/dashboard/activity-list";
import { ProjectCard } from "@/components/dashboard/project-card";
import { QuickActions } from "@/components/dashboard/quick-actions";

import {
  statsData,
  activityData,
  projects,
  actions,
} from "@/config/dashboard";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">

      <DashboardHeader />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat: any, i: number) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-card border rounded-xl p-5">
          <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
          <ActivityList data={activityData} />
        </div>

        <div className="bg-card border rounded-xl p-5">
          <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
          <QuickActions actions={actions} />
        </div>
      </div>

      <div className="bg-card border rounded-xl p-5">
        <h2 className="text-lg font-medium mb-4">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p: any, i: number) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}