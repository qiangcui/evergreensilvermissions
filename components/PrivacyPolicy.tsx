import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="pt-24 pb-20 px-4 min-h-screen bg-silver-50">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-silver-100">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-silver-900 mb-8">
                    {language === 'en' ? 'Privacy Policy' : '개인정보 처리방침'}
                </h1>

                <div className="prose prose-silver max-w-none text-silver-700">
                    {language === 'en' ? (
                        <>
                            <p>Last updated: January 2026</p>
                            <p>Evergreen Silver Missionary Organization ("ESMO", "we", "us", or "our") respects your privacy and is committed to protecting your personal data.</p>

                            <h3>1. Information We Collect</h3>
                            <p>We may collect personal information that you voluntarily provide to us when you contact us, sign up for newsletters, or make a donation. This may include your name, email address, phone number, and postal address.</p>

                            <h3>2. How We Use Your Information</h3>
                            <p>We use your information to:</p>
                            <ul>
                                <li>Respond to your inquiries and provide support.</li>
                                <li>Process donations and issue receipts.</li>
                                <li>Send you updates about our mission and programs (only if you have opted in).</li>
                            </ul>

                            <h3>3. Data Protection</h3>
                            <p>We implement appropriate security measures to protect your personal information. We do not sell, trade, or rent your personal identification information to others.</p>

                            <h3>4. Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy, please contact us at hello@evergreensilver.org.</p>
                        </>
                    ) : (
                        <>
                            <p>최종 수정일: 2026년 1월</p>
                            <p>에버그린 실버 선교회("ESMO", "우리")는 귀하의 개인정보를 중요하게 생각하며, 이를 보호하기 위해 최선을 다하고 있습니다.</p>

                            <h3>1. 수집하는 개인정보 항목</h3>
                            <p>우리는 귀하가 문의하거나, 뉴스레터를 신청하거나, 후원할 때 자발적으로 제공하는 개인정보(이름, 이메일, 전화번호, 주소 등)를 수집할 수 있습니다.</p>

                            <h3>2. 개인정보의 이용 목적</h3>
                            <p>수집된 정보는 다음과 같은 목적으로 사용됩니다:</p>
                            <ul>
                                <li>문의 응대 및 지원 제공</li>
                                <li>후원금 처리 및 영수증 발급</li>
                                <li>선교회 소식 및 프로그램 안내 (동의한 경우에 한함)</li>
                            </ul>

                            <h3>3. 개인정보 보호</h3>
                            <p>우리는 귀하의 개인정보를 보호하기 위해 적절한 보안 조치를 취하고 있습니다. 귀하의 개인정보를 제3자에게 판매하거나 대여하지 않습니다.</p>

                            <h3>4. 문의하기</h3>
                            <p>본 개인정보 처리방침에 대해 궁금한 점이 있으시면 hello@evergreensilver.org로 문의해 주시기 바랍니다.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
