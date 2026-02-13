import React, { useEffect, useState } from 'react';
import { Post, Category } from '../types';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Wrench, Lightbulb, MessageCircleQuestion, ExternalLink, ChevronRight, PenLine, Save, HelpCircle } from 'lucide-react';

interface PostCardProps {
  post: Post;
  onImageClick: (url: string) => void;
  onNavigate?: (category: Category) => void;
}

interface QAItemCardProps {
  item: { topic: string; questions: string[] };
  index: number;
}

const QAItemCard: React.FC<QAItemCardProps> = ({ item, index }) => {
  const storageKey = `openclaw_tips_qa_${index}`;
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setAnswer(saved);
  }, [storageKey]);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setAnswer(e.target.value);
    localStorage.setItem(storageKey, e.target.value);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-xl bg-slate-900/5 flex items-center justify-center">
          <HelpCircle className="text-slate-900" size={18} />
        </div>
        <div className="text-sm font-bold px-3 py-1 rounded-full bg-slate-900 text-white">{item.topic}</div>
      </div>

      <div className="space-y-3">
        {item.questions.map((q, i) => (
          <div key={i} className="text-slate-900 font-semibold leading-snug">
            • {q}
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="relative">
          <div className="absolute top-3 left-3 text-slate-500">
            <PenLine size={16} />
          </div>
          <textarea
            value={answer}
            onChange={onChange}
            placeholder="写下你的答案/总结（会自动保存到本地）..."
            className="w-full min-h-[140px] p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all resize-y"
          />
          {answer && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs text-slate-700 font-semibold bg-white/90 px-2 py-1 rounded-md border border-slate-200">
              <Save size={12} />
              <span>Saved</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Pill: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-900 text-xs font-bold tracking-wide border border-slate-200">
    {icon}
    {label}
  </span>
);

const PostCard: React.FC<PostCardProps> = ({ post, onImageClick, onNavigate }) => {
  // HOME
  if (post.category === 'Intro') {
    return (
      <div className="h-full overflow-y-auto">
        <div className="p-10 md:p-14 bg-gradient-to-br from-white via-slate-50 to-slate-100 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Pill icon={<Sparkles size={14} />} label="Practice" />
              <Pill icon={<Wrench size={14} />} label="Setup" />
              <Pill icon={<Lightbulb size={14} />} label="Tips" />
              <Pill icon={<MessageCircleQuestion size={14} />} label="Q&A" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              OpenClaw Tips
              <span className="block text-slate-600 text-lg md:text-xl font-semibold mt-3">
                让 AI 变成你的「执行系统」：把碎片输入变成交付物
              </span>
            </h1>

            <p className="mt-6 text-slate-700 text-base md:text-lg leading-relaxed">
              {post.viewpoint}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigate?.('Practice')}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">Practice</div>
                    <div className="text-sm text-slate-600">真实案例：从想法到交付物</div>
                  </div>
                  <ChevronRight className="ml-auto text-slate-400 group-hover:text-slate-900" />
                </div>
              </button>

              <button
                onClick={() => onNavigate?.('Setup')}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Wrench size={18} />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">Setup</div>
                    <div className="text-sm text-slate-600">系统搭建：Airtable + Dashboard + 治理</div>
                  </div>
                  <ChevronRight className="ml-auto text-slate-400 group-hover:text-slate-900" />
                </div>
              </button>

              <button
                onClick={() => onNavigate?.('Tips')}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">Tips</div>
                    <div className="text-sm text-slate-600">技能/仓库/提示词：高频可复用</div>
                  </div>
                  <ChevronRight className="ml-auto text-slate-400 group-hover:text-slate-900" />
                </div>
              </button>

              <button
                onClick={() => onNavigate?.('Q&A')}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <MessageCircleQuestion size={18} />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">Q&A</div>
                    <div className="text-sm text-slate-600">协作边界：AI 外骨骼，不外包肌肉</div>
                  </div>
                  <ChevronRight className="ml-auto text-slate-400 group-hover:text-slate-900" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="p-10 md:p-14">
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
            {post.characteristics?.map((c, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="text-slate-900 font-extrabold mb-2">{c.label}</div>
                <div className="text-slate-700 text-sm leading-relaxed">{c.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Q&A
  if (post.category === 'Q&A') {
    return (
      <div className="h-full overflow-y-auto p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-sm font-bold text-slate-500">{post.location}</div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">{post.title}</h1>
            <p className="text-slate-700 mt-4 leading-relaxed">{post.viewpoint}</p>
            <div className="text-slate-600 mt-3">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(post.qaItems || []).map((item, idx) => (
              <QAItemCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Normal post
  return (
    <div className="h-full overflow-y-auto p-8 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="text-sm font-bold text-slate-500">{post.date} · {post.location}</div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">{post.title}</h1>
          <p className="text-slate-700 mt-4 leading-relaxed">{post.viewpoint}</p>

          <div className="mt-8 prose prose-slate max-w-none prose-headings:font-extrabold">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {(post.takeaway || post.tradeoff || post.reflection) && (
            <div className="mt-10 grid gap-4">
              {post.takeaway && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="font-extrabold text-slate-900 mb-2">Takeaway</div>
                  <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{post.takeaway}</div>
                </div>
              )}
              {post.tradeoff && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="font-extrabold text-slate-900 mb-2">Tradeoff</div>
                  <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{post.tradeoff}</div>
                </div>
              )}
              {post.reflection && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="font-extrabold text-slate-900 mb-2">Reflection</div>
                  <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{post.reflection}</div>
                </div>
              )}
            </div>
          )}
        </div>

        <aside className="lg:col-span-4 space-y-4">
          {post.links && post.links.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="font-extrabold text-slate-900 mb-3">Links</div>
              <div className="space-y-2">
                {post.links.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition"
                  >
                    <span className="text-sm font-semibold text-slate-900">{l.title}</span>
                    <ExternalLink size={16} className="text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {post.images && post.images.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="font-extrabold text-slate-900 mb-3">Images</div>
              <div className="grid grid-cols-2 gap-3">
                {post.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => onImageClick(img.url)}
                    className="group overflow-hidden rounded-xl border border-slate-200 hover:border-slate-400 bg-slate-50"
                    title={img.caption}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-28 object-cover group-hover:scale-[1.02] transition-transform" />
                  </button>
                ))}
              </div>
              <div className="text-xs text-slate-500 mt-3">点击图片可放大查看</div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default PostCard;
