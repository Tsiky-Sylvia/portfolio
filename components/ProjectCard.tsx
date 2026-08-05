"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}){
    const locale = useLocale();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${project.bg} border border-gray-100 rounded-2xl p-8 flex flex-col gap-6`}
        >
            {/* Header */}
            <div className="flex items-start gap-4">
                <div className={`text-4xl bg-gradient-to-br ${project.color} p-4 rounded-xl shadow-md shrink-0`}>
                    {project.emoji}
                </div>
                <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {project.shortDescription[locale as "fr" | "en"]}
                </p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span 
                        key={tag}
                        className="px-3 py-1 bg-white rounded-full text-xs text-gray-700 border border-gray-200 font-medium shadow-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
                <a href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2 bg-gradient-to-r ${project.color} text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity`}
                >
                    Demo → 
                </a>

                <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                    GitHub
                </a>
                <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="px-5 py-2 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
                    >
                    Détails →
                </Link>
            </div>

        </motion.div>
    );

}