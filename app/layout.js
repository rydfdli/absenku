import "./globals.css";
import AppShell from "./components/AppShell";

export const metadata = {
  title: "PiketKu",
  description: "Pencatatan Piket dan Kehadiran Pegawai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}