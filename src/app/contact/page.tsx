"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    doctorName: "",
    phone: "",
    email: "",
    category: "",
    region: "",
    currentMarketing: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 폼 제출 로직 연결 (네이버 폼 또는 자체 API)
    alert("상담 신청이 완료되었습니다. 빠르게 연락드리겠습니다.");
  };

  const services = [
    {
      service: "브랜드 블로그",
      desc: "신뢰감을 주는 전문 의료 콘텐츠",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#e8f5ee" />
          <path d="M32 12L36 16L20 32H16V28L32 12Z" fill="#3a6670" stroke="#2a4e56" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M29 15L33 19" stroke="#4d7d88" strokeWidth="1.5" />
          <line x1="16" y1="36" x2="32" y2="36" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="32" x2="24" y2="32" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
    },
    {
      service: "플레이스 최적화",
      desc: "검색 시 가장 매력적인 세팅 및 관리",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#e8f5ee" />
          <path d="M24 10C19.58 10 16 13.58 16 18C16 25.5 24 36 24 36S32 25.5 32 18C32 13.58 28.42 10 24 10Z" fill="#4d7d88" stroke="#2a4e56" strokeWidth="1.5" />
          <circle cx="24" cy="18" r="4" fill="#e8f5ee" stroke="#3a6670" strokeWidth="1.5" />
          <circle cx="24" cy="18" r="1.5" fill="#c5a55a" />
          <path d="M18 34C18 34 20 32 24 32C28 32 30 34 30 34" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
    },
    {
      service: "블로그 체험단",
      desc: "의료법 준수 생생한 후기 전달",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#e8f5ee" />
          <circle cx="20" cy="18" r="5" fill="#4d7d88" />
          <circle cx="30" cy="18" r="5" fill="#5a9aa8" />
          <path d="M12 34C12 28.48 16.48 24 22 24H28C33.52 24 38 28.48 38 34" stroke="#3a6670" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="18" r="2" fill="#e8f5ee" />
          <circle cx="30" cy="18" r="2" fill="#e8f5ee" />
          <path d="M22 30L24 32L28 28" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      service: "카페 바이럴",
      desc: "지역 커뮤니티 자연스러운 입소문",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#e8f5ee" />
          <rect x="10" y="14" width="20" height="14" rx="7" fill="#4d7d88" />
          <path d="M14 28L10 34" stroke="#4d7d88" strokeWidth="2" strokeLinecap="round" />
          <rect x="20" y="20" width="18" height="12" rx="6" fill="#5a9aa8" />
          <path d="M34 32L38 36" stroke="#5a9aa8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="17" cy="21" r="1.5" fill="#e8f5ee" />
          <circle cx="21" cy="21" r="1.5" fill="#e8f5ee" />
          <circle cx="25" cy="26" r="1.5" fill="#e8f5ee" />
          <circle cx="29" cy="26" r="1.5" fill="#e8f5ee" />
          <circle cx="33" cy="26" r="1.5" fill="#e8f5ee" />
        </svg>
      ),
    },
    {
      service: "스레드 · SNS",
      desc: "최신 트렌드에 맞춘 채널 확장",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#e8f5ee" />
          <rect x="14" y="8" width="20" height="34" rx="4" fill="#3a6670" stroke="#2a4e56" strokeWidth="1" />
          <rect x="16" y="12" width="16" height="22" rx="1" fill="#e8f5ee" />
          <circle cx="24" cy="38" r="2" fill="#c5a55a" />
          <path d="M20 18H28" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 22H26" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 26H24" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="22" cy="30" r="1" fill="#c5a55a" />
          <circle cx="26" cy="30" r="1" fill="#4d7d88" />
        </svg>
      ),
    },
    {
      service: "성과 리포트",
      desc: "월별 데이터 분석 및 전략 미팅",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#e8f5ee" />
          <rect x="12" y="28" width="5" height="10" rx="1" fill="#5a9aa8" />
          <rect x="19" y="22" width="5" height="16" rx="1" fill="#4d7d88" />
          <rect x="26" y="16" width="5" height="22" rx="1" fill="#3a6670" />
          <rect x="33" y="12" width="5" height="26" rx="1" fill="#2a4e56" />
          <path d="M12 26L19 20L26 14L36 10" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36" cy="10" r="2.5" fill="#c5a55a" />
        </svg>
      ),
    },
  ];

  const diagnosisPoints = [
    {
      title: "채널 진단",
      desc: "현재 어떤 마케팅 채널이 필요하고, 어떤 채널이 비효율적인지 분석합니다.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="24" cy="24" r="16" fill="#e8f5ee" stroke="#4d7d88" strokeWidth="2" />
          <circle cx="24" cy="24" r="8" fill="#d4edda" stroke="#3a6670" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="2" fill="#3a6670" />
          <line x1="36" y1="36" x2="50" y2="50" stroke="#3a6670" strokeWidth="4" strokeLinecap="round" />
          <line x1="36" y1="36" x2="48" y2="48" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="18" r="1.5" fill="#5a9aa8" opacity="0.6" />
          <circle cx="30" cy="20" r="1" fill="#5a9aa8" opacity="0.4" />
        </svg>
      ),
      gradient: "from-[#3a6670] to-[#4d7d88]",
    },
    {
      title: "키워드 분석",
      desc: "지역과 진료과에 맞는 핵심 키워드와 세부 키워드를 발굴합니다.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="4" y="16" width="32" height="16" rx="8" fill="#4d7d88" />
          <text x="12" y="28" fill="#e8f5ee" fontSize="8" fontWeight="bold">#KEY</text>
          <rect x="20" y="6" width="28" height="12" rx="6" fill="#c5a55a" opacity="0.8" />
          <text x="26" y="15" fill="#fff" fontSize="7" fontWeight="bold">검색</text>
          <rect x="16" y="36" width="36" height="14" rx="7" fill="#5a9aa8" />
          <text x="22" y="46" fill="#e8f5ee" fontSize="7" fontWeight="bold">키워드</text>
          <circle cx="48" cy="12" r="3" fill="#3a6670" opacity="0.3" />
          <circle cx="8" cy="40" r="2" fill="#c5a55a" opacity="0.3" />
        </svg>
      ),
      gradient: "from-[#c5a55a] to-[#d4b86a]",
    },
    {
      title: "콘텐츠 전략",
      desc: "병원의 강점과 환자의 페인포인트에 맞는 콘텐츠 방향을 설계합니다.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 6C18 6 12 14 12 22C12 28 16 32 20 34V40H36V34C40 32 44 28 44 22C44 14 38 6 28 6Z" fill="#c5a55a" />
          <path d="M28 6C22 6 16 12 16 20C16 26 20 30 24 32V38H32V32C36 30 40 26 40 20C40 12 34 6 28 6Z" fill="#f0e6c8" />
          <path d="M24 14C24 14 26 20 28 20C30 20 28 14 32 14" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="22" y="40" width="12" height="3" rx="1" fill="#3a6670" />
          <rect x="24" y="44" width="8" height="3" rx="1" fill="#4d7d88" />
          <path d="M28 2V6" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 8L44 4" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 8L12 4" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <path d="M46 18H50" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 18H10" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      gradient: "from-[#5a9aa8] to-[#4d7d88]",
    },
  ];

  const infoItems = [
    {
      title: "상담 가능 시간",
      text: "평일 10:00 - 18:00",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" fill="#e8f5ee" stroke="#4d7d88" strokeWidth="2" />
          <circle cx="22" cy="22" r="14" fill="white" stroke="#3a6670" strokeWidth="1.5" />
          <line x1="22" y1="22" x2="22" y2="14" stroke="#3a6670" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="22" y1="22" x2="30" y2="22" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="22" r="2" fill="#3a6670" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1={22 + 12 * Math.cos((deg * Math.PI) / 180)}
              y1={22 + 12 * Math.sin((deg * Math.PI) / 180)}
              x2={22 + 13.5 * Math.cos((deg * Math.PI) / 180)}
              y2={22 + 13.5 * Math.sin((deg * Math.PI) / 180)}
              stroke="#5a9aa8"
              strokeWidth="1"
              strokeLinecap="round"
            />
          ))}
        </svg>
      ),
    },
    {
      title: "빠른 상담",
      text: "카카오톡 또는 네이버 폼으로도 문의 가능합니다",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="3" y="3" width="38" height="38" rx="8" fill="#e8f5ee" />
          <path d="M8 12C8 10.34 9.34 9 11 9H33C34.66 9 36 10.34 36 12V28C36 29.66 34.66 31 33 31H20L12 37V31H11C9.34 31 8 29.66 8 28V12Z" fill="#4d7d88" />
          <path d="M14 17H30" stroke="#e8f5ee" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 21H26" stroke="#e8f5ee" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 25H20" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
          <circle cx="34" cy="10" r="4" fill="#c5a55a" />
          <text x="32.5" y="13" fill="white" fontSize="6" fontWeight="bold">!</text>
        </svg>
      ),
    },
    {
      title: "지역 독점 안내",
      text: "이미 담당 병원이 있는 지역은 진행이 어려울 수 있습니다",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="3" y="3" width="38" height="38" rx="8" fill="#e8f5ee" />
          <path d="M22 8L22 8C16.48 8 12 12.48 12 18V24L10 28H34L32 24V18C32 12.48 27.52 8 22 8Z" fill="#4d7d88" />
          <path d="M22 6V8" stroke="#3a6670" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 18L22 12L28 18" stroke="#e8f5ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="12" y="28" width="20" height="3" rx="1.5" fill="#3a6670" />
          <path d="M22 18V24" stroke="#e8f5ee" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="35" r="3" fill="#c5a55a" />
          <path d="M19 33H25" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero with gradient background and decorative SVGs */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #2a4e56 0%, #3a6670 40%, #4d7d88 70%, #5a9aa8 100%)" }}>
        {/* Decorative SVG patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dot grid */}
          <svg className="absolute top-8 left-8 opacity-10" width="200" height="200" viewBox="0 0 200 200">
            {Array.from({ length: 100 }).map((_, i) => (
              <circle key={i} cx={(i % 10) * 20 + 10} cy={Math.floor(i / 10) * 20 + 10} r="2" fill="white" />
            ))}
          </svg>
          {/* Large decorative circles */}
          <svg className="absolute -top-20 -right-20 opacity-10" width="400" height="400" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="60" stroke="#c5a55a" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
          {/* Abstract shapes bottom-left */}
          <svg className="absolute -bottom-10 -left-10 opacity-10" width="300" height="300" viewBox="0 0 300 300">
            <rect x="20" y="20" width="80" height="80" rx="16" fill="white" transform="rotate(15 60 60)" />
            <rect x="100" y="100" width="60" height="60" rx="12" fill="#c5a55a" transform="rotate(-10 130 130)" />
            <circle cx="220" cy="80" r="40" fill="white" />
            <path d="M150 200L200 150L250 200Z" fill="white" opacity="0.5" />
          </svg>
          {/* Floating plus signs */}
          <svg className="absolute top-1/3 right-1/4 opacity-15" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 4V20M4 12H20" stroke="#c5a55a" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <svg className="absolute bottom-1/3 left-1/3 opacity-10" width="32" height="32" viewBox="0 0 32 32">
            <path d="M16 4V28M4 16H28" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <p className="text-[#c5a55a] font-semibold mb-3 tracking-widest text-sm">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">
            맞춤 진단부터 받으세요
          </h1>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed text-lg">
            어떤 채널이 필요한지, 어떤 키워드를 공략해야 하는지,
            어떤 콘텐츠 전략이 맞는지를 분석하여
            맞춤형 전략을 설계해 드립니다.
          </p>
          {/* Scroll indicator */}
          <div className="mt-10">
            <svg className="mx-auto animate-bounce" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Why All-in-One */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e8f5ee] text-[#3a6670] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10 6H15L11 9L12.5 14L8 11L3.5 14L5 9L1 6H6L8 1Z" fill="#c5a55a" />
                </svg>
                ALL-IN-ONE
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                번거로운 소통은 줄이고,<br />
                효과는 극대화하는 올인원 시스템
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                브랜드 블로그는 A 업체, 플레이스 관리는 B 업체, 체험단은 C 업체...
                이렇게 나눠서 진행하다 보면 병원의 브랜드 정체성이 흔들리고
                소통 비용만 증가하게 됩니다.
              </p>
              <p className="text-muted leading-relaxed">
                저희는 원장님께서 진료에만 집중하실 수 있도록
                필요한 모든 서비스를 한곳에서 제공합니다.
                모든 채널이 하나의 전략 아래 움직여야 강력한 시너지를 낼 수 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#4d7d88]/30 hover:shadow-lg transition-all duration-300 group"
                  style={{ boxShadow: "0 2px 12px rgba(26,86,50,0.06)" }}
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-dark mb-1">{item.service}</p>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnosis Points */}
          <div className="relative rounded-3xl overflow-hidden mb-20" style={{ background: "linear-gradient(135deg, #f0f9f3 0%, #e8f5ee 50%, #f8f7f4 100%)" }}>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="absolute top-4 right-4 opacity-10" width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" stroke="#3a6670" strokeWidth="1" fill="none" />
                <circle cx="60" cy="60" r="35" stroke="#3a6670" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="p-8 md:p-12 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3">
                무료 진단에서 확인해 드리는 것들
              </h3>
              <p className="text-center text-muted text-sm mb-10 max-w-md mx-auto">
                데이터 기반으로 현황을 파악하고 최적의 방향을 제시합니다
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {diagnosisPoints.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                    <div className="flex justify-center mb-4 mt-2">
                      {item.icon}
                    </div>
                    <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Decorative sidebar */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center p-8">
              <svg width="220" height="280" viewBox="0 0 220 280" fill="none" className="mb-6">
                {/* Clipboard */}
                <rect x="30" y="20" width="160" height="240" rx="16" fill="#e8f5ee" stroke="#4d7d88" strokeWidth="2" />
                <rect x="70" y="8" width="80" height="24" rx="12" fill="#3a6670" />
                <circle cx="110" cy="20" r="6" fill="#e8f5ee" />
                {/* Form lines */}
                <rect x="50" y="55" width="60" height="8" rx="4" fill="#4d7d88" opacity="0.3" />
                <rect x="50" y="75" width="120" height="12" rx="4" fill="#d4edda" stroke="#5a9aa8" strokeWidth="1" />
                <rect x="50" y="100" width="60" height="8" rx="4" fill="#4d7d88" opacity="0.3" />
                <rect x="50" y="120" width="120" height="12" rx="4" fill="#d4edda" stroke="#5a9aa8" strokeWidth="1" />
                <rect x="50" y="145" width="60" height="8" rx="4" fill="#4d7d88" opacity="0.3" />
                <rect x="50" y="165" width="120" height="30" rx="4" fill="#d4edda" stroke="#5a9aa8" strokeWidth="1" />
                {/* Check marks */}
                <path d="M160 60L165 65L175 55" stroke="#c5a55a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M160 105L165 110L175 100" stroke="#c5a55a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Button */}
                <rect x="50" y="210" width="120" height="32" rx="8" fill="#3a6670" />
                <text x="85" y="230" fill="white" fontSize="11" fontWeight="bold">신청하기</text>
                {/* Decorative stars */}
                <path d="M190 40L194 48L203 49L197 55L198 64L190 60L182 64L183 55L177 49L186 48Z" fill="#c5a55a" opacity="0.3" />
                <path d="M25 180L28 186L35 187L30 191L31 198L25 195L19 198L20 191L15 187L22 186Z" fill="#5a9aa8" opacity="0.3" />
              </svg>
              <h3 className="text-xl font-bold text-center mb-3">무료 상담 신청</h3>
              <p className="text-sm text-muted text-center leading-relaxed max-w-xs">
                간단한 정보만 남겨주시면<br />
                전문 컨설턴트가 직접 연락드립니다
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="#e8f5ee" stroke="#4d7d88" strokeWidth="1.5" />
                  <path d="M7 10L9 12L13 8" stroke="#3a6670" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                24시간 이내 회신
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="#e8f5ee" stroke="#4d7d88" strokeWidth="1.5" />
                  <path d="M7 10L9 12L13 8" stroke="#3a6670" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                개인정보 안전 보호
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="#e8f5ee" stroke="#4d7d88" strokeWidth="1.5" />
                  <path d="M7 10L9 12L13 8" stroke="#3a6670" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                부담 없는 무료 진단
              </div>
            </div>

            {/* Form card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: "0 8px 40px rgba(26,86,50,0.1)" }}>
                <h2 className="text-2xl font-bold mb-2 lg:hidden">무료 상담 신청</h2>
                <p className="text-muted text-sm mb-8 lg:hidden">간단한 정보만 남겨주시면 전문 컨설턴트가 직접 연락드립니다</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark">
                        병원명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="hospitalName"
                        value={formData.hospitalName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors"
                        placeholder="병원명을 입력해주세요"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark">
                        원장님 성함 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors"
                        placeholder="010-0000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark">
                        이메일
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark">
                        진료 과목
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors"
                      >
                        <option value="">선택해주세요</option>
                        <option value="내과">내과</option>
                        <option value="외과">외과</option>
                        <option value="정형외과">정형외과</option>
                        <option value="피부과">피부과</option>
                        <option value="성형외과">성형외과</option>
                        <option value="치과">치과</option>
                        <option value="한의원">한의원</option>
                        <option value="안과">안과</option>
                        <option value="이비인후과">이비인후과</option>
                        <option value="산부인과">산부인과</option>
                        <option value="소아과">소아과</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark">
                        병원 소재지
                      </label>
                      <input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors"
                        placeholder="예: 인천 송도, 서울 강남"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark">
                      현재 마케팅 진행 여부
                    </label>
                    <select
                      name="currentMarketing"
                      value={formData.currentMarketing}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors"
                    >
                      <option value="">선택해주세요</option>
                      <option value="없음">마케팅 미진행</option>
                      <option value="자체운영">자체 운영 중</option>
                      <option value="대행사이용">다른 대행사 이용 중</option>
                      <option value="개원준비">개원 준비 중</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark">
                      문의 내용
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7d88]/20 focus:border-[#4d7d88] bg-[#fafaf8] hover:bg-white transition-colors resize-none"
                      placeholder="현재 병원의 마케팅 상황이나 궁금하신 점을 자유롭게 작성해주세요"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-base font-semibold rounded-xl text-white transition-all duration-300 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #3a6670 0%, #4d7d88 100%)" }}
                  >
                    무료 상담 신청하기
                  </button>

                  <p className="text-xs text-center text-muted">
                    제출하신 정보는 상담 목적으로만 사용되며, 24시간 이내에 연락드립니다.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #f8f7f4 0%, #f0f9f3 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">상담 안내</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
