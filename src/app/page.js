"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ThreeSphere from "@/components/ThreeSphere";
import ScrollReveal from "@/components/ScrollReveal";
import SdlcStepper from "@/components/SdlcStepper";
import CalendarScheduler from "@/components/CalendarScheduler";
import IntakePlanner from "@/components/IntakePlanner";
import ServiceDetailDrawer from "@/components/ServiceDetailDrawer";
import architectImage from "@/assets/Ganesh Singha.png";

// SVG Tech Stack Logo components
const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
    <path d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
    <path d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
    <path d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" />
    <path d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" />
    <path d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" />
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
    <path d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zM28 39h10v11H28V39zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 54h10v11H28V54zm15 0h10v11H43V54zm0-15h10v11H43V39zm15 15h10v11H58V54zm0-15h10v11H58V39zm15 15h10v11H73V54zm0-15h10v11H73V39zm15 15h10v11H88V54zm0-15h10v11H88V39zm0-15h10v11H88V24z" />
  </svg>
);

const AwsLogo = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <text x="12" y="11" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="10.5" letterSpacing="-0.02em" textAnchor="middle" fill="currentColor" stroke="none">aws</text>
    <path d="M3.5 15c3.2 2.5 8.8 4 15 1" strokeWidth="1.8" />
    <path d="M15.5 15.5l3 1l-1.2 3" strokeWidth="1.8" />
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
    <path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545z" />
    <path d="M78.67 66H49.511C41.394 66 35 72.868 35 81.019v27.798c0 7.912 6.632 13.856 14.555 15.176 5.014.835 10.195 1.215 15.187 1.191 4.99-.023 9.612-.448 13.805-1.191C90.902 121.812 93 117.242 93 108.817V98H64v-4h40.224c8.484 0 15.914-5.108 18.237-14.811 2.681-11.12 2.8-17.919 0-29.53C120.386 41.017 115.431 35 106.946 35H97v13.048C97 57.685 88.572 66 78.67 66zm1.838 39.11c3.026 0 5.478 2.479 5.478 5.545 0 3.079-2.451 5.581-5.478 5.581-3.015 0-5.479-2.502-5.479-5.581.001-3.066 2.465-5.545 5.479-5.545z" />
  </svg>
);

const FlutterLogo = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
    <path d="M14.314 0L2.3 12l3.6 3.6 15.8-15.6h-7.386zM21.7 12l-3.6-3.6-9.1 9L12.6 21 21.7 12z" />
  </svg>
);

