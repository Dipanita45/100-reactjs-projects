"use client";

import React from "react";
import {
  FileText,
  Users,
  DollarSign,
  Activity,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Overview of your platform performance and activity
          </p>
        </div>

        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow hover:opacity-90 transition">
          <Plus size={16} />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Projects"
          value="24"
          change="+12%"
          icon={<FileText size={18} />}
        />
        <StatCard
          title="Users"
          value="1,240"
          change="+5%"
          icon={<Users size={18} />}
        />
        <StatCard
          title="Revenue"
          value="$12.4K"
          change="+18%"
          icon={<DollarSign size={18} />}
        />
        <StatCard
          title="Growth"
          value="89%"
          change="+3%"
          icon={<TrendingUp size={18} />}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-card p-5 rounded-xl border shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Recent Activity</h2>
            <Clock size={16} className="text-muted-foreground" />
          </div>

          <div className="space-y-3">
            {activityData.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-accent transition cursor-pointer"
              >
                <div>
                  <p className="text-sm">{item.title}</p>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card p-5 rounded-xl border shadow-sm"
        >
          <h2 className="text-lg font-medium mb-4">Quick Actions</h2>

          <div className="space-y-3">
            {actions.map((a, i) => (
              <button
                key={i}
                className="w-full text-left p-3 rounded-lg bg-muted hover:bg-accent transition text-sm"
              >
                {a}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects */}
      <div className="bg-card p-5 rounded-xl border shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Projects</h2>
          <button className="text-sm text-primary hover:underline">
            View all
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-lg border bg-muted hover:bg-accent transition cursor-pointer"
            >
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


function StatCard({ title, value, change, icon }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card p-4 rounded-xl border shadow-sm flex flex-col gap-2"
    >
      <div className="flex items-center justify-between text-muted-foreground">
        {icon}
        <span className="text-xs text-green-500">{change}</span>
      </div>

      <h3 className="text-xl font-semibold">{value}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
    </motion.div>
  );
}

/* Data */
const activityData = [
  { title: "New user registered", time: "2 min ago" },
  { title: "Payment received", time: "10 min ago" },
  { title: "Project updated", time: "1 hour ago" },
  { title: "New project created", time: "3 hours ago" },
];

const actions = [
  "Create Project",
  "Invite User",
  "Generate Report",
  "View Analytics",
];

const projects = [
  { name: "Admin Dashboard", desc: "Internal analytics panel" },
  { name: "E-commerce App", desc: "Shopping platform UI" },
  { name: "Portfolio Website", desc: "Personal branding site" },
];
