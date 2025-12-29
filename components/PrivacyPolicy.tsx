import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Privacy Policy",
            date: "Effective Date: January 1, 2026",
            intro: "Evergreen Silver Missionary Organization (ESMO) values your privacy. This policy outlines how we collect, use, and protect your information.",
            sections: [
                {
                    heading: "Information We Collect",
                    text: "We collect information you provide directly to us, such as when you fill out a contact form, sign up for a newsletter, or make a donation. This may include your name, email address, phone number, and payment information."
                },
                {
                    heading: "How We Use Your Information",
                    text: "We use your information to communicate with you, process donations, organize volunteer activities, and improve our services. We do not sell your personal information to third parties."
                },
                {
                    heading: "Data Security",
                    text: "We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure."
                },
                {
                    heading: "Contact Us",
                    text: "If you have any questions about this Privacy Policy, please contact us."
                }
            ]
        },
        ko: {
            title: "개인정보 처리방침",
            date: "시행일: 2026년 1월 1일",
            intro: "에버그린 실버 선교회(ESMO)는 귀하의 개인정보를 소중하게 생각합니다. 본 방침은 귀하의 정보를 수집, 사용 및 보호하는 방법을 설명합니다.",
            sections: [
                {
                    heading: "수집하는 정보",
                    text: "우리는 귀하가 연락처 양식을 작성하거나, 뉴스레터를 신청하거나, 기부를 할 때 직접 제공하는 정보를 수집합니다. 여기에는 성함, 이메일 주소, 전화번호 및 결제 정보가 포함될 수 있습니다."
                },
                {
                    heading: "정보 사용 방법",
                    text: "우리는 귀하와 소통하고, 기부를 처리하며, 자원봉사 활동을 조직하고, 서비스를 개선하기 위해 정보를 사용합니다. 우리는 귀하의 개인정보를 제3자에게 판매하지 않습니다."
                },
                {
                    heading: "데이터 보안",
                    text: "우리는 귀하의 개인정보를 보호하기 위해 합리적인 보안 조치를 시행합니다. 그러나 인터넷을 통한 데이터 전송은 100% 안전할 수 없습니다."
                },
                {
                    heading: "문의하기",
                    text: "본 개인정보 처리방침에 대해 궁금한 점이 있으시면 언제든지 문의해 주십시오."
                }
            ]
        }
    };

    const t = language === 'ko' ? content.ko : content.en;

    return (
        <div className="pt-24 pb-20 bg-silver-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-silver-100">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-silver-900 mb-4">{t.title}</h1>
                <p className="text-silver-500 mb-8 italic">{t.date}</p>

                <div className="prose prose-lg text-silver-700">
                    <p className="mb-8 leading-relaxed">{t.intro}</p>

                    {t.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-xl font-bold text-evergreen-800 mb-3">{section.heading}</h2>
                            <p className="leading-relaxed">{section.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
