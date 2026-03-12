export default function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "정보 나열이 아닌\n공감 중심 콘텐츠",
      description:
        "교과서식 설명이 아닌, 환자의 고민과 원장님의 진심이 느껴지는 브랜딩 콘텐츠를 설계합니다. '내 아픔을 이해해주는 병원'이라는 확신을 심어줍니다.",
    },
    {
      number: "02",
      title: "광고도 중요하지만\n방향이 먼저",
      description:
        "광고는 병원의 가치를 널리 알리는 중요한 도구입니다. 다만 광고 효과를 높이기 위해서라도, 원장님의 진료 철학과 병원만의 기준이 먼저 정리되어야 합니다.",
    },
    {
      number: "03",
      title: "선택과 집중 전략",
      description:
        "모든 것을 말하지 않습니다. 병원이 가장 잘하는 진료에 집중해 환자의 확신을 만듭니다. 하나의 확실한 킬러 콘텐츠가 자리 잡으면, 다른 진료 과목의 매출은 자연스럽게 따라옵니다.",
    },
    {
      number: "04",
      title: "지역 독점 운영",
      description:
        "한 지역에서는 한 종류의 병원만 담당하여, 병원의 브랜드 가치를 보호합니다. 경쟁이 아닌, 신뢰를 기반으로 한 파트너십을 지향합니다.",
    },
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary tracking-wider uppercase mb-3 block">WHY CARE LOG</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            케어로그가 지켜오는 4가지 약속
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-primary">{item.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold whitespace-pre-line mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
