import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-3.5 h-3.5" }: TechIconProps) {
  const normName = name.toLowerCase().trim();

  switch (normName) {
    case "react.js":
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" stroke="#61DAFB">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "next.js":
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" className={`${className} text-text-primary`} fill="currentColor">
          <path d="M127.4 127.4c-4.4 0-8-3.6-8-8V60.6L80.6 119.4H68.8V60.6c0-4.4 3.6-8 8-8s8 3.6 8 8v50.8L120 52.6h11.8v66.8c0 4.4-3.6 8-8 8z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zM16 90C16 49.1 49.1 16 90 16c17.2 0 33 5.9 45.6 15.7L52.8 135.6C29.9 125.1 16 109.2 16 90zm74 74c-17.2 0-33-5.9-45.6-15.7l82.8-103.9c22.9 10.5 36.8 26.4 36.8 45.6 0 40.9-33.1 74-74 74z" />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="#3178C6">
          <rect width="100" height="100" rx="12" />
          <path d="M25 40h20v8H35v32h-8V48h-2zM48 68c0 7 5 12 14 12s14-5 14-12v-2h-8v2c0 3-2 5-6 5s-6-2-6-5v-10c0-3 2-5 6-5s6 2 6 5v2h8v-2c0-7-5-12-14-12s-14 5-14 12v10z" fill="#FFF" />
        </svg>
      );

    case "tailwind css":
    case "tailwindcss":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.59 15.024 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.21 14.979 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.566.89 2.288 1.624 1.177 1.196 2.536 2.576 5.513 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.41 8.979 12 6.001 12z" />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="#F7DF1E">
          <rect width="100" height="100" rx="12" />
          <path d="M58 70c0 5-3 8-8 8s-8-3-8-8v-6h8v6c0 1 1 2 2 2s2-1 2-2V48h-8v-8h16zM76 68c0 7-5 10-12 10s-12-3-12-10h8c0 2 2 3 4 3s4-1 4-3v-6c0-2-2-3-4-3h-4c-6 0-10-3-10-10s4-10 10-10 12 3 12 10h-8c0-2-2-3-4-3s-4 1-4 3v4c0 2 2 3 4 3h4c6 0 10 3 10 10z" fill="#000" />
        </svg>
      );

    case "html5":
    case "html":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#E34F26">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.4 17l.5-5.2H8.3l-.2-2.5h8.3l.3-3.1H5.3l.8 8.8h8.5l-.3 3-2.6.7-2.6-.7-.2-1.7H5.9l.3 3.6 5.8 1.6 5.8-1.6.1-.9z" />
        </svg>
      );

    case "css3":
    case "css":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#1572B6">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zM6.5 17.5l5.5 1.5 5.5-1.5.7-7H8l-.2-2.5h10.4l.2-2.5H5.3l.7 7h7.2l-.2 2.2-2.1.6-2.1-.6-.1-1.2H5.9l.6 3.5z" />
        </svg>
      );

    case "php":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#777BB4">
          <path d="M12 2.1c-5.4 0-9.8 4.4-9.8 9.8 0 5.4 4.4 9.8 9.8 9.8 5.4 0 9.8-4.4 9.8-9.8 0-5.4-4.4-9.8-9.8-9.8zm-5 13.1H5.5V8.8H7.3c1 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6H7v3.3zm5.6-3.3h-1.3v3.3h-1.5V8.8h1.5v3.2h1.3V8.8h1.5v6.5h-1.5V11.9zm5.5 3.3h-1.5V8.8H18.4c1 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6H18.1v3.3zM7 10.3h.3c.2 0 .3-.1.3-.3s-.1-.3-.3-.3H7v.6zm11.1 0h.3c.2 0 .3-.1.3-.3s-.1-.3-.3-.3H18.1v.6z"/>
        </svg>
      );

    case "laravel":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#FF2D20">
          <path d="M20 3h-4V1h4v2zm-2 4h-4V5h4v2zm-2 4h-4V9h4v2zm-4 4H8v-2h4v2zm-2 4H6v-2h4v2zm-2 4H4v-2h4v2z" />
        </svg>
      );

    case "node.js":
    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#339933">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.8 14.2l-6.8 4V12.7l6.8-4v7.5zM12 11V3.8l6.8 4-6.8 3.2zm-1.8 1.7v7.5l-6.8-4V8.7l6.8 4z" />
        </svg>
      );

    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#3ECF8E">
          <path d="M19.98 10.453h-6.848l4.475-8.318A1.125 1.125 0 0016.62.5H8.76a1.125 1.125 0 00-1.025.666l-5.625 12A1.125 1.125 0 003.136 14.7h6.848l-4.475 8.318A1.125 1.125 0 006.5 24.5h7.86a1.125 1.125 0 001.025-.666l5.625-12a1.125 1.125 0 00-1.03-1.381z" />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#336791">
          <path d="M12.1 2c-3.1 0-5.8 1.7-7.2 4.3-.9 1.6-1.4 3.5-1.4 5.7 0 2.2.5 4.1 1.4 5.7 1.4 2.6 4.1 4.3 7.2 4.3 4.5 0 8.1-3.6 8.1-8.1S16.6 3.9 12.1 3.9zm0 15.6c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/>
        </svg>
      );

    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#00758F">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 14H8.7v-1.5h1.5v-3.5H8.7V9.5h4.6v5h1.5V16z"/>
        </svg>
      );

    case "mongodb":
    case "mongo":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#47A248">
          <path d="M12 2C11.5 2 7 6.5 7 12c0 4 3 6.5 5 8v2h2v-2c2-1.5 5-4 5-8 0-5.5-4.5-10-5-10zm0 16c-1 0-3-2-3-6 0-3 2-6 3-6s3 3 3 6c0 4-2 6-3 6z" />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#F05032">
          <path d="M23.3 11.7L12.3.7c-.9-.9-2.5-.9-3.4 0L.7 8.9c-.9.9-.9 2.5 0 3.4l11 11c.9.9 2.5.9 3.4 0l8.2-8.2c.9-.9.9-2.5 0-3.4zM12 17.5c-1.1 0-2-.9-2-2 0-.6.3-1.2.7-1.5v-3c-.4-.3-.7-.9-.7-1.5 0-1.1.9-2 2-2s2 .9 2 2c0 .6-.3 1.2-.7 1.5v3c.4.3.7.9.7 1.5 0 1.1-.9 2-2 2z" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-text-primary`} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z" fill="#F24E1E" />
          <path d="M8 12a4 4 0 0 0 4 4v-8a4 4 0 0 0-4 4z" fill="#A259FF" />
          <path d="M12 16a4 4 0 0 0-4 4 4 4 0 0 0 4 4v-8z" fill="#0ACF83" />
          <path d="M12 16a4 4 0 0 0 4-4v4h-4z" fill="#1ABC9C" />
          <path d="M8 8a4 4 0 0 0 4 4V4a4 4 0 0 0-4 4z" fill="#FF7262" />
        </svg>
      );

    case "postman":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#FF6C37">
          <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7zm0 6l1.5 3.5 3.5 1.5-3.5 1.5L12 16l-1.5-3.5L7 11l3.5-1.5L12 8z"/>
        </svg>
      );

    case "vs code":
    case "vscode":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#007ACC">
          <path d="M23.9 6.5l-3.3-3.1c-.2-.2-.5-.2-.7 0L12 11 4.1 3.4c-.2-.2-.5-.2-.7 0L.1 6.5c-.2.2-.2.5 0 .7L6 12 .1 16.8c-.2.2-.2.5 0 .7l3.3 3.1c.2.2.5.2.7 0L12 13l7.9 7.6c.2.2.5.2.7 0l3.3-3.1c.2-.2.2-.5 0-.7L18 12l5.9-4.8c.2-.2.2-.5 0-.7z" />
        </svg>
      );

    default:
      return null;
  }
}
