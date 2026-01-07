"use client";
import { CaptainPayload, RiderPayload } from "@/app/signup/page";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  User,
  Car,
  HelpCircle,
  UserCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { toast } from "react-toastify";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  role: string;
  user: RiderPayload | CaptainPayload;
  navItems: NavItem[];
}

const apiURl = "http://localhost:8080/api";

export default function Navbar({ role, user, navItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user && !role) return null;

  // Get initials from name
  const getInitials = (name: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const logout = async () => {
    const userLogout = await fetch(`${apiURl}/${role}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const logoutRes = await userLogout.json();
    if (!logoutRes.success) {
      toast.error("Something went wrong, please try again.");
    } else {
      window.location.href = `/login?role=${role}`;
    }
  };

  return (
    <nav className="w-full p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo - Made Bigger */}
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 md:ml-16">
          QuickRide
        </h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 ml-8">
        {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative flex items-center gap-1.5 pb-1"
            >
              <span
                className={`text-gray-600 hover:text-indigo-600 transition [&>svg]:w-4 [&>svg]:h-4 ${
                  pathname === item.href ? "text-indigo-600" : ""
                }`}
              >
                {item.icon}
              </span>

              <span
                className={`text-gray-600 hover:text-indigo-600 transition font-medium ${
                  pathname === item.href ? "text-indigo-600" : ""
                }`}
              >
                {item.name}
              </span>

              {pathname === item.href && (
                <span className="absolute bottom-0 -left-2 -right-2 h-0.5 bg-indigo-600 rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex ml-auto mr-16 items-center gap-4">
          {/* Help Button */}
          <a
            href="/help"
            className="text-gray-600 hover:text-indigo-600 transition flex items-center gap-2"
          >
            <HelpCircle size={18} />
            Help
          </a>

          {/* User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-auto px-3 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold hover:bg-indigo-700 transition gap-1"
            >
              {getInitials(user?.name || "User")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 z-50 border border-gray-100">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                      {getInitials(user?.name || "User")}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {user?.name || "User"}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {role === "rider" ? (
                          <User size={12} className="text-indigo-600" />
                        ) : (
                          <Car size={12} className="text-indigo-600" />
                        )}
                        <span className="text-xs text-indigo-600 capitalize">
                          {role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = `/${role}/profile`;
                    }}
                    className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition flex items-center gap-3 text-gray-700"
                  >
                    <UserCircle size={18} />
                    <span>Account</span>
                  </button>
                </div>

                {/* Sign Out */}
                <div className="border-t border-gray-100 pt-2">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      logout();
                    }}
                    className="w-full px-4 py-2.5 text-left hover:bg-red-50 transition flex items-center gap-3 text-red-600"
                  >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-indigo-600"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          {/* User Info Mobile */}
          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
              {getInitials(user?.name || "User")}
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {user?.name || "User"}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {role === "rider" ? (
                  <User size={12} className="text-indigo-600" />
                ) : (
                  <Car size={12} className="text-indigo-600" />
                )}
                <span className="text-xs text-indigo-600 capitalize">
                  {role}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 mb-4">
          {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition font-medium py-2 px-3 rounded-lg ${
                  pathname === item.href ? "text-indigo-600 bg-indigo-50" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="[&>svg]:w-4 [&>svg]:h-4">
                  {item.icon}
                </span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Help Button Mobile */}
          <a
            href="/help"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2 mb-4"
          >
            <HelpCircle size={18} />
            Help
          </a>

          {/* Account & Sign Out Mobile */}
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = `/${role}/profile`;
              }}
              className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition flex items-center gap-3 text-gray-700 rounded-lg"
            >
              <UserCircle size={18} />
              <span>Account</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                logout();
              }}
              className="w-full px-4 py-2.5 text-left hover:bg-red-50 transition flex items-center gap-3 text-red-600 rounded-lg"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
