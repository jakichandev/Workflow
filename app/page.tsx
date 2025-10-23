import Form from "@/app/components/ui/Form";
import Logo from "@/app/components/ui/Logo";

export default function Home() {
  return (
    <div className="dark">
      <Logo />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-theme-moon-800 bg-theme-moon-100 dark:text-theme-galaxy-100 text-theme-galaxy-900">
        <Form alignment="centered" />
      </main>
    </div>
  );
}