const PostgresLogo = () => (
  <svg viewBox="0 0 128 128" width="100%" height="100%" fill="currentColor">
    <path d="M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958-1.032-.047-2.08.061-3.109.192-1.243.158-2.471.438-3.711.623-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064 1.159-2.348 2.151-4.781 3.176-7.194 1.696-3.998 3.051-8.12 4.173-12.309 1.075-4.011 1.995-8.066 2.284-12.227.116-1.662.196-3.331.187-4.995-.008-1.327-.151-2.656-.284-3.979-.15-1.516-.608-2.953-1.242-4.336-.836-1.822-2.132-3.317-3.496-4.737-1.092-1.137-2.293-2.173-3.484-3.208-1.698-1.477-3.607-2.656-5.59-3.703a32.18 32.18 0 00-7.09-2.75c-1.493-.381-3.02-.664-4.532-.966-.544-.11-1.089-.337-1.633-.337H85.086c-.37 0-.737.191-1.11.233-2.452.273-4.875.735-7.228 1.464-.88.273-1.684.101-2.52.024-.641-.059-1.271-.231-1.912-.263-2.442-.122-4.887-.301-7.328-.275-2.339.024-4.654.409-6.918 1.052-1.895.538-3.749 1.195-5.447 2.191-.727.426-1.303.346-2.055.129-2.527-.729-5.072-1.414-7.639-1.989-1.6-.358-3.245-.536-4.879-.707a57.214 57.214 0 00-4.718-.294c-1.538-.033-3.087-.032-4.618.104a30.16 30.16 0 00-7.158 1.513 23.813 23.813 0 00-7.086 3.865c-2.167 1.715-3.905 3.809-5.303 6.2-1.473 2.523-2.483 5.224-3.111 8.061-.34 1.537-.555 3.117-.788 4.678-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356.139 1.089.262 2.187.446 3.268.291 1.711.636 3.417.988 5.117a324.86 324.86 0 001.546 7.111c.396 1.72.847 3.43 1.319 5.131.721 2.598 1.431 5.201 2.246 7.77.757 2.387 1.624 4.74 2.484 7.093 1.191 3.255 2.617 6.405 4.327 9.424 1.479 2.614 3.169 5.062 5.436 7.076 1.494 1.327 3.157 2.347 5.093 2.857 1.521.4 3.067.448 4.624.129a10.979 10.979 0 004.824-2.311c.163-.134.342-.236.535.01.735.931 1.719 1.552 2.748 2.089 2.777 1.448 5.803 1.882 8.877 2.059.744.043 1.496-.064 2.246-.085 1.461-.04 2.881-.325 4.278-.729.732-.212 1.447-.481 2.192-.732.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901.151 1.627.299 3.255.493 4.877.135 1.118.275 2.245.538 3.336a38.176 38.176 0 002.158 6.428 13.81 13.81 0 003.9 5.185c2.22 1.836 4.822 2.619 7.632 2.764 1.162.061 2.357.004 3.501-.204a49.01 49.01 0 005.387-1.275c3.591-1.084 6.695-2.956 9.014-5.981 1.32-1.724 2.404-3.589 3.1-5.648.574-1.701 1.115-3.419 1.545-5.16.34-1.372.508-2.787.715-4.188.137-.927.219-1.863.305-2.797.14-1.517.283-3.033.384-4.553.07-1.058.067-2.121.109-3.181.013-.323.065-.644.095-.966.028-.298.178-.401.482-.396 1.071.016 2.144.044 3.212-.004 1.197-.054 2.405-.105 3.583-.303a56.542 56.542 0 004.99-1.067c1.943-.508 3.725-1.418 5.44-2.455 1.998-1.207 3.819-2.623 5.297-4.447 1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369-2.869 3.163-6.468 5.082-10.585 6.027-1.564.358-3.178.544-4.779.692a32.093 32.093 0 01-4.114.097c-1.006-.038-2.004-.268-3.032-.416-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564-.146 1.151-.328 2.298-.481 3.449-.143 1.072-.248 2.149-.407 3.219-.245 1.64-.479 3.284-.799 4.911-.384 1.945-.973 3.829-1.934 5.583-1.172 2.141-2.834 3.772-4.949 4.98-2.18 1.246-4.563 1.894-6.979 2.436-1.71.384-3.472.447-5.204.291-3.004-.272-5.568-1.557-7.506-3.886-1.85-2.223-3.102-4.771-3.55-7.655a63.102 63.102 0 01-.491-4.136 108.067 108.067 0 01-.299-4.62 250.203 250.203 0 01-.197-5.871c-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2a12.392 12.392 0 01-4.798 1.353c-1.318.1-2.653.191-3.965.086-2.151-.173-4.3-.51-6.226-1.569-.781-.43-1.596-.953-2.134-1.64-1.29-1.646-.672-3.726 1.273-4.727 1.344-.693 2.811-.982 4.268-1.319a44.368 44.368 0 003.761-1.029c1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151-1.439-.136-2.812-.532-4.125-1.114-1.124-.497-1.141-.551-1.965.343-1.376 1.494-2.714 3.023-4.062 4.542-.992 1.117-1.978 2.241-2.965 3.361-.978 1.108-1.894 2.279-2.947 3.31-1.564 1.531-3.449 2.452-5.698 2.348-1.443-.066-2.764-.572-3.952-1.399-2.452-1.708-4.104-4.097-5.608-6.606-1.927-3.215-3.406-6.64-4.672-10.159-.876-2.432-1.756-4.866-2.521-7.333-.831-2.681-1.56-5.396-2.277-8.11a157.373 157.373 0 01-1.482-6.182 216.117 216.117 0 01-1.464-7.079c-.298-1.599-.471-3.221-.712-4.831-.325-2.17-.385-4.36-.267-6.539.105-1.963.387-3.921.667-5.871.388-2.698 1.277-5.244 2.556-7.648.783-1.473 1.755-2.812 2.879-4.056 1.845-2.042 4.078-3.518 6.562-4.626 1.736-.774 3.57-1.24 5.439-1.604 2.774-.54 5.573-.519 8.373-.461 1.224.025 2.443.248 3.666.369 2.633.262 5.214.816 7.762 1.5 1.857.498 3.676 1.143 5.518 1.703.185.056.456.051.607-.048 2.496-1.629 5.224-2.704 8.125-3.319 1.101-.233 2.237-.335 3.363-.407 1.369-.087 2.749-.167 4.115-.088 1.642.094 3.276.336 4.908.56.792.108 1.565.383 2.359.458.38.036.783-.242 1.185-.335 2.049-.473 4.089-1 6.156-1.374 1.539-.278 3.111-.409 4.676-.499 1.745-.1 3.503-.173 5.247-.089a36.66 36.66 0 016.555.923c2.677.623 5.245 1.528 7.686 2.784 1.824.938 3.558 2.026 5.119 3.364 1.023.878 2.07 1.745 2.994 2.723 1.14 1.206 2.303 2.413 3.018 3.958.538 1.165.922 2.371 1.028 3.647.132 1.586.292 3.178.277 4.766-.014 1.519-.221 3.037-.368 4.552-.334 3.454-1.085 6.833-1.997 10.167a116.972 116.972 0 01-2.589 8.17c-.879 2.481-1.893 4.917-2.918 7.343a80.07 80.07 0 01-2.458 5.303c-1.677 3.286-3.421 6.538-5.438 9.633-.348.535-.678 1.083-1.018 1.629.88.594 1.877.803 2.881.911.955.104 1.929.166 2.883.095 1.527-.113 3.049-.331" />
  </svg>
);

