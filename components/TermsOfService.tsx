import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TermsOfService: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="pt-24 pb-20 px-4 min-h-screen bg-silver-50">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-silver-100">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-silver-900 mb-8">
                    {language === 'en' ? 'Terms of Service' : '이용 약관'}
                </h1>

                <div className="prose prose-silver max-w-none text-silver-700">
                    {language === 'en' ? (
                        <>
                            <p>Last updated: January 2026</p>

                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing and using the Evergreen Silver Missionary Organization (ESMO) website, you agree to be bound by these Terms of Service.</p>

                            <h3>2. Non-Profit Status Disclaimer</h3>
                            <p><strong>Please Note:</strong> ESMO is currently in the process of applying for 501(c)(3) tax-exempt status with the IRS. While we operate as a non-profit community organization, contributions made at this time may not be tax-deductible. We recommend consulting with a tax professional regarding your donations.</p>

                            <h3>3. Use of Content</h3>
                            <p>All content on this website, including text, images, and logos, is the property of ESMO or its content suppliers and is protected by copyright laws.</p>

                            <h3>4. Limitation of Liability</h3>
                            <p>ESMO shall not be liable for any damages arising out of the use or inability to use the materials on this website.</p>

                            <h3>5. Governing Law</h3>
                            <p>These terms shall be governed by and construed in accordance with the laws of the State of California.</p>
                        </>
                    ) : (
                        <>
                            <p>최종 수정일: 2026년 1월</p>

                            <h3>1. 약관의 동의</h3>
                            <p>에버그린 실버 선교회(ESMO) 웹사이트를 이용함으로써 귀하는 본 이용 약관에 동의하게 됩니다.</p>

                            <h3>2. 비영리 단체 지위 및 세금 공제 안내</h3>
                            <p><strong>주의:</strong> ESMO는 현재 미국 국세청(IRS)에 501(c)(3) 면세 지위를 신청하는 과정에 있습니다. 비영리 봉사 단체로 운영되고 있으나, 현재 시점에서의 후원금은 세금 공제가 불가능할 수 있습니다. 기부와 관련된 세금 문제는 세무 전문가와 상담하시기 바랍니다.</p>

                            <h3>3. 콘텐츠의 이용</h3>
                            <p>텍스트, 이미지, 로고를 포함한 본 웹사이트의 모든 콘텐츠는 ESMO 또는 콘텐츠 제공자의 자산이며 저작권법의 보호를 받습니다.</p>

                            <h3>4. 책임의 제한</h3>
                            <p>ESMO는 본 웹사이트의 자료 사용으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다.</p>

                            <h3>5. 준거법</h3>
                            <p>본 약관은 캘리포니아 주법에 따라 해석되고 집행됩니다.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
