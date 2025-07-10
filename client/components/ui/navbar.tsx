import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  href: string;
  phone?: string;
}

export default function Navbar() {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Promotion", href: "/promotion" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact", phone: "09161865009" },
    { name: "Join us", href: "/join-us" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F62405d90b243454ea20a2da911e43b8d"
              alt="Aguilar Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-foreground">
              AGUILAR AMD
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary relative group whitespace-nowrap",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="flex flex-col items-center">
                  {item.name}
                  {item.phone && (
                    <span className="text-xs text-muted-foreground/70">
                      ({item.phone})
                    </span>
                  )}
                </span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200",
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