const GithubLogo = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const NextLogo = () => (
  <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="64" cy="64" r="62" />
    <path fill="currentColor" stroke="none" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z" />
    <path fill="currentColor" stroke="none" d="M81.778 38.4h8.533v51.2h-8.533z" />
  </svg>
);

const TechLogo = ({ type }) => {
  switch (type) {
    case "react":
      return <ReactLogo />;
    case "java":
      return <JavaLogo />;
    case "docker":
      return <DockerLogo />;
    case "aws":
      return <AwsLogo />;
    case "python":
      return <PythonLogo />;
    case "flutter":
      return <FlutterLogo />;
    case "postgres":
      return <PostgresLogo />;
    case "github":
      return <GithubLogo />;
    case "next":
      return <NextLogo />;
    default:
      return null;
  }
};

const glyphsData = [
  { type: "react", top: "8%", left: "6%", factor: -50 },
  { type: "next", top: "15%", left: "88%", factor: 70 },
  { type: "java", top: "25%", left: "12%", factor: -90 },
  { type: "docker", top: "33%", left: "80%", factor: 40 },
  { type: "aws", top: "42%", left: "10%", factor: -80 },
  { type: "python", top: "48%", left: "84%", factor: 60 },
  { type: "flutter", top: "58%", left: "8%", factor: -100 },
  { type: "postgres", top: "66%", left: "88%", factor: 50 },
  { type: "github", top: "74%", left: "14%", factor: -70 },
  { type: "react", top: "82%", left: "82%", factor: 90 },
  { type: "docker", top: "90%", left: "6%", factor: -60 },
  { type: "next", top: "95%", left: "86%", factor: 80 }
];

