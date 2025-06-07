'use client';

import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('Swap');
    const [sellAmount, setSellAmount] = useState('0');
    const [buyAmount, setBuyAmount] = useState('0');

    return (
        <div className="min-h-screen bg-gray-50" data-oid="jo9x0w9">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4" data-oid="6dtkh-c">
                <div
                    className="flex items-center justify-between max-w-7xl mx-auto"
                    data-oid="k1y53z2"
                >
                    <nav className="flex items-center space-x-8" data-oid="hhco:5g">
                        <span className="text-black font-semibold" data-oid="b8:j:0i">
                            Trade
                        </span>
                        <span className="text-gray-500" data-oid="ta3cz3o">
                            Explore
                        </span>
                        <span className="text-gray-500" data-oid="_1xvn8e">
                            Pool
                        </span>
                    </nav>

                    <div className="flex items-center space-x-4" data-oid="9ysgi8d">
                        <div className="relative" data-oid=".gdtix:">
                            <input
                                type="text"
                                placeholder="Search tokens"
                                className="bg-gray-100 rounded-lg px-4 py-2 pl-10 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                data-oid="xrfptdz"
                            />

                            <svg
                                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="nwms-yj"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    data-oid="ltqla2r"
                                />
                            </svg>
                        </div>
                        <button className="text-gray-400" data-oid="q9tach4">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="1t65770"
                            >
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                    data-oid="pk6r6cq"
                                />
                            </svg>
                        </button>
                        <button
                            className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                            data-oid="5y2rgjg"
                        >
                            Connect
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-md mx-auto pt-12 px-4" data-oid="r-862o_">
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
                    data-oid="13:lz47"
                >
                    {/* Tab Navigation */}
                    <div className="flex items-center justify-between mb-8" data-oid="jn29epl">
                        <div className="flex space-x-6" data-oid="-ue:e8f">
                            {['Swap', 'Limit', 'Send', 'Buy'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                                        activeTab === tab
                                            ? 'text-black border-black'
                                            : 'text-gray-400 border-transparent hover:text-gray-600'
                                    }`}
                                    data-oid="o9u8usi"
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <button className="text-gray-400 hover:text-gray-600" data-oid="xg743og">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="q8qdf:z"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                    data-oid="0rp.ekp"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Sell Section */}
                    <div className="mb-4" data-oid=".i83fb1">
                        <label className="text-sm text-gray-600 mb-2 block" data-oid="brviphx">
                            Sell
                        </label>
                        <div className="bg-gray-50 rounded-xl p-4" data-oid="sug39k8">
                            <div className="flex items-center justify-between" data-oid="8_t4o14">
                                <input
                                    type="text"
                                    value={sellAmount}
                                    onChange={(e) => setSellAmount(e.target.value)}
                                    className="bg-transparent text-3xl font-light outline-none flex-1"
                                    placeholder="0"
                                    data-oid="_c2przp"
                                />

                                <div className="flex items-center space-x-2" data-oid="lje5l2y">
                                    <div
                                        className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center"
                                        data-oid="8ha2gto"
                                    >
                                        <span
                                            className="text-white text-xs font-bold"
                                            data-oid="9iu2vuu"
                                        >
                                            u
                                        </span>
                                    </div>
                                    <span className="font-medium" data-oid="j::ts9d">
                                        SUI
                                    </span>
                                    <svg
                                        className="w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="5h5s6.a"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                            data-oid="cfd.jwk"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 mt-2" data-oid="d.jxytg">
                                $0
                            </div>
                        </div>
                    </div>

                    {/* Swap Arrow */}
                    <div className="flex justify-center my-4" data-oid="ql4s:jl">
                        <button
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            data-oid="j7sa9zo"
                        >
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="hlw5h58"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    data-oid="i_1c.2v"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Buy Section */}
                    <div className="mb-8" data-oid="bqtlb-.">
                        <label className="text-sm text-gray-600 mb-2 block" data-oid="srdatmk">
                            Buy
                        </label>
                        <div className="bg-gray-50 rounded-xl p-4" data-oid="qkcjwos">
                            <div className="flex items-center justify-between" data-oid="0.f1w7y">
                                <input
                                    type="text"
                                    value={buyAmount}
                                    onChange={(e) => setBuyAmount(e.target.value)}
                                    className="bg-transparent text-3xl font-light outline-none flex-1"
                                    placeholder="0"
                                    data-oid="r-t5_qe"
                                />

                                <button
                                    className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                                    data-oid="fr0n5y3"
                                >
                                    Select token
                                    <svg
                                        className="w-4 h-4 ml-2 inline"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":02027z"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                            data-oid="6f4t2az"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Connect Wallet Button */}
                    <button
                        className="w-full bg-pink-100 text-pink-500 py-4 rounded-xl font-medium hover:bg-pink-200 transition-colors"
                        data-oid="uenl0:w"
                    >
                        Connect wallet
                    </button>
                </div>
            </main>
        </div>
    );
}
