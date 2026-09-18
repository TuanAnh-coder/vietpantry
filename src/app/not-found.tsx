// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-xl">
        Không tìm thấy trang
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-white"
      >
        Về trang chủ
      </Link>
    </main>
  );
}