export default function Home() {
  const cardsRef = useRef([]);
  const metricsRef = useRef(null);
  const timelineRef = useRef(null);
  const nodeRefs = useRef([]);
  const teamRef = useRef(null);
  const [spineFill, setSpineFill] = useState(0);
  const [activatedCount, setActivatedCount] = useState(0);
  const [apiSpeed, setApiSpeed] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [preselectedFormNeed, setPreselectedFormNeed] = useState(null);
  const [securityScore, setSecurityScore] = useState(0);
  const [uptime, setUptime] = useState(0.0);

  // 1. Mouse movement tracking for the radial-glow borders on service cards
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  // 2. Animate counter metrics on view
  useEffect(() => {
    let speedTimer, securityTimer, uptimeTimer;

    // Simulate count up for trust verification metrics
    const startCountUp = () => {
      // Speed count down to 42ms
      let curSpeed = 300;
      speedTimer = setInterval(() => {
        curSpeed = Math.max(42, curSpeed - 12);
        setApiSpeed(curSpeed);
        if (curSpeed === 42) clearInterval(speedTimer);
      }, 30);

      // Security score count up to 100%
      let curSec = 0;
      securityTimer = setInterval(() => {
        curSec = Math.min(100, curSec + 4);
        setSecurityScore(curSec);
        if (curSec === 100) clearInterval(securityTimer);
      }, 25);

      // Uptime count up to 99.99%
      let curUptime = 98.0;
      uptimeTimer = setInterval(() => {
        curUptime = Math.min(99.99, curUptime + 0.11);
        setUptime(parseFloat(curUptime.toFixed(2)));
        if (curUptime >= 99.99) clearInterval(uptimeTimer);
      }, 40);
    };

    // Delay counter animation slightly for page loading entry
    const delayTimer = setTimeout(startCountUp, 500);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(speedTimer);
      clearInterval(securityTimer);
      clearInterval(uptimeTimer);
    };
  }, []);

  // 3. Scroll-driven animations: timeline (with LERP physics)
  useEffect(() => {
    const timelineContainer = timelineRef.current;
    
    let currentFill = 0;
    let targetFill = 0;
    
    let animFrame = null;

    const animate = () => {
      let isAnimating = false;

      // Timeline spine LERP
      const diffFill = targetFill - currentFill;
      if (Math.abs(diffFill) > 0.001) {
        currentFill += diffFill * 0.06;
        setSpineFill(currentFill);
        isAnimating = true;
      } else {
        currentFill = targetFill;
        setSpineFill(currentFill);
      }

      if (isAnimating) {
        animFrame = requestAnimationFrame(animate);
      } else {
        animFrame = null;
      }
    };

    const compute = () => {
      const viewportHeight = window.innerHeight;

      // 1. Timeline spine computation
      if (timelineContainer) {
        const rect = timelineContainer.getBoundingClientRect();
        const triggerY = viewportHeight * 0.65;
        const progress = Math.max(0, Math.min(1, (triggerY - rect.top) / rect.height));
        targetFill = progress;

        // Discrete node activation
        let count = 0;
        nodeRefs.current.forEach((node) => {
          if (!node) return;
          const nr = node.getBoundingClientRect();
          if (nr.top + nr.height / 2 <= triggerY) count++;
        });
        setActivatedCount(count);
      }

      if (!animFrame) {
        animFrame = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      compute();
    };

    compute();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  const services = [
    {
      id: "AICore",
      title: "Next-Gen AI Core Architecture",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      description: "Production LLM integration, advanced vector databases, and scalable multi-agent frameworks optimized for latency.",
      tags: ["LLMs", "Vector DBs", "Semantic Search", "LangChain"],
      deliverables: [
        "Custom LLM API Integrations",
        "Optimized Vector DB Schemas",
        "System Latency Audits & Profiling",
        "Data Privacy & Compliance Guardrails"
      ]
    },
    {
      id: "AIAgents",
      title: "Autonomous Agent Orchestration",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      description: "Retrieval-Augmented Generation (RAG) pipelines, semantic caching, fine-tuning infrastructure, and tool-using pipelines.",
      tags: ["RAG Pipelines", "Semantic Cache", "Fine-Tuning", "CrewAI"],
      deliverables: [
        "Custom Multi-Agent Workflows",
        "Semantic Cache Implementations",
        "RAG Pipeline Query Routing",
        "Fine-Tuning Infrastructure Setup"
      ]
    },
    {
      id: "FullStack",
      title: "Full-Stack Ecosystems & Cloud",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      description: "Distributed architectures, microservices, secure container orchestration, and serverless auto-scaling setups.",
      tags: ["Next.js", "Node.js", "Kubernetes", "DevOps"],
      deliverables: [
        "Decoupled REST/GraphQL APIs",
        "Containerized Deployment Specs",
        "Database Clustering & Replication",
        "Auto-scaling Serverless Layouts"
      ]
    },
    {
      id: "Mobile",
      title: "Cross-Platform Mobile Engineering",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      description: "High-performance native-speed mobile applications for iOS and Android using clean modular components.",
      tags: ["Flutter", "React Native", "iOS & Android", "Offline Sync"],
      deliverables: [
        "Universal iOS & Android Codebase",
        "Secure Offline Data Sync Engines",
        "Native Device API Integrations",
        "App Store & Google Play Publishing"
      ]
    },
    {
      id: "Website",
      title: "Website Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      description: "High-performance, SEO-engineered web applications optimized for speed, accessibility, and clean conversion paths.",
      tags: ["Next.js", "Vite", "SEO Engine", "Web Performance"],
      deliverables: [
        "Jamstack / Server-Side Rendered Pages",
        "Advanced SEO Audits & Structured Data",
        "Core Web Vitals Speed Optimization",
        "Lead Conversion Funnels & Telemetry"
      ]
    },
    {
      id: "Software",
      title: "Software Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
          <line x1="12" y1="2" x2="12" y2="4"></line>
        </svg>
      ),
      description: "Custom enterprise software engines, secure SaaS platforms, and distributed systems architected for scale.",
      tags: ["APIs", "Microservices", "Docker", "SaaS Systems"],
      deliverables: [
        "Custom SaaS Platform Architectures",
        "Secure User Role & Access Controls",
        "Third-party Integrations & Webhooks",
        "Robust Systems Telemetry Dashboards"
      ]
    }
  ];

  const team = [
    {
      name: "Debayan Chakraborty",
      role: "UI / UX & Graphic Designer",
      specialties: ["UI/UX Engineering", "Creative Design Strategy", "Global Client Management"],
      desc: "Architecting interactive digital products that resonate with users and drive commercial value for global partners."
    },
    {
      name: "Ganesh Singha",
      role: "Full-Stack Engineer",
      specialties: ["Autonomous AI Pipelines", "Cloud Infrastructure", "Mobile Architectures"],
      desc: "Designing and scaling low-latency agentic applications and secure distributed cloud systems."
    },
    {
      name: "Aniket Karmakar",
      role: "Prompt & Loop Engineer",
      specialties: ["Core Distributed Systems", "Backend Infrastructure", "Web Ecosystems"],
      desc: "Structuring high-availability APIs, real-time sync systems, and optimized database systems."
    }
  ];

  const techStack = [
    {
      title: "AI & Data Core",
      color: "var(--accent-primary)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.25))" }}>
          <path d="M12 2a5 5 0 0 0-5 5v3.5a1.5 1.5 0 0 1-1.5 1.5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.5A1.5 1.5 0 0 1 6 19.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.5a1.5 1.5 0 0 1 1.5-1.5H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.5a1.5 1.5 0 0 1-1.5-1.5V7a5 5 0 0 0-5-5z" />
          <path d="M9 9h.01" />
          <path d="M15 9h.01" />
          <path d="M8 13h8" />
          <path d="M12 9v4" />
        </svg>
      ),
      techs: ["LangChain", "LlamaIndex", "Vector DBs", "Pinecone", "Semantic Cache", "Multi-Agent Crews", "Fine-Tuning"]
    },
    {
      title: "Web Ecosystems",
      color: "var(--accent-secondary)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.25))" }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="13" x2="22" y2="13" />
          <line x1="6" y1="21" x2="18" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "WebSockets", "PWAs"]
    },
    {
      title: "DevOps & Cloud",
      color: "var(--accent-primary)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.25))" }}>
          <path d="M18 10h-.79A7 7 0 0 0 4 10h-.75a4 4 0 0 0 0 8h14.75a4 4 0 0 0 0-8z" />
          <path d="M12 18v-4" />
          <path d="M8 14h8" />
        </svg>
      ),
      techs: ["Docker", "Kubernetes", "AWS CDK", "Terraform", "GitHub Actions", "OpenTelemetry", "Prometheus"]
    },
    {
      title: "Mobile Engineering",
      color: "var(--accent-secondary)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.25))" }}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      techs: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Offline-First Sync", "Push Notifications"]
    },
    {
      title: "Backend Ecosystems",
      color: "var(--accent-primary)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.25))" }}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      techs: ["Node.js", "Go (Golang)", "Python (FastAPI)", "Spring Boot", "RabbitMQ / Kafka"]
    },
    {
      title: "Database",
      color: "var(--accent-secondary)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.25))" }}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      techs: ["PostgreSQL", "MongoDB", "Redis Cache", "SQLite", "Prisma ORM", "Supabase", "DynamoDB"]
    }
  ];

  return (
    <div className="fade-in-section">
      {/* 1. HERO SECTION */}
      <section id="home" style={{ padding: "6rem 0 4rem 0", position: "relative", overflow: "hidden" }}>
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <ScrollReveal direction="left" duration={900}>
            <div>
              <span className="section-tag" style={{ animation: "pulse-glow 2s infinite" }}>
                Elite Systems Agency
              </span>
              <h1 style={{ fontSize: "3.5rem", lineHeight: "1.1", marginBottom: "1.5rem" }}>
                Zero Fluff.<br />
                Zero Theories.<br />
                <span className="gradient-text">Just Production-Ready Code.</span>
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "2.5rem", maxWidth: "480px" }}>
                Zero Theorys designs and deploys next-gen AI pipelines, scalable clouds, and cross-platform systems for international enterprises.
              </p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Link href="#consultation" className="btn-primary">
                  Book an MVP Consultation
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={300} duration={1000}>
            <div style={{ height: "450px", width: "100%", position: "relative" }}>
              <ThreeSphere />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CORE SERVICE MATRIX */}
      <section id="services" className="blueprint-grid-section" style={{ padding: "6rem 0", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        {/* Blueprint Decorative Coordinates */}
        <div className="blueprint-coord" style={{ top: "2rem", left: "2rem" }}>[SYS_REF: ZT-CAP-MATRIX]</div>
        <div className="blueprint-coord" style={{ top: "2rem", right: "2rem" }}>[COORD: 22.4983° N, 88.3725° E]</div>
        <div className="blueprint-coord" style={{ bottom: "2rem", left: "2rem" }}>[ENV: PROD_STABLE]</div>
        <div className="blueprint-coord" style={{ bottom: "2rem", right: "2rem" }}>[NET_LATENCY: 42MS]</div>

        {/* Parallax Floating Tech Glyphs */}
        <div className="floating-glyphs-container">
          {glyphsData.map((g, idx) => (
            <div
              key={idx}
              className="tech-glyph"
              style={{
                top: g.top,
                left: g.left,
                transform: `translateY(${spineFill * g.factor}px)`,
                animationDelay: `${idx * 0.4}s`
              }}
            >
              <TechLogo type={g.type} />
            </div>
          ))}
        </div>

        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Capabilities Matrix</span>
              <h2 className="section-title">Technical Service Engine</h2>
              <p className="section-subtitle">We deploy concrete systems, replacing abstract speculation with optimized code.</p>
            </div>
          </ScrollReveal>

          <div className="timeline-container" ref={timelineRef}>
            {/* Animated Electric Spine */}
            <svg className="timeline-spine-line" style={{ width: "2px", height: "100%", overflow: "visible" }}>
              <line x1="1" y1="0" x2="1" y2="100%" stroke="var(--border-light)" strokeWidth="2" />
              <line
                className="timeline-spine-pulse"
                x1="1"
                y1="0"
                x2="1"
                y2={`${spineFill * 100}%`}
                stroke="var(--accent-primary)"
                strokeWidth="2"
              />
            </svg>

            {/* Background SVG Circuit Paths */}
            <svg className="circuit-paths-container" viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
              {/* Path 1: Top-Left */}
              <path
                className="circuit-path-bg"
                d="M 500 150 L 320 150 L 320 280 L 120 280"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={100 - Math.min(100, Math.max(0, spineFill * 3 * 100))}
              />
              <circle
                className={`circuit-node-dot ${spineFill > 0.25 ? "active" : ""}`}
                cx="120"
                cy="280"
                r="3"
              />

              {/* Path 2: Top-Right */}
              <path
                className="circuit-path-bg"
                d="M 500 300 L 680 300 L 680 430 L 880 430"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={100 - Math.min(100, Math.max(0, (spineFill - 0.2) * 3 * 100))}
              />
              <circle
                className={`circuit-node-dot ${spineFill > 0.45 ? "active" : ""}`}
                cx="880"
                cy="430"
                r="3"
              />

              {/* Path 3: Mid-Left */}
              <path
                className="circuit-path-bg"
                d="M 500 500 L 320 500 L 320 630 L 150 630"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={100 - Math.min(100, Math.max(0, (spineFill - 0.4) * 3 * 100))}
              />
              <circle
                className={`circuit-node-dot ${spineFill > 0.65 ? "active" : ""}`}
                cx="150"
                cy="630"
                r="3"
              />

              {/* Path 4: Bottom-Right */}
              <path
                className="circuit-path-bg"
                d="M 500 700 L 680 700 L 680 830 L 850 830"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={100 - Math.min(100, Math.max(0, (spineFill - 0.6) * 3 * 100))}
              />
              <circle
                className={`circuit-node-dot ${spineFill > 0.85 ? "active" : ""}`}
                cx="850"
                cy="830"
                r="3"
              />
            </svg>

            {services.map((svc, i) => {
              const isEven = i % 2 === 0;
              const isHovered = hoveredService === i;
              const isActivated = i < activatedCount;

              return (
                <div key={svc.title} className="timeline-row">
                  {/* Left Column */}
                  <div className="timeline-col-left">
                    {isEven && (
                      <div className={`timeline-card-reveal ${isActivated ? "revealed" : ""}`} style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        <div
                          onMouseEnter={() => setHoveredService(i)}
                          onMouseLeave={() => setHoveredService(null)}
                          onMouseMove={(e) => handleMouseMove(e, i)}
                          onClick={() => setSelectedService(svc)}
                          ref={(el) => (cardsRef.current[i] = el)}
                          className="glass-card timeline-card-wrapper"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="glass-card-content">
                            <div className="card-watermark">{String(i + 1).padStart(2, '0')}</div>
                            <div className="card-status-tag">
                              <span className="card-status-dot"></span>
                              SYS_INTEGRITY: PROD_READY
                            </div>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
                              <div className="glass-icon-container">
                                {svc.icon}
                              </div>
                              <h3 style={{ fontSize: "1.5rem" }}>{svc.title}</h3>
                            </div>
                            <p style={{ marginBottom: "0.5rem", fontSize: "1.05rem", lineHeight: "1.6" }}>{svc.description}</p>
                          </div>
                        </div>

                        {/* Wavy Connector Line - Flows OUTWARD (Spine to Left Card) */}
                        <svg className="timeline-connector-svg" viewBox="0 0 40 20">
                          {/* Base Wire Channel */}
                          <path
                            d="M 40 10 C 30 14, 10 6, 0 10"
                            stroke="var(--border-light)"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          {/* Electric Current Pulse */}
                          <path
                            pathLength="1"
                            className={`timeline-connector-pulse timeline-connector-draw ${isHovered ? "active" : ""} ${isActivated ? "drawn" : ""}`}
                            d="M 40 10 C 30 14, 10 6, 0 10"
                            stroke="var(--accent-primary)"
                            strokeWidth="2.5"
                            fill="none"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Middle Column (Node) */}
                  <div className="timeline-col-middle">
                    <div
                      ref={(el) => (nodeRefs.current[i] = el)}
                      className={`timeline-node ${isHovered || isActivated ? "active" : ""}`}
                    />
                  </div>

                  {/* Right Column */}
                  <div className="timeline-col-right">
                    {!isEven && (
                      <div className={`timeline-card-reveal ${isActivated ? "revealed" : ""}`} style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
                        <div
                          onMouseEnter={() => setHoveredService(i)}
                          onMouseLeave={() => setHoveredService(null)}
                          onMouseMove={(e) => handleMouseMove(e, i)}
                          onClick={() => setSelectedService(svc)}
                          ref={(el) => (cardsRef.current[i] = el)}
                          className="glass-card timeline-card-wrapper"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="glass-card-content">
                            <div className="card-watermark">{String(i + 1).padStart(2, '0')}</div>
                            <div className="card-status-tag">
                              <span className="card-status-dot"></span>
                              SYS_INTEGRITY: PROD_READY
                            </div>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
                              <div className="glass-icon-container">
                                {svc.icon}
                              </div>
                              <h3 style={{ fontSize: "1.5rem" }}>{svc.title}</h3>
                            </div>
                            <p style={{ marginBottom: "0.5rem", fontSize: "1.05rem", lineHeight: "1.6" }}>{svc.description}</p>
                          </div>
                        </div>

                        {/* Wavy Connector Line - Flows OUTWARD (Spine to Right Card) */}
                        <svg className="timeline-connector-svg" viewBox="0 0 40 20">
                          {/* Base Wire Channel */}
                          <path
                            d="M 0 10 C 10 6, 30 14, 40 10"
                            stroke="var(--border-light)"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          {/* Electric Current Pulse */}
                          <path
                            pathLength="1"
                            className={`timeline-connector-pulse timeline-connector-draw ${isHovered ? "active" : ""} ${isActivated ? "drawn" : ""}`}
                            d="M 0 10 C 10 6, 30 14, 40 10"
                            stroke="var(--accent-primary)"
                            strokeWidth="2.5"
                            fill="none"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MEET THE ARCHITECTS */}
      <section id="team" style={{
        padding: "6rem 0",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative"
      }}>
        <div className="container" style={{ width: "100%" }}>
          <ScrollReveal direction="up" duration={1200}>
            <div className="section-title-wrap">
              <span className="section-tag">The team</span>
              <h2 className="section-title">Built by founders who ship.</h2>
              <p className="section-subtitle">Three specialists. One shared standard — deliver work that moves the needle.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 250} duration={1400}>
                <div className="glass-card" style={{ display: "flex", flexDirection: "column", height: "100%", textAlign: "center" }}>
                  <div className="glass-card-content" style={{ display: "flex", flexDirection: "column", height: "100%" }}>

                    {/* Architect Portrait Image */}
                    <div className="architect-portrait-container">
                      <Image
                        src={architectImage}
                        alt={member.name}
                        className="architect-portrait-img"
                        placeholder="blur"
                      />
                    </div>

                    <h3 style={{ fontSize: "1.45rem", marginBottom: "0.35rem", color: "var(--text-primary)", fontWeight: "700" }}>{member.name}</h3>

                    <p style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "1rem"
                    }}>
                      {member.role}
                    </p>

                    <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                      {member.desc}
                    </p>

                    {/* Co-founder Badge Tag */}
                    <div style={{ marginTop: "auto", paddingTop: "1rem", display: "flex", justifyContent: "center" }}>
                      <span className="co-founder-badge">
                        Co-Founder
                      </span>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. TECHNOLOGY STACK */}
      <section style={{ padding: "6rem 0", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Technical Foundations</span>
              <h2 className="section-title">Our Technology Stack</h2>
              <p className="section-subtitle">We build with enterprise-grade tools, framework clusters, and automated deployment pipelines.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ gap: "1.5rem" }}>
            {techStack.map((category, i) => (
              <ScrollReveal key={category.title} direction="up" delay={i * 100}>
                <div className="glass-card" style={{ height: "100%" }}>
                  <div className="glass-card-content">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                      {category.icon}
                      <h3 style={{ fontSize: "1.15rem", margin: 0, color: category.color }}>{category.title}</h3>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {category.techs.map((tech) => (
                        <span key={tech} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-light)", padding: "0.25rem 0.65rem", borderRadius: "4px", color: "var(--text-secondary)", fontWeight: "500", transition: "transform 0.2s" }} className="tech-badge-hover">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3.7. SDLC WORKFLOW */}
      <section id="sdlc" style={{
        padding: "6rem 0",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-light)"
      }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Development Pipeline</span>
              <h2 className="section-title">Strict SDLC &amp; Agile Engineering</h2>
              <p className="section-subtitle">Our step-by-step commitment pipeline that takes product requirements from schemas to cloud deploys.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <SdlcStepper />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. TECHNICAL PROOF & CORE METRICS */}
      <section ref={metricsRef} style={{ padding: "6rem 0", background: "var(--bg-tertiary)", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Engineering Quality</span>
              <h2 className="section-title">Technical Trust Metrics</h2>
              <p className="section-subtitle">Our operational baseline and SLA commitments verified through automation pipelines.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {/* Speed card */}
            <ScrollReveal direction="up" delay={0}>
              <div className="glass-card" style={{ textAlign: "center", background: "var(--bg-secondary)", height: "100%" }}>
                <div className="glass-card-content">
                  <span style={{ fontSize: "3.5rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-primary)" }}>
                    {apiSpeed}ms
                  </span>
                  <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.75rem 0" }}>Sub-100ms API Targets</h3>
                  <p style={{ fontSize: "0.9rem" }}>Edge caching, payload compression, and direct serverless runtime tuning ensure lightning-fast responses.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Security card */}
            <ScrollReveal direction="up" delay={150}>
              <div className="glass-card" style={{ textAlign: "center", background: "var(--bg-secondary)", height: "100%" }}>
                <div className="glass-card-content">
                  <span style={{ fontSize: "3.5rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-secondary)" }}>
                    {securityScore}%
                  </span>
                  <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.75rem 0" }}>Automated Vulnerability Scans</h3>
                  <p style={{ fontSize: "0.9rem" }}>Integrated CI/CD static checks (SAST/DAST) prevent security leaks and dependency issues on every commit.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Uptime card */}
            <ScrollReveal direction="up" delay={300}>
              <div className="glass-card" style={{ textAlign: "center", background: "var(--bg-secondary)", height: "100%" }}>
                <div className="glass-card-content">
                  <span style={{ fontSize: "3.5rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-primary)" }}>
                    {uptime}%
                  </span>
                  <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.75rem 0" }}>Serverless Auto-Scaling</h3>
                  <p style={{ fontSize: "0.9rem" }}>Highly available architectures built on multi-region compute node clustering for 100% elastic load scalability.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION ENGINE */}
      <section id="consultation" style={{ padding: "6rem 0", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Conversion Workspace</span>
              <h2 className="section-title">Interactive Consultation Engine</h2>
              <p className="section-subtitle">Zero friction. Select a calendar block for a quick sync, or map out your full target architecture with our project planner.</p>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ alignItems: "start", gap: "2.5rem", marginTop: "3rem" }}>
            {/* Column 1: Live Scheduling */}
            <ScrollReveal direction="left" delay={150}>
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Live Availability Calendar</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    Select a date and reserve a 15-minute slot directly with our engineering architects.
                  </p>
                </div>
                <CalendarScheduler />
              </div>
            </ScrollReveal>

            {/* Column 2: Project Planner */}
            <ScrollReveal direction="right" delay={150}>
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Smart Technical Planner</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    Define your target industry, architectural dependencies, budget levels, and timeline.
                  </p>
                </div>
                <IntakePlanner preselectedNeed={preselectedFormNeed} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Details Slide-Over/Bottom-Sheet Panel */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProject={(svc) => {
          setPreselectedFormNeed(svc.id);
          setSelectedService(null);
          // Smooth scroll down to consultation form section
          const el = document.getElementById("consultation");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </div>
  );
}
