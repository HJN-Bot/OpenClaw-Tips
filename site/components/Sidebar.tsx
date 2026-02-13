import React, { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar';
import { Post, Category } from '../types';
import { Home, Sparkles, Wrench, Lightbulb, MessageCircleQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  posts: Post[];
  selectedPostId: string;
  onSelectPost: (post: Post) => void;
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export function SidebarDemo({ posts, selectedPostId, onSelectPost, activeCategory, onSelectCategory }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const homePost = posts.find((p) => p.category === 'Intro');
  const qaPost = posts.find((p) => p.category === 'Q&A');

  const contentPosts = posts.filter(
    (p) => p.category !== 'Intro' && p.category !== 'Q&A' && (activeCategory === 'All' || activeCategory === p.category)
  );

  const modules: Array<{ key: Category; label: string; icon: React.ReactNode }> = [
    { key: 'Practice', label: 'Practice', icon: <Sparkles className={`h-5 w-5 ${activeCategory === 'Practice' ? 'text-[#0f172a]' : 'text-neutral-500'}`} /> },
    { key: 'Setup', label: 'Setup', icon: <Wrench className={`h-5 w-5 ${activeCategory === 'Setup' ? 'text-[#0f172a]' : 'text-neutral-500'}`} /> },
    { key: 'Tips', label: 'Tips', icon: <Lightbulb className={`h-5 w-5 ${activeCategory === 'Tips' ? 'text-[#0f172a]' : 'text-neutral-500'}`} /> },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 border-r border-slate-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}

          {homePost && (
            <div className="mt-8 mb-4">
              <SidebarLink
                link={{
                  label: 'Home',
                  href: '#',
                  onClick: () => onSelectPost(homePost),
                  icon: <Home className={`h-5 w-5 ${selectedPostId === homePost.id ? 'text-[#0f172a]' : 'text-neutral-500'}`} />,
                }}
                className={selectedPostId === homePost.id ? 'bg-slate-900/5 rounded-lg' : ''}
              />
            </div>
          )}

          <div className="flex flex-col gap-2 mb-6">
            <div className="px-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">{open && 'Modules'}</div>
            <div className="flex flex-col gap-1">
              {modules.map((m) => (
                <SidebarLink
                  key={m.key}
                  link={{
                    label: m.label,
                    href: '#',
                    onClick: () => onSelectCategory(m.key),
                    icon: m.icon,
                  }}
                  className={activeCategory === m.key ? 'bg-slate-900/5 rounded-lg' : ''}
                />
              ))}

              {qaPost && (
                <SidebarLink
                  link={{
                    label: 'Q&A',
                    href: '#',
                    onClick: () => onSelectPost(qaPost),
                    icon: <MessageCircleQuestion className={`h-5 w-5 ${selectedPostId === qaPost.id ? 'text-[#0f172a]' : 'text-neutral-500'}`} />,
                  }}
                  className={selectedPostId === qaPost.id ? 'bg-slate-900/5 rounded-lg' : ''}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <div className="px-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">{open && 'Chapters'}</div>
            {contentPosts.map((post) => (
              <SidebarLink
                key={post.id}
                link={{
                  label: post.title,
                  href: '#',
                  onClick: () => onSelectPost(post),
                  icon: <span className={`h-2.5 w-2.5 rounded-full ${selectedPostId === post.id ? 'bg-slate-900' : 'bg-slate-300'} inline-block`} />,
                }}
                className={selectedPostId === post.id ? 'bg-slate-900/5 rounded-lg' : ''}
              />
            ))}
          </div>
        </div>

        <div>
          <SidebarLink
            link={{
              label: 'HJN',
              href: '#',
              icon: (
                <img
                  src="https://ui-avatars.com/api/?name=HJN&background=0f172a&color=fff&size=128"
                  className="h-7 w-7 shrink-0 rounded-full object-cover"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <div className="font-normal flex space-x-2 items-center text-sm text-slate-900 py-1 relative z-20">
      <div className="h-5 w-6 bg-slate-900 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
      <motion.span
        {...({ initial: { opacity: 0 }, animate: { opacity: 1 } } as any)}
        className="font-medium text-slate-900 dark:text-white whitespace-pre"
      >
        OpenClaw Tips
      </motion.span>
    </div>
  );
};

export const LogoIcon = () => {
  return (
    <div className="font-normal flex space-x-2 items-center text-sm text-slate-900 py-1 relative z-20">
      <div className="h-5 w-6 bg-slate-900 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
    </div>
  );
};

export default SidebarDemo;
