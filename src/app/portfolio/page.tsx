import Link from "next/link";
import CTA from "@/components/CTA";

export default function PortfolioPage() {
  // 포트폴리오 데이터 - 추후 실제 데이터로 교체
  const portfolioItems = [
    {
      id: 1,
      title: "OO정형외과",
      category: "정형외과",
      description: "브랜딩 중심 블로그 마케팅으로 월 신규 환자 40% 증가",
      tags: ["블로그", "스마트플레이스", "브랜딩"],
      result: "신규환자 40%↑",
      headerIllustration: (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ortho-bg" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2a4e56" />
              <stop offset="100%" stopColor="#4d7d88" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#ortho-bg)" />
          {/* Dot pattern */}
          {Array.from({ length: 40 }).map((_, i) => (
            <circle key={i} cx={(i % 10) * 42 + 20} cy={Math.floor(i / 10) * 50 + 25} r="1.5" fill="white" opacity="0.15" />
          ))}
          {/* Upward trending graph */}
          <path d="M60 160L120 130L180 140L240 100L300 70L350 40" stroke="#c5a55a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 160L120 130L180 140L240 100L300 70L350 40V200H60Z" fill="#c5a55a" opacity="0.1" />
          {/* Data points */}
          <circle cx="60" cy="160" r="5" fill="#c5a55a" />
          <circle cx="120" cy="130" r="5" fill="#c5a55a" />
          <circle cx="180" cy="140" r="5" fill="#c5a55a" />
          <circle cx="240" cy="100" r="5" fill="#c5a55a" />
          <circle cx="300" cy="70" r="5" fill="#c5a55a" />
          <circle cx="350" cy="40" r="7" fill="#c5a55a" stroke="white" strokeWidth="2" />
          {/* Bone/joint icon */}
          <g transform="translate(40, 30)">
            <ellipse cx="0" cy="0" rx="12" ry="8" fill="white" opacity="0.2" transform="rotate(-30)" />
            <ellipse cx="30" cy="30" rx="12" ry="8" fill="white" opacity="0.2" transform="rotate(-30)" />
            <rect x="5" y="2" width="8" height="35" rx="4" fill="white" opacity="0.15" transform="rotate(-30)" />
          </g>
          {/* Arrow up */}
          <g transform="translate(330, 30)">
            <path d="M0 20L0 0L-8 8M0 0L8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          </g>
          {/* 40% text */}
          <text x="310" y="170" fill="white" fontSize="28" fontWeight="bold" opacity="0.15">+40%</text>
        </svg>
      ),
    },
    {
      id: 2,
      title: "OO피부과",
      category: "피부과",
      description: "개원 3개월 차 병원, 지역 키워드 상위 노출 달성",
      tags: ["블로그", "네이버카페", "체험단"],
      result: "키워드 상위노출",
      headerIllustration: (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="derm-bg" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3a6670" />
              <stop offset="100%" stopColor="#5a9aa8" />
            </linearGradient>
            <radialGradient id="cell1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="70%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="200" fill="url(#derm-bg)" />
          {/* Skin cell pattern - hexagonal arrangement */}
          {[
            [60, 50], [120, 40], [180, 55], [240, 45], [300, 50], [360, 40],
            [30, 100], [90, 95], [150, 105], [210, 100], [270, 95], [330, 105],
            [60, 150], [120, 155], [180, 145], [240, 155], [300, 150], [360, 145],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={20 + (i % 3) * 4} fill="url(#cell1)" />
              <circle cx={cx} cy={cy} r={20 + (i % 3) * 4} stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" />
              <circle cx={cx} cy={cy} r={6 + (i % 2) * 2} fill="white" opacity="0.08" />
            </g>
          ))}
          {/* Magnifying glass over cells */}
          <g transform="translate(260, 80)">
            <circle cx="0" cy="0" r="35" stroke="#c5a55a" strokeWidth="3" fill="none" opacity="0.6" />
            <circle cx="0" cy="0" r="33" fill="white" opacity="0.05" />
            <line x1="25" y1="25" x2="50" y2="50" stroke="#c5a55a" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          </g>
          {/* Sparkles */}
          <path d="M80 30L83 37L90 40L83 43L80 50L77 43L70 40L77 37Z" fill="#c5a55a" opacity="0.4" />
          <path d="M340 160L342 164L346 166L342 168L340 172L338 168L334 166L338 164Z" fill="white" opacity="0.3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "OO치과",
      category: "치과",
      description: "원장님 진료 철학 기반 콘텐츠로 브랜드 신뢰도 구축",
      tags: ["블로그", "브랜딩", "컨설팅"],
      result: "브랜드 신뢰도↑",
      headerIllustration: (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="dental-bg" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2a4e56" />
              <stop offset="60%" stopColor="#3a6670" />
              <stop offset="100%" stopColor="#4d7d88" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#dental-bg)" />
          {/* Abstract wave pattern */}
          <path d="M0 150Q100 120 200 140Q300 160 400 130V200H0Z" fill="white" opacity="0.05" />
          <path d="M0 170Q100 140 200 160Q300 180 400 150V200H0Z" fill="white" opacity="0.03" />
          {/* Tooth outline - centered */}
          <g transform="translate(170, 25)">
            <path d="M30 0C15 0 5 10 5 25C5 40 0 70 10 100C15 115 18 130 20 140C22 150 25 155 30 155C35 155 38 150 40 140C42 130 45 115 50 100C60 70 55 40 55 25C55 10 45 0 30 0Z" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M30 0C15 0 5 10 5 25C5 40 0 70 10 100C15 115 18 130 20 140C22 150 25 155 30 155C35 155 38 150 40 140C42 130 45 115 50 100C60 70 55 40 55 25C55 10 45 0 30 0Z" fill="white" opacity="0.06" />
            {/* Shine on tooth */}
            <path d="M18 20C18 20 22 15 30 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          </g>
          {/* Sparkle stars */}
          <path d="M80 60L84 70L94 74L84 78L80 88L76 78L66 74L76 70Z" fill="#c5a55a" opacity="0.4" />
          <path d="M320 40L323 47L330 50L323 53L320 60L317 53L310 50L317 47Z" fill="#c5a55a" opacity="0.3" />
          <path d="M350 140L352 144L356 146L352 148L350 152L348 148L344 146L348 144Z" fill="white" opacity="0.2" />
          {/* Trust shield */}
          <g transform="translate(60, 100)">
            <path d="M0 5L15 0L30 5V18C30 28 15 35 15 35C15 35 0 28 0 18V5Z" fill="#c5a55a" opacity="0.3" />
            <path d="M10 17L14 21L22 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </g>
        </svg>
      ),
    },
    {
      id: 4,
      title: "OO한의원",
      category: "한의원",
      description: "타겟 환자층 분석 후 맞춤 콘텐츠 전략 수립",
      tags: ["블로그", "바이럴", "스마트플레이스"],
      result: "타겟 도달률 3배↑",
      headerIllustration: (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="herb-bg" x1="0" y1="200" x2="400" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2a4e56" />
              <stop offset="100%" stopColor="#3a6670" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#herb-bg)" />
          {/* Leaf/herb pattern */}
          <g transform="translate(180, 100)">
            {/* Main stem */}
            <path d="M0 80C0 80 0 -20 0 -20" stroke="#5a9aa8" strokeWidth="2.5" opacity="0.5" />
            {/* Leaves */}
            <path d="M0 60C-30 50 -50 20 -40 0C-30 -10 -10 10 0 30" fill="#5a9aa8" opacity="0.3" />
            <path d="M0 60C30 50 50 20 40 0C30 -10 10 10 0 30" fill="#4d7d88" opacity="0.3" />
            <path d="M0 30C-25 20 -40 -5 -30 -20C-22 -28 -5 -10 0 5" fill="#5a9aa8" opacity="0.25" />
            <path d="M0 30C25 20 40 -5 30 -20C22 -28 5 -10 0 5" fill="#4d7d88" opacity="0.25" />
            <path d="M0 0C-20 -10 -30 -30 -20 -40C-12 -46 -3 -30 0 -20" fill="#5a9aa8" opacity="0.2" />
            <path d="M0 0C20 -10 30 -30 20 -40C12 -46 3 -30 0 -20" fill="#4d7d88" opacity="0.2" />
            {/* Leaf veins */}
            <path d="M0 55L-20 35" stroke="white" strokeWidth="0.5" opacity="0.2" />
            <path d="M0 55L20 35" stroke="white" strokeWidth="0.5" opacity="0.2" />
          </g>
          {/* Yin-yang inspired circle */}
          <g transform="translate(80, 50)">
            <circle cx="0" cy="0" r="25" stroke="#c5a55a" strokeWidth="1.5" fill="none" opacity="0.3" />
            <path d="M0 -25C-14 -25 -25 -14 -25 0C-25 14 -14 25 0 25C7 25 12.5 14 12.5 0C12.5 -14 7 -25 0 -25Z" fill="#c5a55a" opacity="0.15" />
            <circle cx="-6" cy="-12" r="4" fill="#c5a55a" opacity="0.2" />
            <circle cx="6" cy="12" r="4" fill="white" opacity="0.1" />
          </g>
          {/* Small decorative herbs */}
          <g transform="translate(310, 40)">
            <path d="M0 30L0 0" stroke="#5a9aa8" strokeWidth="1.5" opacity="0.3" />
            <path d="M0 20C-12 14 -18 2 -12 -4C-8 -7 -2 0 0 10" fill="#5a9aa8" opacity="0.2" />
            <path d="M0 20C12 14 18 2 12 -4C8 -7 2 0 0 10" fill="#4d7d88" opacity="0.2" />
          </g>
          <g transform="translate(330, 140)">
            <path d="M0 25L0 0" stroke="#5a9aa8" strokeWidth="1.5" opacity="0.3" />
            <path d="M0 15C-10 10 -15 0 -10 -5C-7 -7 -2 0 0 8" fill="#5a9aa8" opacity="0.2" />
            <path d="M0 15C10 10 15 0 10 -5C7 -7 2 0 0 8" fill="#4d7d88" opacity="0.2" />
          </g>
          {/* Floating particles */}
          {[
            [50, 150], [120, 170], [280, 30], [360, 100], [40, 80],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={2 + i * 0.5} fill="#c5a55a" opacity={0.15 + i * 0.05} />
          ))}
        </svg>
      ),
    },
    {
      id: 5,
      title: "OO안과",
      category: "안과",
      description: "라식·라섹 특화 콘텐츠로 월 상담 문의 2배 이상 증가",
      tags: ["블로그", "체험단", "스마트플레이스"],
      result: "상담문의 2배↑",
      headerIllustration: (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="eye-bg" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3a6670" />
              <stop offset="100%" stopColor="#2a4e56" />
            </linearGradient>
            <radialGradient id="iris-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c5a55a" />
              <stop offset="60%" stopColor="#4d7d88" />
              <stop offset="100%" stopColor="#3a6670" />
            </radialGradient>
          </defs>
          <rect width="400" height="200" fill="url(#eye-bg)" />
          {/* Eye shape */}
          <g transform="translate(200, 100)">
            <path d="M-80 0C-80 0 -40 -50 0 -50C40 -50 80 0 80 0C80 0 40 50 0 50C-40 50 -80 0 -80 0Z" fill="white" stroke="white" strokeWidth="1.5" opacity="0.2" />
            <circle cx="0" cy="0" r="30" fill="url(#iris-grad)" opacity="0.6" />
            <circle cx="0" cy="0" r="30" stroke="white" strokeWidth="1" opacity="0.3" />
            <circle cx="0" cy="0" r="12" fill="#2a4e56" opacity="0.8" />
            <circle cx="-8" cy="-8" r="5" fill="white" opacity="0.4" />
            <circle cx="4" cy="-4" r="2" fill="white" opacity="0.2" />
            {/* Iris detail lines */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1={14 * Math.cos((i * 30 * Math.PI) / 180)}
                y1={14 * Math.sin((i * 30 * Math.PI) / 180)}
                x2={28 * Math.cos((i * 30 * Math.PI) / 180)}
                y2={28 * Math.sin((i * 30 * Math.PI) / 180)}
                stroke="#c5a55a"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}
          </g>
          {/* Light rays */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={200 + 60 * Math.cos((i * 45 * Math.PI) / 180)}
              y1={100 + 60 * Math.sin((i * 45 * Math.PI) / 180)}
              x2={200 + 120 * Math.cos((i * 45 * Math.PI) / 180)}
              y2={100 + 120 * Math.sin((i * 45 * Math.PI) / 180)}
              stroke="#c5a55a"
              strokeWidth="1"
              opacity="0.1"
              strokeLinecap="round"
            />
          ))}
          {/* Small sparkles */}
          <path d="M80 40L83 47L90 50L83 53L80 60L77 53L70 50L77 47Z" fill="white" opacity="0.2" />
          <path d="M330 150L332 154L336 156L332 158L330 162L328 158L324 156L328 154Z" fill="#c5a55a" opacity="0.3" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "OO소아과",
      category: "소아과",
      description: "육아맘 타겟 카페 바이럴로 지역 내 인지도 급상승",
      tags: ["카페바이럴", "블로그", "브랜딩"],
      result: "지역 인지도 1위",
      headerIllustration: (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="pedi-bg" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4d7d88" />
              <stop offset="100%" stopColor="#5a9aa8" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#pedi-bg)" />
          {/* Hearts */}
          <g transform="translate(100, 60)">
            <path d="M0 8C0 8 -12 -4 -12 -10C-12 -16 -6 -20 0 -14C6 -20 12 -16 12 -10C12 -4 0 8 0 8Z" fill="#c5a55a" opacity="0.4" />
          </g>
          <g transform="translate(300, 50)">
            <path d="M0 6C0 6 -9 -3 -9 -7.5C-9 -12 -4.5 -15 0 -10.5C4.5 -15 9 -12 9 -7.5C9 -3 0 6 0 6Z" fill="white" opacity="0.2" />
          </g>
          <g transform="translate(340, 130)">
            <path d="M0 5C0 5 -7 -2.5 -7 -6C-7 -9.5 -3.5 -12 0 -8.5C3.5 -12 7 -9.5 7 -6C7 -2.5 0 5 0 5Z" fill="#c5a55a" opacity="0.25" />
          </g>
          {/* Star / teddy bear face */}
          <g transform="translate(200, 90)">
            {/* Bear face */}
            <circle cx="0" cy="0" r="35" fill="white" opacity="0.12" />
            <circle cx="-20" cy="-28" r="14" fill="white" opacity="0.1" />
            <circle cx="20" cy="-28" r="14" fill="white" opacity="0.1" />
            <circle cx="-12" cy="-8" r="4" fill="white" opacity="0.2" />
            <circle cx="12" cy="-8" r="4" fill="white" opacity="0.2" />
            <ellipse cx="0" cy="5" rx="8" ry="6" fill="#c5a55a" opacity="0.3" />
            <circle cx="0" cy="3" r="2" fill="white" opacity="0.2" />
            <path d="M-5 12C-5 12 -2 16 0 16C2 16 5 12 5 12" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
          </g>
          {/* Small stars */}
          <path d="M60 130L63 137L70 140L63 143L60 150L57 143L50 140L57 137Z" fill="white" opacity="0.2" />
          <path d="M150 30L152 34L156 36L152 38L150 42L148 38L144 36L148 34Z" fill="#c5a55a" opacity="0.3" />
          <path d="M280 170L282 174L286 176L282 178L280 182L278 178L274 176L278 174Z" fill="white" opacity="0.2" />
          {/* Floating circles */}
          {[[40, 40], [360, 80], [70, 170], [320, 170]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={4 + i} fill="white" opacity={0.06 + i * 0.02} />
          ))}
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #2a4e56 0%, #3a6670 35%, #4d7d88 65%, #5a9aa8 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -top-32 -right-32 opacity-10" width="500" height="500" viewBox="0 0 500 500">
            <circle cx="250" cy="250" r="220" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="250" cy="250" r="170" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="250" cy="250" r="120" stroke="#c5a55a" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <p className="text-[#c5a55a] font-semibold mb-3 tracking-widest text-sm">PORTFOLIO</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">포트폴리오</h1>
          <p className="text-white/80 max-w-lg mx-auto text-lg">
            케어로그와 함께한 병원들의 성장 이야기
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">성과 사례</h2>
            <p className="text-muted max-w-md mx-auto">각 병원의 특성에 맞는 전략으로 실질적인 성과를 만들어갑니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-soft hover:shadow-soft-lg"
              >
                {/* SVG Header Illustration */}
                <div className="h-48 relative overflow-hidden">
                  {item.headerIllustration}
                  {/* Result badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-xs font-bold" style={{ color: "#3a6670" }}>{item.result}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#e8f5ee", color: "#3a6670" }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#3a6670] transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border transition-colors"
                        style={{ borderColor: "#e0e0d8", color: "#888" }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-12">
            * 포트폴리오 상세 내용은 상담 시 안내드립니다.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
