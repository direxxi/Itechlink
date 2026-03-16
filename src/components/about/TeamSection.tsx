"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HiXMark,
  HiArrowRight,
  HiSparkles,
  HiEnvelope,
  HiBriefcase,
  HiMapPin,
  HiArrowUpRight,
  HiCheckBadge,
} from "react-icons/hi2";

const team = [
  {
    initials: "GC",
    name: "Mr. Girish Tripathi",
    role: "CEO & Founder",
    tag: "Leadership",
    tagColor: "bg-sky-100 text-sky-700",
    gradient: "from-[#0EA5E9] to-[#0077B6]",
    gradientRaw: ["#0EA5E9", "#0077B6"],
    accentColor: "#0EA5E9",
    photo: null, // Set to '/team/adeyemi.jpg' when ready
    bio: "Girish founded iTechLink on a single conviction: that every Nigerian business deserves enterprise-grade technology, not just the Fortune 500. With 10+ years across IT consulting and digital transformation, he has personally led critical projects in logistics, fintech, retail, and professional services — helping clients that once ran on spreadsheets now run on scalable, automated infrastructure.",
    funFact:
      "Personally onboarded iTechLink's first 20 clients without a formal sales team.",
    location: "Lagos, Nigeria",
    email: "girishtripathi9009@gmail.com",
    linkedin: "#",
    skills: [
      { name: "Strategic Leadership", level: 98 },
      { name: "IT Consulting", level: 95 },
      { name: "Digital Transformation", level: 90 },
      { name: "Business Development", level: 88 },
    ],
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Clients Led", value: "50+" },
      { label: "Industries", value: "8" },
    ],
  },
  {
    initials: "TSO",
    name: "Seyi-Oduntan Temi",
    role: "Software Engineer",
    tag: "Engineering",
    tagColor: "bg-emerald-100 text-emerald-700",
    gradient: "from-emerald-500 to-teal-600",
    gradientRaw: ["#10b981", "#0d9488"],
    accentColor: "#10b981",
    photo: null,
    bio: "Temi contributes to the technical execution of iTechLink deployments. As a software engineer, he helps design and build scalable applications, maintains coding standards, and reviews critical components of client solutions. He has experience working with cloud platforms like Azure and AWS, and supports the development of secure and reliable systems for clients in various industries.",
    funFact:
      "Temi believes most problems can be solved with good logic, a bit of patience, and occasionally restarting the server.",
    location: "Lagos, Nigeria",
    email: "support@itechlink.com.ng",
    skills: [
      { name: "Mobile Development", level: 96 },
      { name: "Zoho Integration", level: 94 },
      { name: "Website Development", level: 92 },
      { name: "Data Analysis", level: 89 },
    ],
    stats: [
      { label: "Certifications", value: "6" },
      { label: "Infra Migrations", value: "30+" },
    ],
  },
  {
    initials: "AKS",
    name: "Adesunloye Kehinde Samuel",
    role: "Head of Business Solutions",
    tag: "Zoho Expert",
    tagColor: "bg-purple-100 text-purple-700",
    gradient: "from-purple-500 to-indigo-600",
    gradientRaw: ["#8b5cf6", "#4f46e5"],
    accentColor: "#8b5cf6",
    photo: null,
    bio: "Samuel is iTechLink's Zoho specialist and business process authority. He has designed and deployed CRM systems, accounting workflows, and cross-functional automation for businesses ranging from 5-person startups to 200-person enterprises. His implementations don't just configure software — they redesign how businesses operate, often cutting operational time by 40% or more.",
    funFact:
      "His longest Zoho implementation saved a client 120 staff-hours per month on manual reporting alone.",
    location: "Lagos, Nigeria",
    email: "info@itechlink.com.ng",
    linkedin: "#",
    skills: [
      { name: "Zoho CRM & Books", level: 97 },
      { name: "Business Process Design", level: 93 },
      { name: "Workflow Automation", level: 95 },
      { name: "Data Migration", level: 87 },
    ],
    stats: [
      { label: "Zoho Implementations", value: "40+" },
      { label: "Avg. Time Saved", value: "35%" },
      { label: "Client Retention", value: "100%" },
    ],
  },
  {
    initials: "AB",
    name: "Akinrinola Bisola",
    role: "Lead Designer & Front-End Dev",
    tag: "Design",
    tagColor: "bg-orange-100 text-orange-700",
    gradient: "from-orange-500 to-amber-600",
    gradientRaw: ["#f97316", "#d97706"],
    accentColor: "#f97316",
    photo: null,
    bio: "Bisola lives at the intersection of pixel-perfect design and performant code. She leads every web build and design engagement at iTechLink — from initial wireframes through to production deployment. Her work consistently earns client websites Lighthouse scores above 90 while delivering interfaces that convert visitors into customers. She's obsessed with the details most people never notice, but everyone feels.",
    funFact:
      "Redesigned a client's landing page that doubled their enquiry rate in 3 weeks.",
    location: "Lagos, Nigeria",
    email: "akinrinolaabisolaa@gmail.com",
    linkedin: "#",
    skills: [
      { name: "UI/UX Design", level: 97 },
      { name: "React & Next.js", level: 93 },
      { name: "Figma & Design Systems", level: 95 },
      { name: "Performance Optimisation", level: 88 },
    ],
    stats: [
      { label: "Sites Launched", value: "60+" },
      { label: "Avg Lighthouse", value: "92" },
      { label: "Design Systems", value: "12" },
    ],
  },
];

