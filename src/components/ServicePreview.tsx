import Link from "next/link";

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
    <path d="M4 8l3 3 5-5" stroke="#1a5632" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const packages = [
  {
    name: "핵심 서비스",
    price: "195",
    features: [
      "첫 달 필수 브랜딩",
      "브랜드블로그 14건",
      "홈페이지형 블로그 제작 (첫 달 1회)",
      "블로그 컨셉 셋팅",
      "네이버 스마트 플레이스 최적화",
    ],
    highlight: false,
  },
  {
    name: "끝장 서비스",
    price: "365",
    features: [
      "첫 달 필수 브랜딩",
      "브랜드블로그 21건",
      "홈페이지형 블로그 제작 (첫 달 1회)",
      "블로그 컨셉 셋팅",
      "블로그 체험단 4회",
      "네이버카페 5세트 (원고 + 댓글 + 대댓글)",
      "네이버 스마트 플레이스 최적화",
      "월 50만 바이럴 스레드 (월 10회)",
      "월말 성과분석 리포트",
      "매월 1회 전략미팅 & 컨설팅",
    ],
    highlight: true,
  },
  {
    name: "마스터 패키지",
    price: "595",
    features: [
      "첫 달 필수 브랜딩",
      "브랜드블로그 39건 (2개 채널)",
      "홈페이지형 블로그 제작 (첫 달 1회)",
      "블로그 컨셉 셋팅",
      "이미지 무료디자인 (월 1회)",
      "월 50만 바이럴 스레드 (월 19회)",
      "블로그 체험단 5회",
      "네이버카페 10세트 (원고 + 댓글 + 대댓글)",
      "네이버 스마트 플레이스 최적화",
      "월말 성과분석 리포트",
      "매월 1회 전략미팅 & 컨설팅",
      "언론보도 분기별 1회 (3개월 이상 계약시)",
    ],
    highlight: false,
  },
];

export default function ServicePreview() {
  return (
    <section className="section-padding bg-light">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary tracking-wider uppercase mb-3 block">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold">서비스 패키지</h2>
          <p className="text-muted mt-4">
            병원 규모와 목표에 맞는 맞춤 마케팅 플랜
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 border relative transition-shadow duration-300 hover:shadow-lg ${
                pkg.highlight
                  ? "border-primary bg-white shadow-md"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* BEST badge */}
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-sm">
                    BEST
                  </span>
                </div>
              )}

              {/* Package name */}
              <h3 className="text-lg font-bold mb-4">마케팅 {pkg.name}</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-3xl font-bold ${pkg.highlight ? "text-primary" : "text-dark"}`}>
                  {pkg.price}
                </span>
                <span className="text-muted text-sm">만원 / 월</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block text-center py-3.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-primary text-white hover:shadow-md hover:-translate-y-0.5"
                    : "border border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                상담 신청
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
          >
            서비스 상세 보기
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
