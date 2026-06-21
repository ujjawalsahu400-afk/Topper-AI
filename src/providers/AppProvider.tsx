import { QueryProvider } from "./QueryProvider";
import { type ReactNode } from "react";
// Import other providers like ClerkProvider here when configured

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      {/* Add ClerkProvider, ThemeProvider etc. here */}
      {children}
    </QueryProvider>
  );
}
