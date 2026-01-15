import React from 'react';

const DeleteAccount = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl text-slate-300">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">Account Deletion Request</h1>

                <div className="space-y-6">
                    <p className="text-lg text-slate-400">
                        If you would like to delete your BurnBurn Fit account, please follow the steps below.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">How to request account deletion:</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Send an email to <a href="mailto:berna.kocalar@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline">berna.kocalar@gmail.com</a></li>
                            <li>Include the email address associated with your account</li>
                            <li>Write “Account Deletion Request” in the subject line</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">What data will be deleted:</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>User authentication data (Firebase Authentication)</li>
                            <li>User profile information</li>
                            <li>All associated user-generated content</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">What data may be retained:</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Anonymous or aggregated data for legal or analytical purposes (if required)</li>
                        </ul>
                    </section>

                    <div className="pt-6 border-t border-slate-700 mt-8">
                        <p className="font-semibold text-white">Your request will be processed within 7 days.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
