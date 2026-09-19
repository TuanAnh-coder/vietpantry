"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

/**
 * Wraps the auth pages (login / register) and animates between them
 * whenever the route changes. Drop this around {children} in AuthLayout.
 *
 * Usage in layout.tsx:
 *
 *   import AuthTransition from "~/components/layout/auth-transition"
 *   ...
 *   <div className="w-md min-h-screen bg-[#F7F6F0]">
 *       <AuthTransition>{children}</AuthTransition>
 *   </div>
 */
export default function AuthTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait" initial={false}>
            {/* ---------- Option A: slide (default) ---------- */}
            <motion.div
                key={pathname}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>

            {/* ---------- Option B: flip / xoay (uncomment to use) ----------
            <motion.div
                key={pathname}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {children}
            </motion.div>
            ------------------------------------------------------------- */}
        </AnimatePresence>
    )
}