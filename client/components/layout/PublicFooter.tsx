import { Link } from "react-router-dom";

export default function PublicFooter() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                N
              </span>
              <span className="font-mono text-sm font-semibold text-white">
                NER SmartLogix
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm">
              AI-based smart logistics and accessibility intelligence
              platform for the North Eastern Region of India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Platform
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/map" className="hover:text-white">
                    Live Map
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="hover:text-white">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Intelligence
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/risk" className="hover:text-white">
                    Risk Intelligence
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="hover:text-white">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link to="/assistant" className="hover:text-white">
                    AI Assistant
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Account
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/login" className="hover:text-white">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-white">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NER SmartLogix. Demonstration
            platform — all logistics data shown is simulated.
          </p>
          <p>Assam · Arunachal Pradesh · Manipur · Meghalaya · Mizoram · Nagaland · Tripura · Sikkim</p>
        </div>
      </div>
    </footer>
  );
}
