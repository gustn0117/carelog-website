import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="bg-dark text-white">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/logo.png"
                  alt="CARE LOG 케어로그"
                  style={{ height: "40px", width: "auto" }}
                  className="brightness-0 invert"
                />
                <div className="flex flex-col" style={{ gap: "1px" }}>
                  <span className="text-[15px] font-light tracking-[0.12em] text-white uppercase">
                    CARE LOG
                  </span>
                  <span className="text-[10px] font-normal tracking-[0.15em] text-gray-400">
                    케어로그
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                병원의 가치를 정리하는 병원 브랜딩 스튜디오.
                <br />
                원장님의 진료 철학이 환자에게 온전히 닿을 수 있도록,
                <br />
                진심을 담은 마케팅 파트너가 되겠습니다.
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  지역 독점 운영
                </span>
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  의료법 준수
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-bold text-white mb-5 tracking-wider uppercase">바로가기</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "서비스 안내", href: "/services" },
                  { label: "병원마케팅", href: "/marketing" },
                  { label: "포트폴리오", href: "/portfolio" },
                  { label: "블로그", href: "https://blog.naver.com/PostList.naver?blogId=miaketing&from=postList&categoryNo=1", external: true },
                  { label: "문의하기", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    {"external" in link ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-secondary transition-all duration-300 group-hover:w-3" />
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-secondary transition-all duration-300 group-hover:w-3" />
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-white mb-5 tracking-wider uppercase">서비스</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>브랜드 블로그</li>
                <li>스마트플레이스</li>
                <li>카페 바이럴</li>
                <li>블로그 체험단</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-white mb-5 tracking-wider uppercase">문의</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  평일 10:00 - 18:00
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-secondary hover:text-white transition-colors duration-300 group"
              >
                무료 상담 신청
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} CARE LOG 케어로그. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              병원의 가치를 정리합니다
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
