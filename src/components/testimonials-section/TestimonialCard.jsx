import { useState } from "react";
import { Star } from "lucide-react";
import google from "../../assets/googleG.png";
import verfied from "../../assets/verified.png";
export default function TestimonialCard({ review }) {
  const { name, date, content, avatar, rating = 5 } = review;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-background border border-border rounded-xl shadow p-5 mx-2 flex flex-col w-full max-w-[360px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 bg-muted text-foreground rounded-full flex items-center justify-center text-sm font-bold">
              {name[0]}
            </div>
          )}
          <div className="text-left">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <img src={google} alt="Google" className="w-5 h-5" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
        <img src={verfied} alt="Google" className="w-8 h-8" />
      </div>

      {/* Content */}
      <p
        className={`text-sm text-muted-foreground ${
          isExpanded ? "" : "line-clamp-4"
        }`}
      >
        {content}
      </p>

      {/* Toggle */}
      {content.length > 160 && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-xs text-primary underline hover:text-primary/80 cursor-pointer self-start"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
