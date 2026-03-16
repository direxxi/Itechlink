'use client'

import { motion } from 'framer-motion'
import {
  HiEnvelope, HiTableCells, HiChatBubbleLeftEllipsis,
  HiClipboardDocumentList, HiDocumentText, HiPhone,
} from 'react-icons/hi2'
import ZohoAppIcon from '@/components/ui/ZohoAppIcon'
import SectionHeading from '@/components/ui/SectionHeading'

const beforeTools = [
  { icon: HiEnvelope, label: 'Gmail', color: '#EA4335' },
  { icon: HiTableCells, label: 'Spreadsheets', color: '#0F9D58' },
  { icon: HiChatBubbleLeftEllipsis, label: 'WhatsApp', color: '#25D366' },
  { icon: HiClipboardDocumentList, label: 'Manual Forms', color: '#666' },
  { icon: HiDocumentText, label: 'Word Docs', color: '#2B579A' },
  { icon: HiPhone, label: 'Phone Calls', color: '#777' },
]

const afterApps = [
  { slug: 'zoho-crm',      color: '#E42527', initial: 'C',  name: 'CRM' },
  { slug: 'zoho-books',    color: '#2B9E35', initial: 'B',  name: 'Books' },
  { slug: 'zoho-inventory',color: '#1B75BB', initial: 'I',  name: 'Inventory' },
  { slug: 'zoho-desk',     color: '#1F7DE5', initial: 'D',  name: 'Desk' },
  { slug: 'zoho-people',   color: '#F4A623', initial: 'P',  name: 'People' },
  { slug: 'zoho-projects', color: '#2DA94F', initial: 'Pr', name: 'Projects' },
]

export default function WhatIsZoho() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Explanatory text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionHeading
              title="What is Zoho?"
              label="The Platform"
            />

            <div className="space-y-5 mt-6">
              <p className="text-neutral-600 leading-relaxed text-lg">
                Zoho is a comprehensive suite of 45+ integrated business applications covering every function your company needs — sales, marketing, finance, HR, IT management, and productivity. Founded in 1996, Zoho is trusted by over 100 million users in 180+ countries worldwide.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Unlike piecing together separate subscriptions from multiple vendors, Zoho provides a unified ecosystem where data flows seamlessly between apps. Your CRM talks to your accounting. Your support tickets link to your customer records. Your HR system connects to your projects. One login. One admin panel. One source of truth.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                For businesses in Nigeria and across Africa, Zoho represents a rare opportunity to deploy enterprise-grade operational infrastructure at a fraction of the cost of competing platforms — making it the smart choice for ambitious, growing businesses.
              </p>
            </div>

            {/* Stat cards */}
            <div className="mt-8 space-y-4">
              {[
                { value: '100M+', label: 'Users Worldwide', sub: 'Trusted globally since 1996' },
                { value: '45+', label: 'Integrated Applications', sub: 'Covering every business function' },
                { value: '1', label: 'Unified Platform', sub: 'One login, one source of truth' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 bg-neutral-50 border border-neutral-100 rounded-xl px-6 py-4 hover:border-primary/20 transition-colors"
                >
                  <div className="font-sora font-black text-3xl text-primary shrink-0">{stat.value}</div>
                  <div>
                    <div className="font-semibold text-neutral-900 text-sm">{stat.label}</div>
                    <div className="text-neutral-500 text-xs">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Before / After visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="space-y-6"
          >

            {/* BEFORE */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">✕</div>
                <span className="font-sora font-semibold text-red-700">Before Zoho — The Chaos</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {beforeTools.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex flex-col items-center gap-2 bg-white rounded-xl p-3 border border-red-100">
                    <Icon className="w-7 h-7" style={{ color }} />
                    <span className="text-xs font-medium text-neutral-600 text-center leading-tight">{label}</span>
                  </div>
                ))}
              </div>
              {/* Chaotic lines */}
              <div className="mt-4 flex items-center gap-1 opacity-40">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-0.5 flex-1 bg-red-300" style={{ transform: `rotate(${(i - 2) * 5}deg)` }} />
                ))}
              </div>
              <p className="text-xs text-red-500 text-center mt-2 font-medium">Disconnected tools. Duplicate data. Manual effort.</p>
            </div>

            {/* AFTER */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 text-xs font-bold">✓</div>
                <span className="font-sora font-semibold text-emerald-700">After Zoho — Unified & Automated</span>
              </div>

              {/* Central Zoho hub */}
              <div className="relative flex flex-col items-center">
                <div className="grid grid-cols-3 gap-4 w-full">
                  {afterApps.map((app) => (
                    <div key={app.name} className="flex flex-col items-center gap-2">
                      <ZohoAppIcon slug={app.slug} size="sm" />
                      <span className="text-xs font-medium text-neutral-600">{app.name}</span>
                    </div>
                  ))}
                </div>
                {/* Connecting lines visual */}
                <div className="mt-4 flex items-center gap-1 w-full">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-0.5 flex-1 bg-gradient-to-r from-emerald-300 to-emerald-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-emerald-600 text-center mt-3 font-medium">Integrated. Automated. One source of truth.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