const openRoles = [
  { title: "IT Support Engineer", type: "Full-time", dept: "Engineering" },
  { title: "Zoho Developer", type: "Full-time", dept: "Business Solutions" },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time / Remote",
    dept: "Marketing",
  },
  { title: "Business Development Rep", type: "Full-time", dept: "Sales" },
];

function TeamModal({
  member,
  onClose,
}: {
  member: (typeof team)[0];
  onClose: () => void;
}) {
  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md" />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 32 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── LEFT: Photo panel ──────────────────────────────── */}
        <div
          className="relative md:w-80 lg:w-96 shrink-0 flex flex-col justify-end overflow-hidden min-h-[280px] md:min-h-0"
          style={{
            background: `linear-gradient(135deg, ${member.gradientRaw[0]}, ${member.gradientRaw[1]})`,
          }}
        >
          {/* Grid overlay texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-black/10" />

          {/* Photo or placeholder */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8 pt-12 pb-6">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-40 h-40 rounded-3xl object-cover shadow-2xl border-4 border-white/30 mb-6"
              />
            ) : (
              <div className="w-40 h-40 rounded-3xl bg-white/20 border-2 border-white/30 flex flex-col items-center justify-center mb-6 shadow-2xl backdrop-blur-sm group">
                <span className="font-sora font-black text-5xl text-white mb-2">
                  {member.initials}
                </span>
                <span className="text-white/50 text-xs font-medium text-center px-4">
                  Photo coming soon
                </span>
              </div>
            )}

            {/* Name on photo panel */}
            <div className="text-center">
              <h2 className="font-sora font-black text-white text-xl leading-tight mb-1">
                {member.name}
              </h2>
              <p className="text-white/70 text-sm font-medium">{member.role}</p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative z-10 bg-black/20 backdrop-blur-sm px-6 py-5 grid grid-cols-3 gap-3">
            {member.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-sora font-black text-white text-xl leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-white/50 text-[10px] leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location + email */}
          <div className="relative z-10 px-6 py-4 flex flex-col gap-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <HiMapPin className="w-3.5 h-3.5 shrink-0" />
              {member.location}
            </div>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-white/60 text-xs hover:text-white transition-colors"
            >
              <HiEnvelope className="w-3.5 h-3.5 shrink-0" />
              {member.email}
            </a>
          </div>
        </div>

        {/* ── RIGHT: Bio content ─────────────────────────────── */}
        <div className="flex-1 overflow-y-auto">
          {/* Top bar */}
          <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-neutral-100 px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${member.tagColor}`}
              >
                {member.tag}
              </span>
              <HiCheckBadge className="w-4 h-4 text-primary" />
              <span className="text-xs text-neutral-400 font-medium">
                iTechLink Team
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
            >
              <HiXMark className="w-4 h-4 text-neutral-600" />
            </button>
          </div>

          <div className="px-8 py-8 space-y-8">
            {/* Bio */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                About
              </p>
              <p className="text-neutral-700 leading-[1.85] text-[15px]">
                {member.bio}
              </p>
            </div>

            {/* Fun fact */}
            <div
              className="rounded-2xl p-5 border-l-4"
              style={{
                backgroundColor: `${member.accentColor}08`,
                borderColor: member.accentColor,
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: member.accentColor }}
              >
                ⚡ Quick Fact
              </p>
              <p className="text-neutral-700 text-sm leading-relaxed font-medium">
                {member.funFact}
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-5">
                Expertise
              </p>
              <div className="space-y-4">
                {member.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-semibold text-neutral-800">
                        {skill.name}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: member.accentColor }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.9,
                          delay: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${member.gradientRaw[0]}, ${member.gradientRaw[1]})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-wrap gap-3 pb-2">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${member.gradientRaw[0]}, ${member.gradientRaw[1]})`,
                }}
              >
                <HiEnvelope className="w-4 h-4" /> Email{" "}
                {member.name.split(" ")[0]}
              </a>
              <a
                href={member.linkedin}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
              >
                LinkedIn <HiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState<(typeof team)[0] | null>(
    null,
  );

  return (
    <>
      {/* ── Team Grid ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
                The People Behind iTechLink
              </span>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-neutral-950 leading-tight">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Team
                </span>
              </h2>
            </div>
            <p className="text-neutral-500 text-base max-w-sm leading-relaxed">
              Certified professionals united by one mission. Click any card to
              meet them properly.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.button
                key={member.name}
                onClick={() => setActiveMember(member)}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative text-left rounded-3xl overflow-hidden border border-neutral-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-neutral-200/80 transition-all duration-300 group w-full"
              >
                {/* Gradient header stripe */}
                <div
                  className="h-28 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${member.gradientRaw[0]}, ${member.gradientRaw[1]})`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
                  {/* Initials avatar — sits at the bottom edge of the stripe, partially overlapping */}
                  <div
                    className="absolute -bottom-7 left-6 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center font-sora font-black text-xl border-2 border-neutral-50"
                    style={{ color: member.gradientRaw[0] }}
                  >
                    {member.initials}
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pt-10 pb-6">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${member.tagColor} mb-3 inline-block`}
                  >
                    {member.tag}
                  </span>
                  <h3 className="font-sora font-bold text-neutral-900 text-[15px] mb-0.5 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-5">
                    {member.role}
                  </p>

                  {/* Skill pill preview */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.skills.slice(0, 2).map((s) => (
                      <span
                        key={s.name}
                        className="text-[10px] bg-neutral-50 border border-neutral-100 text-neutral-600 rounded-full px-2.5 py-1 font-medium"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 text-xs font-bold transition-all duration-200 group-hover:gap-3"
                    style={{ color: member.accentColor }}
                  >
                    <span>View Profile</span>
                    <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeMember && (
          <TeamModal
            member={activeMember}
            onClose={() => setActiveMember(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Join Us ──────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2 mb-6">
                <HiSparkles className="w-4 h-4 text-amber-400" />
                <span className="text-white/70 text-sm font-medium">
                  We're Hiring
                </span>
              </div>
              <h2 className="font-sora font-bold text-white text-5xl md:text-6xl leading-[1.05] mb-6">
                Join the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                  iTechLink Team
                </span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                A small, focused team doing big things. Passionate about
                technology and Africa's digital future? We want to hear from
                you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-4xl mx-auto">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center justify-between gap-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 rounded-2xl px-6 py-5 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                      {role.dept}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="text-[11px] text-white/40">
                      {role.type}
                    </span>
                  </div>
                  <h3 className="font-sora font-semibold text-white text-base">
                    {role.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 group-hover:bg-primary group-hover:border-primary flex items-center justify-center shrink-0 transition-all duration-300">
                  <HiArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              "🌍 Work with clients across Africa",
              "📈 Fast-moving, growing team",
              "🎓 Certifications sponsored",
              "💻 Remote-friendly",
              "🤝 Equity for key hires",
            ].map((perk) => (
              <div
                key={perk}
                className="border border-white/10 bg-white/5 rounded-full px-5 py-2 text-white/60 text-sm font-medium"
              >
                {perk}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/40 text-sm mb-6">
              No role that fits? Send your CV anyway — we hire for talent, not
              just vacancies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-sora font-semibold rounded-full px-10 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] text-base"
              >
                <HiEnvelope className="w-5 h-5" /> Send Your CV
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold rounded-full px-10 py-4 transition-all duration-300 text-base"
              >
                <HiBriefcase className="w-5 h-5" /> Ask About Roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
