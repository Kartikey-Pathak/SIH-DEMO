"use client";

import { useState } from "react";

const schemes = [
  {
    id: "NFST",
    title: "National Fellowship for ST Students",
    type: "Fellowship",
    description:
      "Financial assistance for eligible Scheduled Tribe students pursuing research programmes in India.",
    amount: "As per scheme norms",
    status: "Open",
  },
  {
    id: "NOS",
    title: "National Overseas Scholarship",
    type: "Scholarship",
    description:
      "Financial assistance for eligible ST students pursuing Master's or Ph.D. programmes abroad.",
    amount: "As per scheme norms",
    status: "Open",
  },
  {
    id: "POST",
    title: "Post-Matric Scholarship",
    type: "Scholarship",
    description:
      "Financial support for ST students pursuing higher education after Class 10.",
    amount: "Scheme based",
    status: "Open",
  },
  {
    id: "TOP",
    title: "Top Class Education Scheme",
    type: "Scholarship",
    description:
      "Support for ST students pursuing higher education in notified institutions.",
    amount: "Scheme based",
    status: "Open",
  },
];

const applications = [
  {
    id: "MTA/NFST/2026/00127",
    scheme: "National Fellowship for ST Students",
    submitted: "24 Sep 2026",
    status: "Under Verification",
    progress: 62,
    documents: "7/7",
  },
  {
    id: "MTA/NOS/2026/00091",
    scheme: "National Overseas Scholarship",
    submitted: "18 Sep 2026",
    status: "Deficiency Raised",
    progress: 48,
    documents: "6/7",
  },
  {
    id: "MTA/POST/2026/00218",
    scheme: "Post-Matric Scholarship",
    submitted: "11 Sep 2026",
    status: "Selected",
    progress: 100,
    documents: "8/8",
  },
];

const adminApplications = [
  {
    id: "MTA/NFST/2026/00127",
    applicant: "Aarav Kumar",
    scheme: "NFST",
    category: "ST",
    score: 87,
    status: "AI Verified",
    risk: "Low",
  },
  {
    id: "MTA/NOS/2026/00091",
    applicant: "Priya Kumari",
    scheme: "NOS",
    category: "ST",
    score: 76,
    status: "Deficiency",
    risk: "Medium",
  },
  {
    id: "MTA/NFST/2026/00143",
    applicant: "Rahul Toppo",
    scheme: "NFST",
    category: "ST",
    score: 92,
    status: "Ready for Review",
    risk: "Low",
  },
  {
    id: "MTA/POST/2026/00218",
    applicant: "Anjali Murmu",
    scheme: "POST",
    category: "ST",
    score: 89,
    status: "Selected",
    risk: "Low",
  },
];

function Icon({ children, size = 18 }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

function DashboardIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    </Icon>
  );
}

function FileIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </svg>
    </Icon>
  );
}

function SearchIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    </Icon>
  );
}

function CheckIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m5 12 4 4L19 6" />
      </svg>
    </Icon>
  );
}

function AlertIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    </Icon>
  );
}

function BrainIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M9 4.5A3.5 3.5 0 0 0 5.5 8c0 .5.1 1 .3 1.4A3.5 3.5 0 0 0 7 16.1V18a2 2 0 0 0 2 2h1v-7" />
        <path d="M15 4.5A3.5 3.5 0 0 1 18.5 8c0 .5-.1 1-.3 1.4A3.5 3.5 0 0 1 17 16.1V18a2 2 0 0 1-2 2h-1v-7" />
        <path d="M9 8h2M13 8h2M8 12h3M13 12h3" />
      </svg>
    </Icon>
  );
}

function ChartIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19V5M4 19h17" />
        <path d="m7 15 3-4 3 2 5-7" />
      </svg>
    </Icon>
  );
}

function BellIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    </Icon>
  );
}

function UploadIcon() {
  return (
    <Icon size={22}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 16V4M7 9l5-5 5 5" />
        <path d="M5 20h14" />
      </svg>
    </Icon>
  );
}

function ChevronIcon() {
  return (
    <Icon size={16}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Icon>
  );
}

function StatusBadge({ children, type = "default" }) {
  return <span className={`status status-${type}`}>{children}</span>;
}

function getStatusType(status) {
  if (status === "Selected" || status === "AI Verified") return "success";
  if (status === "Deficiency Raised" || status === "Deficiency") return "warning";
  if (status === "Under Verification" || status === "Ready for Review") return "info";
  return "default";
}

