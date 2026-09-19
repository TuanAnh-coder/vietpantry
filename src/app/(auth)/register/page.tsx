"use client"

import { useState } from "react"
import {
    ArrowRight,
    Eye,
    EyeOff,
    Lock,
    Mail,
    User,
    UserPlus,
} from "lucide-react"

import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Separator } from "~/components/ui/separator"
import Link from "next/link"

// Small eco "sprout" mark for the wordmark — matches the login page.
const SproutIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 21V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 11C12 11 5.5 11.5 5.5 5C12 5 12 11 12 11Z" fill="currentColor" />
        <path d="M12 8C12 8 18.5 8.5 18.5 2C12 2 12 8 12 8Z" fill="currentColor" />
    </svg>
)

// Multi-color Google "G" mark — lucide-react has no brand icons, so this is a
// small hand-rolled SVG kept local to this file.
const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
            fill="#4285F4"
            d="M23.52 12.27c0-.82-.07-1.4-.22-2.01H12.24v3.65h6.5c-.13 1.09-.84 2.73-2.42 3.83l-.02.15 3.52 2.72.24.02c2.24-2.06 3.46-5.1 3.46-8.36z"
        />
        <path
            fill="#34A853"
            d="M12.24 24c3.24 0 5.95-1.06 7.93-2.9l-3.78-2.92c-1.01.7-2.37 1.19-4.15 1.19-3.18 0-5.86-2.09-6.82-4.98l-.14.01-3.66 2.82-.05.13C3.45 21.3 7.5 24 12.24 24z"
        />
        <path
            fill="#FBBC05"
            d="M5.42 14.38A7.36 7.36 0 0 1 5.03 12c0-.83.15-1.63.38-2.38l-.01-.16-3.7-2.87-.12.06A11.95 11.95 0 0 0 0 12c0 1.93.47 3.76 1.58 5.35z"
        />
        <path
            fill="#EA4335"
            d="M12.24 4.77c2.26 0 3.78.97 4.65 1.79l3.39-3.3C18.19 1.19 15.48 0 12.24 0 7.5 0 3.45 2.7 1.58 6.65l3.83 2.97c.98-2.89 3.65-4.85 6.83-4.85z"
        />
    </svg>
)

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <div className="flex min-h-screen items-center justify-center overflow-y-auto px-10 py-10 sm:px-14">
            <div className="w-full max-w-sm">
                {/* Wordmark */}
                <div className="flex items-center gap-2">
                    <SproutIcon className="h-6 w-6 text-[#1F5C38]" />
                    <div className="leading-tight">
                        <p className="text-[17px] font-bold text-[#1F5C38]">VietPantry</p>
                        <p className="text-xs text-[#5C9269]">Tinh hoa nông sản Việt</p>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mt-6 text-[28px] font-bold leading-tight text-[#16241D]">
                    Tạo tài khoản
                </h1>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280]">
                    Đăng ký để bắt đầu mua nông sản sạch mỗi ngày.
                </p>

                {/* Form */}
                <form className="mt-6 space-y-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="fullname" className="text-sm font-semibold text-[#16241D]">
                            Họ và tên
                        </Label>
                        <div className="relative">
                            <User className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#9CA3AF]" />
                            <Input
                                id="fullname"
                                type="text"
                                placeholder="Nhập họ và tên của bạn"
                                autoComplete="name"
                                className="h-12 rounded-2xl border-[#E5E7EB] bg-[#F9FAFA] pl-11 text-sm placeholder:text-[#ADB3AF] focus-visible:border-[#4E7C59] focus-visible:ring-[#4E7C59]/20"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-semibold text-[#16241D]">
                            Email
                        </Label>
                        <div className="relative">
                            <Mail className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#9CA3AF]" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="Nhập email của bạn"
                                autoComplete="email"
                                className="h-12 rounded-2xl border-[#E5E7EB] bg-[#F9FAFA] pl-11 text-sm placeholder:text-[#ADB3AF] focus-visible:border-[#4E7C59] focus-visible:ring-[#4E7C59]/20"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <Label htmlFor="password" className="text-sm font-semibold text-[#16241D]">
                                Mật khẩu
                            </Label>
                            <div className="relative">
                                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    className="h-12 rounded-2xl border-[#E5E7EB] bg-white pl-10 pr-9 text-sm placeholder:text-[#ADB3AF] focus-visible:border-[#4E7C59] focus-visible:ring-[#4E7C59]/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] transition-colors hover:text-[#16241D]"
                                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="confirm-password" className="text-sm font-semibold text-[#16241D]">
                                Xác nhận
                            </Label>
                            <div className="relative">
                                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                                <Input
                                    id="confirm-password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    className="h-12 rounded-2xl border-[#E5E7EB] bg-white pl-10 pr-9 text-sm placeholder:text-[#ADB3AF] focus-visible:border-[#4E7C59] focus-visible:ring-[#4E7C59]/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] transition-colors hover:text-[#16241D]"
                                    aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 pt-0.5">
                        <Checkbox
                            id="terms"
                            className="mt-[3px] size-4 shrink-0 border-[#D1D5DB] data-[state=checked]:border-[#4E7C59] data-[state=checked]:bg-[#4E7C59]"
                        />
                        {/* Plain <label>, and <span> instead of <button> for the links —
                            a <button> defaults to inline-block + centered text, which
                            breaks the sentence into separate centered boxes once it wraps. */}
                        <label
                            htmlFor="terms"
                            className="text-[13px] font-normal leading-snug text-[#6B7280]"
                        >
                            Tôi đồng ý với{" "}
                            <span className="font-medium text-[#4E7C59] underline underline-offset-2">
                                Điều khoản dịch vụ
                            </span>{" "}
                            và{" "}
                            <span className="font-medium text-[#4E7C59] underline underline-offset-2">
                                Chính sách bảo mật
                            </span>
                        </label>
                    </div>

                    <Button
                        type="submit"
                        className="h-12 w-full gap-2 rounded-full bg-[#4E7C59] text-[15px] font-semibold text-white shadow-none hover:bg-[#3F6A49]"
                    >
                        Đăng ký
                        <ArrowRight className="h-[18px] w-[18px]" />
                    </Button>

                    <div className="relative py-0.5">
                        <Separator className="bg-[#E5E7EB]" />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F7F6F0] px-3 text-xs text-[#9CA3AF]">
                            Hoặc
                        </span>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 w-full gap-2 rounded-full border-[#E5E7EB] bg-white text-[15px] font-medium text-[#16241D] shadow-none hover:bg-[#F9FAFA]"
                    >
                        <GoogleIcon className="h-[18px] w-[18px]" />
                        Tiếp tục với Google
                    </Button>

                    <p className="text-center text-sm text-[#6B7280]">
                        Đã có tài khoản?{" "}
                        <Link
                            href={'/login'}
                            className="font-semibold text-[#4E7C59] underline-offset-4 hover:underline"
                        >
                            Đăng nhập
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage