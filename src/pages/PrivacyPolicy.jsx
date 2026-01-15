import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl text-slate-300">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>

                <div className="space-y-6">
                    <p className="text-sm text-slate-400">This privacy policy applies to the BurnBurn Fit mobile application.</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">Information Collection and Use</h2>
                        <p>The application may collect limited personal information such as email address or username for account creation and basic app functionality. This information is used solely to provide and improve the service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">Camera Permission</h2>
                        <p>The application may request access to the device camera. Camera access is used only when explicitly required by the user (for example, uploading a photo). No camera data is collected or stored without user consent.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">Third-Party Services</h2>
                        <p>The app may use third-party services that may collect information used to identify you, such as Google services or analytics tools.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">Data Security</h2>
                        <p>We value your trust in providing your personal information, and we strive to use commercially acceptable means of protecting it.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">Children’s Privacy</h2>
                        <p>This application does not knowingly collect personally identifiable information from children under the age of 13.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">Changes to This Privacy Policy</h2>
                        <p>This Privacy Policy may be updated from time to time. You are advised to review this page periodically for any changes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">Contact Us</h2>
                        <p>If you have any questions or suggestions about this Privacy Policy, contact us at:</p>
                        <p className="mt-2 text-blue-400">📧 <a href="mailto:berna.kocalar@gmail.com" className="hover:underline">berna.kocalar@gmail.com</a></p>
                    </section>

                    <div className="pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
                        Last updated: January 2026
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