export default function Home() {
  const [role, setRole] = useState("applicant");
  const [page, setPage] = useState("dashboard");
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showApplication, setShowApplication] = useState(false);
  const [aiRunning, setAiRunning] = useState(false);
  const [aiComplete, setAiComplete] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [notification, setNotification] = useState(null);

  const notify = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const runAI = () => {
    setAiRunning(true);
    setAiComplete(false);

    setTimeout(() => {
      setAiRunning(false);
      setAiComplete(true);
    }, 1600);
  };

  const navItems =
    role === "applicant"
      ? [
          ["dashboard", "Dashboard", <DashboardIcon />],
          ["schemes", "Find Schemes", <SearchIcon />],
          ["applications", "My Applications", <FileIcon />],
          ["eligibility", "AI Eligibility", <BrainIcon />],
        ]
      : [
          ["dashboard", "Overview", <DashboardIcon />],
          ["verification", "Verification Queue", <FileIcon />],
          ["selection", "Selection", <CheckIcon />],
          ["analytics", "Analytics", <ChartIcon />],
        ];

  return (
    <main className="app">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f5f7f9;
          color: #18212f;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        button,
        input,
        select {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .app {
          min-height: 100vh;
          background: #f5f7f9;
        }

        .topbar {
          height: 68px;
          background: white;
          border-bottom: 1px solid #e5e9ef;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          position: sticky;
          top: 0;
          z-index: 30;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 750;
          font-size: 17px;
          color: #142033;
        }

        .brand-mark {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: #0d683d;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .brand small {
          display: block;
          font-size: 10px;
          color: #7a8492;
          font-weight: 500;
          margin-top: 1px;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .role-switch {
          background: #f2f4f7;
          padding: 4px;
          border-radius: 9px;
          display: flex;
        }

        .role-switch button {
          border: 0;
          background: transparent;
          color: #697384;
          padding: 7px 13px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 650;
        }

        .role-switch button.active {
          background: white;
          color: #0d683d;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .notification-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #e4e8ed;
          background: white;
          border-radius: 8px;
          color: #566170;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #dfece5;
          color: #0d683d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 750;
        }

        .layout {
          display: flex;
          min-height: calc(100vh - 68px);
        }

        .sidebar {
          width: 235px;
          background: #fff;
          border-right: 1px solid #e5e9ef;
          padding: 22px 13px;
          flex-shrink: 0;
        }

        .side-label {
          color: #9aa2ad;
          text-transform: uppercase;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.12em;
          padding: 0 12px;
          margin-bottom: 9px;
        }

        .nav {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .nav button {
          border: 0;
          background: transparent;
          color: #606b7b;
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 12px;
          text-align: left;
        }

        .nav button:hover {
          background: #f5f7f9;
        }

        .nav button.active {
          color: #0d683d;
          background: #eaf5ef;
          font-weight: 700;
        }

        .side-bottom {
          border-top: 1px solid #edf0f3;
          margin-top: 25px;
          padding: 20px 12px;
        }

        .ministry-card {
          background: #f7f9fa;
          border: 1px solid #e9edf0;
          border-radius: 10px;
          padding: 12px;
          font-size: 10px;
          color: #7a8490;
          line-height: 1.5;
        }

        .ministry-card strong {
          display: block;
          color: #374151;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .content {
          flex: 1;
          padding: 30px 34px 50px;
          min-width: 0;
          max-width: 1500px;
        }

        .page-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          gap: 20px;
        }

        .page-head h1 {
          font-size: 24px;
          margin: 0 0 5px;
          letter-spacing: -0.025em;
        }

        .page-head p {
          margin: 0;
          color: #7a8490;
          font-size: 12px;
        }

        .primary-btn {
          border: 0;
          background: #0d683d;
          color: white;
          padding: 10px 15px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .primary-btn:hover {
          background: #095531;
        }

        .secondary-btn {
          border: 1px solid #dce1e6;
          background: white;
          color: #3e4957;
          padding: 9px 14px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 650;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 13px;
          margin-bottom: 18px;
        }

        .stat-card {
          background: white;
          border: 1px solid #e5e9ee;
          border-radius: 10px;
          padding: 17px;
        }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          color: #7c8694;
          font-size: 11px;
        }

        .stat-icon {
          width: 30px;
          height: 30px;
          border-radius: 7px;
          background: #edf6f1;
          color: #0d683d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-number {
          font-size: 24px;
          font-weight: 760;
          margin-top: 10px;
          letter-spacing: -0.03em;
        }

        .stat-meta {
          color: #9099a5;
          font-size: 10px;
          margin-top: 3px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 16px;
        }

        .panel {
          background: white;
          border: 1px solid #e5e9ee;
          border-radius: 10px;
          overflow: hidden;
        }

        .panel-head {
          padding: 15px 17px;
          border-bottom: 1px solid #edf0f3;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .panel-head h2 {
          margin: 0;
          font-size: 13px;
          letter-spacing: -0.01em;
        }

        .panel-head span {
          color: #8b94a0;
          font-size: 10px;
        }

        .panel-body {
          padding: 17px;
        }

        .application-row {
          padding: 13px 0;
          border-bottom: 1px solid #edf0f3;
        }

        .application-row:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .row-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .row-title {
          font-size: 12px;
          font-weight: 700;
        }

        .row-sub {
          color: #929ba7;
          font-size: 10px;
          margin-top: 4px;
        }

        .status {
          display: inline-flex;
          align-items: center;
          padding: 4px 7px;
          border-radius: 99px;
          font-size: 9px;
          font-weight: 700;
          white-space: nowrap;
        }

        .status-success {
          background: #e9f6ee;
          color: #167445;
        }

        .status-warning {
          background: #fff5df;
          color: #a66b00;
        }

        .status-info {
          background: #eaf2fa;
          color: #356a98;
        }

        .status-default {
          background: #f0f2f4;
          color: #687381;
        }

        .progress {
          height: 5px;
          background: #edf0f2;
          border-radius: 99px;
          margin-top: 10px;
          overflow: hidden;
        }

        .progress > div {
          height: 100%;
          background: #0d683d;
          border-radius: inherit;
        }

        .ai-card {
          background: #f5faf7;
          border: 1px solid #d9ede1;
          border-radius: 9px;
          padding: 16px;
        }

        .ai-head {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ai-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #0d683d;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-head strong {
          display: block;
          font-size: 12px;
        }

        .ai-head span {
          display: block;
          font-size: 10px;
          color: #789083;
          margin-top: 2px;
        }

        .ai-list {
          margin: 14px 0 0;
          padding: 0;
          list-style: none;
        }

        .ai-list li {
          font-size: 10px;
          color: #53605a;
          padding: 7px 0;
          display: flex;
          gap: 8px;
          border-top: 1px solid #dfede4;
        }

        .scheme-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .scheme-card {
          background: white;
          border: 1px solid #e3e8ec;
          border-radius: 10px;
          padding: 18px;
          transition: 0.15s;
        }

        .scheme-card:hover {
          border-color: #a9cdb9;
          box-shadow: 0 7px 20px rgba(20, 45, 32, 0.05);
          transform: translateY(-1px);
        }

        .scheme-tag {
          display: inline-flex;
          padding: 4px 7px;
          border-radius: 5px;
          background: #edf6f1;
          color: #0d683d;
          font-size: 9px;
          font-weight: 750;
          margin-bottom: 12px;
        }

        .scheme-card h3 {
          font-size: 14px;
          margin: 0 0 7px;
        }

        .scheme-card p {
          color: #7d8793;
          font-size: 10px;
          line-height: 1.6;
          min-height: 48px;
          margin: 0 0 15px;
        }

        .scheme-footer {
          border-top: 1px solid #edf0f2;
          padding-top: 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .scheme-footer span {
          font-size: 9px;
          color: #8c95a0;
        }

        .scheme-footer button {
          border: 0;
          background: transparent;
          color: #0d683d;
          font-size: 10px;
          font-weight: 750;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .search-box {
          background: white;
          border: 1px solid #e3e8ec;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          width: 270px;
          color: #9ba3ad;
        }

        .search-box input {
          border: 0;
          outline: 0;
          width: 100%;
          padding: 10px 0;
          font-size: 11px;
          background: transparent;
        }

        .eligibility {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }

        .form-card {
          background: white;
          border: 1px solid #e4e9ed;
          border-radius: 10px;
          padding: 20px;
        }

        .form-card h2 {
          margin: 0 0 5px;
          font-size: 15px;
        }

        .form-card > p {
          margin: 0 0 20px;
          color: #89929e;
          font-size: 10px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .field label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          color: #596473;
          margin-bottom: 6px;
        }

        .field input,
        .field select {
          width: 100%;
          border: 1px solid #dfe4e9;
          border-radius: 7px;
          padding: 10px;
          outline: none;
          background: white;
          font-size: 11px;
          color: #354050;
        }

        .field input:focus,
        .field select:focus {
          border-color: #8bbca3;
          box-shadow: 0 0 0 3px #edf7f1;
        }

        .result-card {
          background: #fff;
          border: 1px solid #e4e9ed;
          border-radius: 10px;
          padding: 20px;
        }

        .result-empty {
          min-height: 270px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #919aa5;
          font-size: 11px;
          flex-direction: column;
          gap: 10px;
        }

        .result-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #eaf5ef;
          color: #0d683d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
        }

        .result-title {
          font-size: 15px;
          font-weight: 750;
          margin-top: 14px;
        }

        .criteria {
          margin-top: 16px;
        }

        .criteria div {
          display: flex;
          justify-content: space-between;
          padding: 9px 0;
          border-bottom: 1px solid #edf0f2;
          font-size: 10px;
        }

        .criteria div span:first-child {
          color: #737d89;
        }

        .criteria .pass {
          color: #197343;
          font-weight: 700;
        }

        .upload-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .upload {
          border: 1px dashed #cdd5dc;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          background: #fafbfc;
        }

        .upload.complete {
          border-style: solid;
          border-color: #bbdcc9;
          background: #f4faf6;
        }

        .upload-icon {
          color: #789084;
          margin-bottom: 7px;
        }

        .upload strong {
          display: block;
          font-size: 10px;
        }

        .upload span {
          display: block;
          color: #9aa2ac;
          font-size: 9px;
          margin-top: 4px;
        }

        .table-wrap {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background: #f8f9fa;
          color: #7f8995;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 750;
          text-align: left;
          padding: 11px 13px;
          white-space: nowrap;
        }

        td {
          padding: 13px;
          border-top: 1px solid #edf0f2;
          font-size: 10px;
          color: #4e5968;
          white-space: nowrap;
        }

        td strong {
          color: #293444;
          font-size: 11px;
        }

        .score {
          font-weight: 800;
          color: #0d683d;
        }

        .ai-check {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #187244;
          font-size: 9px;
          font-weight: 700;
        }

        .timeline {
          position: relative;
          margin: 10px 0 0 5px;
        }

        .timeline-item {
          display: flex;
          gap: 13px;
          position: relative;
          padding-bottom: 23px;
        }

        .timeline-item:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 5px;
          top: 14px;
          bottom: 0;
          width: 1px;
          background: #dfe5e1;
        }

        .timeline-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          border: 2px solid #aeb8b2;
          background: white;
          margin-top: 3px;
          z-index: 2;
          flex-shrink: 0;
        }

        .timeline-dot.done {
          background: #0d683d;
          border-color: #0d683d;
        }

        .timeline-text strong {
          display: block;
          font-size: 11px;
        }

        .timeline-text span {
          display: block;
          color: #8b949f;
          font-size: 9px;
          margin-top: 3px;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(18, 28, 38, 0.35);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal {
          width: min(680px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
        }

        .modal-head {
          padding: 18px 20px;
          border-bottom: 1px solid #edf0f2;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-head h2 {
          margin: 0;
          font-size: 15px;
        }

        .close {
          border: 0;
          background: #f2f4f6;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          color: #687381;
        }

        .modal-body {
          padding: 20px;
        }

        .success-box {
          background: #eef8f2;
          border: 1px solid #cfe8d9;
          border-radius: 8px;
          padding: 14px;
          color: #236845;
          font-size: 10px;
          margin-bottom: 16px;
        }

        .ai-loader {
          padding: 14px;
          background: #f6f8f9;
          border-radius: 8px;
          font-size: 10px;
          color: #657080;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .dot-loader {
          width: 14px;
          height: 14px;
          border: 2px solid #c8d4cd;
          border-top-color: #0d683d;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .toast {
          position: fixed;
          right: 25px;
          bottom: 25px;
          background: #1e2935;
          color: white;
          padding: 12px 15px;
          border-radius: 8px;
          font-size: 11px;
          z-index: 200;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .metric-bars {
          display: flex;
          align-items: flex-end;
          height: 180px;
          gap: 15px;
          padding: 20px 10px 5px;
          border-bottom: 1px solid #edf0f2;
        }

        .bar-group {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: flex-end;
          gap: 5px;
          position: relative;
        }

        .bar {
          flex: 1;
          background: #d8e9df;
          border-radius: 4px 4px 0 0;
        }

        .bar.selected {
          background: #0d683d;
        }

        .bar-label {
          position: absolute;
          bottom: -20px;
          width: 100%;
          text-align: center;
          color: #929ba5;
          font-size: 8px;
        }

        .legend {
          display: flex;
          gap: 17px;
          margin-top: 30px;
          font-size: 9px;
          color: #7f8994;
        }

        .legend i {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 2px;
          background: #d8e9df;
          margin-right: 5px;
        }

        .legend i.green {
          background: #0d683d;
        }

        @media (max-width: 1000px) {
          .sidebar {
            width: 190px;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid-2,
          .eligibility {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .topbar {
            padding: 0 14px;
          }

          .sidebar {
            display: none;
          }

          .content {
            padding: 20px 14px;
          }

          .scheme-grid,
          .form-grid,
          .upload-grid {
            grid-template-columns: 1fr;
          }

          .cards {
            grid-template-columns: 1fr 1fr;
          }

          .page-head {
            flex-direction: column;
          }

          .role-switch button {
            padding: 6px 8px;
          }

          .brand small {
            display: none;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="brand">
          <div>
            <span className=" font-bold text-sm md:text-2xl text-center">
            Tribal Scholarship Portal</span>
            <small>Ministry of Tribal Affairs • Government of India</small>
          </div>
        </div>

        <div className="top-actions">
          <div className="role-switch">
            <button
              className={role === "applicant" ? "active" : ""}
              onClick={() => {
                setRole("applicant");
                setPage("dashboard");
              }}
            >
              Applicant
            </button>
            <button
              className={role === "admin" ? "active" : ""}
              onClick={() => {
                setRole("admin");
                setPage("dashboard");
              }}
            >
              Admin
            </button>
          </div>

          <button className="notification-btn">
            <BellIcon />
          </button>

          <div className="avatar">{role === "admin" ? "AD" : "AK"}</div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="side-label">
            {role === "admin" ? "Administration" : "Applicant Portal"}
          </div>

          <nav className="nav">
            {navItems.map(([id, label, icon]) => (
              <button
                key={id}
                className={page === id ? "active" : ""}
                onClick={() => setPage(id)}
              >
                {icon}
                {label}
              </button>
            ))}
          </nav>

          <div className="side-bottom">
            <div className="ministry-card">
              <strong>AI-enabled workflow</strong>
              OCR • Rule Engine • Document Intelligence • Analytics
            </div>
          </div>
        </aside>

        <section className="content">
          {role === "applicant" && page === "dashboard" && (
            <ApplicantDashboard
              setPage={setPage}
              notify={notify}
              setSelectedApplication={setSelectedApplication}
            />
          )}

          {role === "applicant" && page === "schemes" && (
            <Schemes
              setSelectedScheme={setSelectedScheme}
              setShowApplication={setShowApplication}
            />
          )}

          {role === "applicant" && page === "applications" && (
            <Applications
              setSelectedApplication={setSelectedApplication}
            />
          )}

          {role === "applicant" && page === "eligibility" && (
            <Eligibility runAI={runAI} aiRunning={aiRunning} aiComplete={aiComplete} />
          )}

          {role === "admin" && page === "dashboard" && (
            <AdminDashboard setPage={setPage} />
          )}

          {role === "admin" && page === "verification" && (
            <Verification
              notify={notify}
              setSelectedApplication={setSelectedApplication}
            />
          )}

          {role === "admin" && page === "selection" && (
            <Selection notify={notify} />
          )}

          {role === "admin" && page === "analytics" && <Analytics />}
        </section>
      </div>

      {selectedScheme && showApplication && (
        <ApplicationModal
          scheme={selectedScheme}
          onClose={() => {
            setSelectedScheme(null);
            setShowApplication(false);
          }}
          notify={notify}
        />
      )}

      {selectedApplication && (
        <ApplicationDetails
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          notify={notify}
        />
      )}

      {notification && <div className="toast">{notification}</div>}
    </main>
  );
}

function ApplicantDashboard({ setPage, notify, setSelectedApplication }) {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Good evening, Aarav</h1>
          <p>Manage your scholarships and fellowship applications from one place.</p>
        </div>

        <button className="primary-btn" onClick={() => setPage("schemes")}>
          + Find a Scheme
        </button>
      </div>

      <div className="cards">
        <Stat title="Active Applications" value="03" meta="1 requires attention" icon={<FileIcon />} />
        <Stat title="Verified Documents" value="22" meta="Across all applications" icon={<CheckIcon />} />
        <Stat title="Under Review" value="01" meta="Expected update soon" icon={<BrainIcon />} />
        <Stat title="Notifications" value="02" meta="1 new deficiency notice" icon={<BellIcon />} />
      </div>

      <div className="grid-2">
        <div className="panel">
          <div className="panel-head">
            <h2>Recent Applications</h2>
            <button className="secondary-btn" onClick={() => setPage("applications")}>
              View all
            </button>
          </div>

          <div className="panel-body">
            {applications.map((app) => (
              <div
                className="application-row"
                key={app.id}
                onClick={() => setSelectedApplication(app)}
                style={{ cursor: "pointer" }}
              >
                <div className="row-top">
                  <div>
                    <div className="row-title">{app.scheme}</div>
                    <div className="row-sub">
                      {app.id} • Submitted {app.submitted}
                    </div>
                  </div>

                  <StatusBadge type={getStatusType(app.status)}>
                    {app.status}
                  </StatusBadge>
                </div>

                <div className="progress">
                  <div style={{ width: `${app.progress}%` }} />
                </div>

                <div className="row-sub">
                  {app.documents} documents verified • {app.progress}% workflow complete
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>AI Application Assistant</h2>
            <span>Powered by document intelligence</span>
          </div>

          <div className="panel-body">
            <div className="ai-card">
              <div className="ai-head">
                <div className="ai-icon">
                  <BrainIcon />
                </div>
                <div>
                  <strong>Application Health Check</strong>
                  <span>Automated pre-submission verification</span>
                </div>
              </div>

              <ul className="ai-list">
                <li><CheckIcon /> Documents checked for completeness</li>
                <li><CheckIcon /> Eligibility rules evaluated automatically</li>
                <li><CheckIcon /> Missing or inconsistent information detected</li>
                <li><CheckIcon /> Human review retained for final decisions</li>
              </ul>

              <button
                className="primary-btn"
                style={{ width: "100%", justifyContent: "center", marginTop: 14 }}
                onClick={() => {
                  setPage("eligibility");
                  notify("AI Eligibility Checker opened");
                }}
              >
                Run AI Eligibility Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ title, value, meta, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        {title}
        <div className="stat-icon">{icon}</div>
      </div>
      <div className="stat-number">{value}</div>
      <div className="stat-meta">{meta}</div>
    </div>
  );
}

function Schemes({ setSelectedScheme, setShowApplication }) {
  const [query, setQuery] = useState("");

  const filtered = schemes.filter(
    (scheme) =>
      scheme.title.toLowerCase().includes(query.toLowerCase()) ||
      scheme.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Find a Scheme</h1>
          <p>Discover scholarships and fellowships based on your profile.</p>
        </div>

        <div className="search-box">
          <SearchIcon />
          <input
            placeholder="Search schemes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="ai-card" style={{ marginBottom: 18 }}>
        <div className="ai-head">
          <div className="ai-icon">
            <BrainIcon />
          </div>
          <div>
            <strong>AI Scheme Recommendation</strong>
            <span>
              The system can match applicant profile data against configurable scheme rules.
            </span>
          </div>
        </div>
      </div>

      <div className="scheme-grid">
        {filtered.map((scheme) => (
          <div className="scheme-card" key={scheme.id}>
            <div className="scheme-tag">{scheme.type}</div>

            <h3>{scheme.title}</h3>

            <p>{scheme.description}</p>

            <div className="scheme-footer">
              <span>{scheme.amount}</span>

              <button
                onClick={() => {
                  setSelectedScheme(scheme);
                  setShowApplication(true);
                }}
              >
                Check Eligibility <ChevronIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Eligibility({ runAI, aiRunning, aiComplete }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="page-head">
        <div>
          <h1>AI Eligibility Checker</h1>
          <p>Check your profile against configurable scheme eligibility rules.</p>
        </div>
      </div>

      <div className="eligibility">
        <div className="form-card">
          <h2>Applicant Profile</h2>
          <p>Enter basic information to perform a simulated AI eligibility assessment.</p>

          <div className="form-grid">
            <div className="field">
              <label>Category</label>
              <select defaultValue="ST">
                <option>ST</option>
                <option>SC</option>
                <option>OBC</option>
                <option>General</option>
              </select>
            </div>

            <div className="field">
              <label>Annual Family Income</label>
              <input defaultValue="₹2,40,000" />
            </div>

            <div className="field">
              <label>Current Programme</label>
              <select defaultValue="PhD">
                <option>PhD</option>
                <option>Masters</option>
                <option>Undergraduate</option>
              </select>
            </div>

            <div className="field">
              <label>Academic Score</label>
              <input defaultValue="82%" />
            </div>

            <div className="field">
              <label>Institution / University</label>
              <input defaultValue="Sample University" />
            </div>

            <div className="field">
              <label>Study Location</label>
              <select defaultValue="India">
                <option>India</option>
                <option>Abroad</option>
              </select>
            </div>
          </div>

          <button
            className="primary-btn"
            style={{ marginTop: 20, width: "100%", justifyContent: "center" }}
            onClick={() => {
              setChecked(true);
              runAI();
            }}
          >
            <BrainIcon />
            {aiRunning ? "AI is checking..." : "Run Eligibility Check"}
          </button>
        </div>

        <div className="result-card">
          {!checked && (
            <div className="result-empty">
              <div className="result-circle">
                <BrainIcon />
              </div>
              <strong>AI assessment ready</strong>
              Enter your profile and run the eligibility engine.
            </div>
          )}

          {checked && aiRunning && (
            <div className="result-empty">
              <div className="dot-loader" />
              <strong>Analyzing applicant profile...</strong>
              <span>
                Checking category, income, academic and programme criteria.
              </span>
            </div>
          )}

          {checked && aiComplete && (
            <>
              <div style={{ textAlign: "center" }}>
                <div className="result-circle" style={{ margin: "0 auto" }}>
                  94%
                </div>
                <div className="result-title">Likely Eligible</div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#8a949e",
                    marginTop: 4,
                  }}
                >
                  AI confidence score • NFST
                </div>
              </div>

              <div className="criteria">
                <div>
                  <span>ST Category</span>
                  <span className="pass">✓ Matched</span>
                </div>
                <div>
                  <span>Programme</span>
                  <span className="pass">✓ Matched</span>
                </div>
                <div>
                  <span>Academic criteria</span>
                  <span className="pass">✓ Matched</span>
                </div>
                <div>
                  <span>Income / other rules</span>
                  <span className="pass">✓ Matched</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: 14,
                  fontSize: 9,
                  color: "#89939d",
                  lineHeight: 1.5,
                }}
              >
                AI output is an assistance layer. Final eligibility and selection
                remain subject to approved scheme rules and authorized human review.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function Applications({ setSelectedApplication }) {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>My Applications</h1>
          <p>Track every stage of your scholarship and fellowship applications.</p>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Application Status</h2>
          <span>3 applications</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Scheme</th>
                <th>Submitted</th>
                <th>Documents</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr
                  key={app.id}
                  onClick={() => setSelectedApplication(app)}
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    <strong>{app.id}</strong>
                  </td>
                  <td>{app.scheme}</td>
                  <td>{app.submitted}</td>
                  <td>{app.documents}</td>
                  <td>
                    <StatusBadge type={getStatusType(app.status)}>
                      {app.status}
                    </StatusBadge>
                  </td>
                  <td style={{ minWidth: 130 }}>
                    <div className="progress">
                      <div style={{ width: `${app.progress}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function AdminDashboard({ setPage }) {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Ministry Administration</h1>
          <p>Central monitoring dashboard for scholarship and fellowship schemes.</p>
        </div>

        <button className="secondary-btn" onClick={() => setPage("analytics")}>
          View Reports
        </button>
      </div>

      <div className="cards">
        <Stat title="Total Applications" value="12,846" meta="+18.4% this cycle" icon={<FileIcon />} />
        <Stat title="AI Verified" value="8,921" meta="69.4% processed" icon={<BrainIcon />} />
        <Stat title="Pending Review" value="1,284" meta="Across all schemes" icon={<AlertIcon />} />
        <Stat title="Selected" value="4,362" meta="Current cycle" icon={<CheckIcon />} />
      </div>

      <div className="grid-2">
        <div className="panel">
          <div className="panel-head">
            <h2>Application Pipeline</h2>
            <span>Current cycle</span>
          </div>

          <div className="panel-body">
            {[
              ["Submitted", "12,846", 100],
              ["AI Verification", "10,231", 80],
              ["Human Scrutiny", "6,842", 53],
              ["Selection", "4,362", 34],
              ["Disbursed / Active", "3,918", 30],
            ].map(([name, value, progress]) => (
              <div className="application-row" key={name}>
                <div className="row-top">
                  <div className="row-title">{name}</div>
                  <div className="row-title">{value}</div>
                </div>
                <div className="progress">
                  <div style={{ width: `${progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>AI Processing Summary</h2>
            <span>Automated checks</span>
          </div>

          <div className="panel-body">
            <div className="ai-card">
              <div className="ai-head">
                <div className="ai-icon">
                  <BrainIcon />
                </div>
                <div>
                  <strong>Document Intelligence</strong>
                  <span>OCR + rule-based verification</span>
                </div>
              </div>

              <ul className="ai-list">
                <li><CheckIcon /> 8,921 documents automatically verified</li>
                <li><CheckIcon /> 742 deficiencies detected</li>
                <li><CheckIcon /> 214 duplicate/inconsistent records flagged</li>
                <li><CheckIcon /> Human approval required for final decisions</li>
              </ul>

              <button
                className="secondary-btn"
                style={{ width: "100%", marginTop: 14 }}
                onClick={() => setPage("verification")}
              >
                Open Verification Queue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Verification({ notify, setSelectedApplication }) {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Verification Queue</h1>
          <p>AI-assisted document scrutiny and deficiency management.</p>
        </div>

        <div className="search-box">
          <SearchIcon />
          <input placeholder="Search application..." />
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Applications Requiring Action</h2>
          <span>1,284 pending</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Application ID</th>
                <th>Scheme</th>
                <th>AI Score</th>
                <th>AI Status</th>
                <th>Risk</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {adminApplications.map((app) => (
                <tr key={app.id}>
                  <td>
                    <strong>{app.applicant}</strong>
                  </td>
                  <td>{app.id}</td>
                  <td>{app.scheme}</td>
                  <td>
                    <span className="score">{app.score}%</span>
                  </td>
                  <td>
                    <StatusBadge type={getStatusType(app.status)}>
                      {app.status}
                    </StatusBadge>
                  </td>
                  <td>{app.risk}</td>
                  <td>
                    <button
                      className="secondary-btn"
                      onClick={() => setSelectedApplication(app)}
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ai-card" style={{ marginTop: 16 }}>
        <div className="ai-head">
          <div className="ai-icon">
            <BrainIcon />
          </div>
          <div>
            <strong>Human-in-the-loop verification</strong>
            <span>
              AI flags inconsistencies and extracts information; authorized officials
              retain final approval authority.
            </span>
          </div>
        </div>

        <button
          className="primary-btn"
          style={{ marginTop: 15 }}
          onClick={() => notify("AI verification batch started")}
        >
          Run AI Batch Verification
        </button>
      </div>
    </>
  );
}

function Selection({ notify }) {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id]
    );
  };

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Selection & Screening</h1>
          <p>Review AI-assisted eligibility and merit indicators before final decision.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => notify(`${selected.length} application(s) moved for approval`)}
        >
          Move to Final Approval
        </button>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Eligible Applicants</h2>
          <span>AI-assisted screening</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>Applicant</th>
                <th>Scheme</th>
                <th>Eligibility</th>
                <th>Merit Indicator</th>
                <th>Documents</th>
              </tr>
            </thead>

            <tbody>
              {adminApplications.map((app) => (
                <tr key={app.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.includes(app.id)}
                      onChange={() => toggle(app.id)}
                    />
                  </td>
                  <td>
                    <strong>{app.applicant}</strong>
                  </td>
                  <td>{app.scheme}</td>
                  <td>
                    <span className="ai-check">
                      <CheckIcon /> Eligible
                    </span>
                  </td>
                  <td>
                    <span className="score">{app.score}/100</span>
                  </td>
                  <td>
                    <span className="ai-check">
                      <CheckIcon /> Verified
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ai-card" style={{ marginTop: 16 }}>
        <div className="ai-head">
          <div className="ai-icon">
            <BrainIcon />
          </div>
          <div>
            <strong>Transparent decision support</strong>
            <span>
              Approved scheme criteria are converted into configurable rules. AI
              supports screening but does not independently make the final selection.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Analytics() {
  const bars = [
    [55, 70],
    [70, 90],
    [48, 65],
    [78, 100],
    [62, 84],
    [82, 95],
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Scheme Analytics</h1>
          <p>Monitor application volume, processing and scheme performance.</p>
        </div>
      </div>

      <div className="cards">
        <Stat title="Processing Time" value="4.2d" meta="Average current cycle" icon={<ChartIcon />} />
        <Stat title="Verification Rate" value="69.4%" meta="AI-assisted" icon={<BrainIcon />} />
        <Stat title="Deficiency Rate" value="5.8%" meta="Applications flagged" icon={<AlertIcon />} />
        <Stat title="Completion Rate" value="91.2%" meta="Post-selection workflow" icon={<CheckIcon />} />
      </div>

      <div className="grid-2">
        <div className="panel">
          <div className="panel-head">
            <h2>Application Processing</h2>
            <span>Last 6 periods</span>
          </div>

          <div className="panel-body">
            <div className="metric-bars">
              {bars.map(([a, b], i) => (
                <div className="bar-group" key={i}>
                  <div className="bar" style={{ height: `${a}%` }} />
                  <div className="bar selected" style={{ height: `${b}%` }} />
                  <div className="bar-label">P{i + 1}</div>
                </div>
              ))}
            </div>

            <div className="legend">
              <span>
                <i />
                Applications
              </span>
              <span>
                <i className="green" />
                AI Verified
              </span>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>System Impact</h2>
            <span>MVP indicators</span>
          </div>

          <div className="panel-body">
            {[
              ["Manual document checks reduced", "58%"],
              ["Incomplete applications detected", "742"],
              ["Potential duplicates flagged", "214"],
              ["Applications with real-time status", "100%"],
              ["Scheme rules configurable", "Yes"],
            ].map(([label, value]) => (
              <div className="application-row" key={label}>
                <div className="row-top">
                  <div className="row-title">{label}</div>
                  <div className="score">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ApplicationModal({ scheme, onClose, notify }) {
  const [uploaded, setUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    setSubmitted(true);

    setTimeout(() => {
      notify("Application submitted successfully");
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-head">
          <div>
            <h2>{scheme.title}</h2>
            <div style={{ color: "#89929d", fontSize: 9, marginTop: 3 }}>
              Application • {scheme.id}
            </div>
          </div>

          <button className="close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 15px" }}>
              <div className="result-circle" style={{ margin: "0 auto" }}>
                <CheckIcon />
              </div>
              <div className="result-title">Application Submitted</div>
              <div
                style={{
                  fontSize: 10,
                  color: "#8b949e",
                  marginTop: 6,
                }}
              >
                Application ID: MTA/{scheme.id}/2026/00327
              </div>
            </div>
          ) : (
            <>
              <div className="success-box">
                <strong>AI pre-check:</strong> Based on the sample profile, the
                applicant appears eligible. Final verification will occur after
                submission.
              </div>

              <div className="form-grid">
                <div className="field">
                  <label>Full Name</label>
                  <input defaultValue="Aarav Kumar" />
                </div>

                <div className="field">
                  <label>Mobile Number</label>
                  <input defaultValue="+91 98XXXXXX21" />
                </div>

                <div className="field">
                  <label>Email Address</label>
                  <input defaultValue="aarav@example.com" />
                </div>

                <div className="field">
                  <label>ST Certificate Number</label>
                  <input defaultValue="ST/UP/2026/XXXXX" />
                </div>
              </div>

              <h3 style={{ fontSize: 12, margin: "23px 0 12px" }}>
                Required Documents
              </h3>

              <div className="upload-grid">
                {[
                  "ST Certificate",
                  "Income Certificate",
                  "Academic Marksheet",
                  "Identity Proof",
                ].map((doc) => (
                  <div
                    className={`upload ${uploaded ? "complete" : ""}`}
                    key={doc}
                    onClick={() => setUploaded(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="upload-icon">
                      {uploaded ? <CheckIcon /> : <UploadIcon />}
                    </div>
                    <strong>{doc}</strong>
                    <span>{uploaded ? "Verified by AI OCR" : "Click to upload"}</span>
                  </div>
                ))}
              </div>

              <div className="ai-card" style={{ marginTop: 15 }}>
                <div className="ai-head">
                  <div className="ai-icon">
                    <BrainIcon />
                  </div>
                  <div>
                    <strong>AI Document Check</strong>
                    <span>
                      OCR extracts fields and checks document completeness,
                      consistency and required information.
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 8,
                  marginTop: 20,
                }}
              >
                <button className="secondary-btn" onClick={onClose}>
                  Cancel
                </button>

                <button
                  className="primary-btn"
                  disabled={!uploaded}
                  onClick={submit}
                  style={{
                    opacity: uploaded ? 1 : 0.5,
                  }}
                >
                  Submit Application
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ApplicationDetails({ application, onClose, notify }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-head">
          <div>
            <h2>Application Details</h2>
            <div style={{ color: "#89929d", fontSize: 9, marginTop: 3 }}>
              {application.id}
            </div>
          </div>

          <button className="close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="row-top">
            <div>
              <div className="row-title" style={{ fontSize: 15 }}>
                {application.scheme || application.scheme}
              </div>
              <div className="row-sub">
                Submitted on {application.submitted || "24 Sep 2026"}
              </div>
            </div>

            <StatusBadge type={getStatusType(application.status)}>
              {application.status}
            </StatusBadge>
          </div>

          <h3 style={{ fontSize: 12, margin: "24px 0 15px" }}>
            Application Workflow
          </h3>

          <div className="timeline">
            <TimelineItem title="Application Submitted" date="24 Sep 2026" done />
            <TimelineItem title="Document Verification" date="AI verification completed" done />
            <TimelineItem
              title="Scrutiny / Human Review"
              date="Currently in progress"
              done={application.status === "Selected"}
            />
            <TimelineItem
              title="Selection"
              date={application.status === "Selected" ? "Selected" : "Pending"}
              done={application.status === "Selected"}
            />
            <TimelineItem title="Post-Selection Management" date="Pending" />
          </div>

          {application.status === "Deficiency Raised" && (
            <div
              style={{
                marginTop: 5,
                background: "#fff7e6",
                border: "1px solid #f0dfb8",
                borderRadius: 8,
                padding: 13,
                fontSize: 10,
                color: "#765a19",
              }}
            >
              <strong>Deficiency detected</strong>
              <div style={{ marginTop: 5 }}>
                Income certificate requires resubmission. Upload a valid
                certificate to continue verification.
              </div>

              <button
                className="primary-btn"
                style={{ marginTop: 10 }}
                onClick={() => notify("Deficiency response submitted")}
              >
                Respond to Deficiency
              </button>
            </div>
          )}

          <div
            className="ai-card"
            style={{
              marginTop: 16,
            }}
          >
            <div className="ai-head">
              <div className="ai-icon">
                <BrainIcon />
              </div>
              <div>
                <strong>AI verification summary</strong>
                <span>
                  Documents processed • fields extracted • rule checks completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ title, date, done }) {
  return (
    <div className="timeline-item">
      <div className={`timeline-dot ${done ? "done" : ""}`}>
        {done && (
          <span style={{ color: "white", fontSize: 7, position: "relative", top: -1 }}>
            ✓
          </span>
        )}
      </div>

      <div className="timeline-text">
        <strong>{title}</strong>
        <span>{date}</span>
      </div>
    </div>
  );
}