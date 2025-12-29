import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TermsOfService: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Terms of Service",
            date: "Effective Date: January 1, 2026",
            intro: "Welcome to Evergreen Silver Missionary Organization (ESMO). By accessing our website, you agree to comply with and be bound by the following terms and conditions.",
            sections: [
                {
                    heading: "Use of Website",
                    text: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website."
                },
                {
                    heading: "Intellectual Property",
                    text: "All content on this website, including text, graphics, logos, and images, is the property of ESMO and is protected by copyright laws."
                },
                {
                    heading: "Disclaimer",
                    text: "The materials on ESMO's website are provided on an 'as is' basis. ESMO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability."
                },
                {
                    heading: "Limitation of Liability",
                    text: "In no event shall ESMO be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on ESMO's website."
                },
                {
                    heading: "Changes to Terms",
                    text: "ESMO may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
                }
            ]
        },
        ko: {
            title: "이용 약관",
            date: "시행일: 2026년 1월 1일",
            intro: "에버그린 실버 선교회(ESMO)에 오신 것을 환영합니다. 본 웹사이트를 이용함으로써 귀하는 다음 약관을 준수하고 이에 구속되는 것에 동의하게 됩니다.",
            sections: [
                {
                    heading: "웹사이트 이용",
                    text: "귀하는 합법적인 목적으로만 본 웹사이트를 이용해야 하며, 타인의 웹사이트 이용 및 향유를 침해하거나 제한하는 방식으로 이용해서는 안 됩니다."
                },
                {
                    heading: "지적 재산권",
                    text: "텍스트, 그래픽, 로고, 이미지를 포함한 본 웹사이트의 모든 콘텐츠는 ESMO의 소유이며 저작권법의 보호를 받습니다."
                },
                {
                    heading: "면책 조항",
                    text: "ESMO 웹사이트의 자료는 '있는 그대로' 제공됩니다. ESMO는 명시적이거나 묵시적인 어떠한 보증도 하지 않으며, 상품성에 대한 묵시적 보증이나 조건을 포함한 기타 모든 보증을 부인합니다."
                },
                {
                    heading: "책임의 제한",
                    text: "어떠한 경우에도 ESMO는 본 웹사이트의 자료 사용 또는 사용 불가로 인해 발생하는 손해(데이터 또는 이익 손실에 대한 손해 포함)에 대해 책임을 지지 않습니다."
                },
                {
                    heading: "약관 변경",
                    text: "ESMO는 언제든지 사전 통지 없이 본 웹사이트의 이용 약관을 수정할 수 있습니다. 본 웹사이트를 계속 이용하는 것은 변경된 약관에 동의하는 것으로 간주됩니다."
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

export default TermsOfService;
