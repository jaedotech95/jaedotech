"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Mail, Phone, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function LinkSharingPage() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  const links = [
    {
      title: "카카오톡 상담",
      description: "빠른 견적 상담 및 문의",
      url: "http://pf.kakao.com/_xjSsDn/chat",
      icon: <Image src="/kakao-icon.png" alt="재도테크 카카오채널" width={20} height={20} className="w-5 h-5" />,
    },
    {
      title: "재도테크 스마트스토어",
      description: "네이버 스마트스토어에서 랙 제품 구매",
      url: "https://smartstore.naver.com/jaedotech",
      icon: <Image src="/smartstore-icon.png" alt="재도테크 스마트스토어" width={20} height={20} className="w-5 h-5" />,
    },
    {
      title: "인스타그램",
      description: "랙 설치 현장 및 제품 사진",
      url: "https://www.instagram.com/jaedotech__official",
      icon: <Image src="/instagram-icon.png" alt="재도테크 인스타그램" width={20} height={20} className="w-5 h-5" />,
    },
    {
      title: "네이버 밴드",
      description: "고객 소통 및 정보 공유",
      url: "https://www.band.us/page/99788398",
      icon: <Image src="/band-icon.png" alt="재도테크 밴드" width={20} height={20} className="w-5 h-5" />,
    },
  ]

  const copyToClipboard = async (url: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      await navigator.clipboard.writeText(url)
      setCopiedLink(url)
      setTimeout(() => setCopiedLink(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 max-w-sm sm:max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="relative mb-6 sm:mb-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto border-4 border-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.12)] bg-white relative z-10 rounded-full overflow-hidden">
              <Image
                src="/jaedo-logo-2.png"
                alt="재도테크 로고"
                width={144}
                height={144}
                priority
                className="object-contain p-2 sm:p-3 w-full h-full"
              />
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-3 sm:mb-4">
            재도테크
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-balance mb-6 sm:mb-8 text-base sm:text-lg font-medium px-2 sm:px-0">
            경량랙·중량랙·파렛트랙 판매, 시공, 철거 전문 업체
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          {links.map((link, index) => (
            <Card
              key={index}
              className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  className="flex-1 h-auto p-4 sm:p-6 justify-start text-left hover:bg-slate-50/80 dark:hover:bg-slate-700/50 rounded-r-none"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-3 sm:gap-4 w-full">
                      <div className="flex-shrink-0 p-2.5 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                        <div className="text-blue-600 dark:text-blue-400">{link.icon}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-base sm:text-lg">
                          {link.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-pretty leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                    </div>
                  </a>
                </Button>

                <div className="flex items-center justify-center px-3 sm:px-4 py-4 sm:py-6 border-l border-slate-200/50 dark:border-slate-700/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2.5 sm:p-3 hover:bg-slate-50/80 dark:hover:bg-slate-700/50 rounded-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200 min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto"
                    onClick={(e) => copyToClipboard(link.url, e)}
                  >
                    {copiedLink === link.url ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 dark:text-slate-400" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="p-4 sm:p-6 bg-white/90 dark:bg-slate-800/90 border-slate-200/50 dark:border-slate-700/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm mb-8 sm:mb-10">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">
              <span>상담 및 문의</span>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-12 gap-2 sm:gap-3">
              {/* Phone Contact Button */}
              <div className="xs:col-span-4 flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 h-auto bg-white/80 dark:bg-slate-700/50 rounded-xl border border-slate-200/50 dark:border-slate-600/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.05)]">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                <div className="text-center">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">연락처</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight space-y-0.5">
                    <div>010-4147-9655</div>
                    <div>010-4034-9795</div>
                  </div>
                </div>
              </div>

              {/* Email Button */}
              <Button
                variant="ghost"
                className="xs:col-span-5 flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 h-auto bg-white/80 dark:bg-slate-700/50 rounded-xl border border-slate-200/50 dark:border-slate-600/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.05)] hover:bg-slate-50/80 dark:hover:bg-slate-600/50 transition-all duration-200 min-h-[60px] sm:min-h-auto"
                asChild
              >
                <a href="mailto:jaedotech95@gmail.com">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                  <div className="text-center">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">이메일</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight break-all sm:break-normal">
                      jaedotech95@gmail.com
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 px-4 sm:px-0">
            재도테크와 함께하는 스마트한 물류 솔루션
          </p>
        </div>
      </div>
    </div>
  )
}
